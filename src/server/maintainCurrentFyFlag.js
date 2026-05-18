import { GlideRecord, gs } from "@servicenow/glide";

var QUARTER_TABLE = "x_snc_quarterly_ga_quarter";
var LOG_SOURCE = "maintainCurrentFyFlag";

// Recompute is_current_fy across every Quarter record based on the
// fiscal_year of the single active=true Quarter.
// Guarded by a session-scoped flag so the cascade of updates this BR
// triggers doesn't re-enter itself.
export function maintainCurrentFyFlag(current) {
  var guard = "x_snc_quarterly_ga.maintainCurrentFyFlag.running";
  if (gs.getSession().getClientData(guard) === "1") {
    return;
  }
  gs.getSession().putClientData(guard, "1");
  try {
    var activeGr = new GlideRecord(QUARTER_TABLE);
    activeGr.addQuery("active", true);
    activeGr.setLimit(1);
    activeGr.query();
    var currentFy = activeGr.next() ? activeGr.getValue("fiscal_year") : "";

    var all = new GlideRecord(QUARTER_TABLE);
    all.query();
    var updated = 0;
    while (all.next()) {
      var shouldBe = !!currentFy && all.getValue("fiscal_year") === currentFy;
      var isNow = all.getValue("is_current_fy") === "1" || all.getValue("is_current_fy") === "true";
      if (shouldBe !== isNow) {
        all.setValue("is_current_fy", shouldBe);
        all.update();
        updated++;
      }
    }
    gs.info(
      LOG_SOURCE + ": currentFy=" + currentFy + " updated=" + updated + " quarter records"
    );
  } catch (e) {
    gs.error(LOG_SOURCE + ": exception: " + e + " stack: " + (e.stack || "no stack"));
    throw e;
  } finally {
    gs.getSession().putClientData(guard, "0");
  }
}
