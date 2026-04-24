/**
 * Calculate derived fields for Quarter Tracking records.
 * - New Target = Target + Gap Carryover
 * - % BUILD to New Target = (Total Pillar BUILD / New Target) * 100
 * - Build to Target Gap = New Target - Total Pillar BUILD
 * - Variance to Gap = Total Pillar UPSIDE - Build to Target Gap
 */
export function calculateQuarterTrackingMetrics(current) {
  var target = parseFloat(current.target) || 0;
  var gapCarryover = parseFloat(current.gap_carryover) || 0;
  var totalPillarBuild = parseFloat(current.total_pillar_build) || 0;
  var totalPillarUpside = parseFloat(current.total_pillar_upside) || 0;

  // New Target = Target + Gap Carryover
  var newTarget = target + gapCarryover;
  current.new_target = newTarget;

  // % BUILD to New Target = (Total Pillar BUILD / New Target) * 100
  if (newTarget !== 0) {
    current.pct_build_to_new_target = (totalPillarBuild / newTarget) * 100;
  } else {
    current.pct_build_to_new_target = 0;
  }

  // Build to Target Gap = New Target - Total Pillar BUILD
  var buildToTargetGap = newTarget - totalPillarBuild;
  current.build_to_target_gap = buildToTargetGap;

  // Variance to Gap = Total Pillar UPSIDE - Build to Target Gap
  current.variance_to_gap = totalPillarUpside - buildToTargetGap;
}
