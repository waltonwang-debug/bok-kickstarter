import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

export const ProductRevealScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const glowIntensity = interpolate(frame, [60, 90, 120, 150], [0.3, 0.8, 0.3, 0.8], { extrapolateRight: "clamp" });
  const ringScale = interpolate(frame, [30, 70], [0.8, 1], { extrapolateRight: "clamp" });
  const ringOpacity = interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [80, 110], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [80, 110], [20, 0], { extrapolateRight: "clamp" });
  const taglineOpacity = interpolate(frame, [130, 160], [0, 1], { extrapolateRight: "clamp" });
  const detailOpacity = interpolate(frame, [170, 200], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [300, 330], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      <div style={{ position: "absolute", width: "100%", height: "100%", background: "radial-gradient(ellipse at center, rgba(0, 229, 160, 0.05) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", top: 180, left: "50%", transform: `translateX(-50%) scale(${ringScale})`, opacity: ringOpacity }}>
        <div style={{ width: 240, height: 240, borderRadius: "50%", border: `3px solid ${COLORS.accent}`, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: `0 0 ${40 * glowIntensity}px ${20 * glowIntensity}px rgba(0, 229, 160, ${0.3 * glowIntensity})` }}>
          <div style={{ width: 180, height: 180, borderRadius: "50%", border: `2px solid rgba(0, 229, 160, 0.4)`, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: COLORS.accent, boxShadow: `0 0 20px 8px rgba(0, 229, 160, ${0.5 * glowIntensity})` }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: 500, width: "100%", textAlign: "center", opacity: titleOpacity, transform: `translateY(${titleY}px)` }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: 90, fontWeight: 700, color: COLORS.white, letterSpacing: "0.08em", margin: 0 }}>
          Meet <span style={{ color: COLORS.accent }}>BOK</span>
        </h1>
      </div>
      <div style={{ position: "absolute", top: 640, width: "100%", textAlign: "center", opacity: taglineOpacity }}>
        <p style={{ fontFamily: FONTS.heading, fontSize: 36, fontWeight: 300, color: COLORS.offWhite, margin: 0, letterSpacing: "0.02em" }}>The Wearable Agent for Nervous System Support</p>
      </div>
      <div style={{ position: "absolute", top: 730, width: "100%", textAlign: "center", opacity: detailOpacity }}>
        <p style={{ fontFamily: FONTS.body, fontSize: 24, fontWeight: 400, color: COLORS.textMuted, margin: 0 }}>Smart Ring + AI Agent — Proactive Prevention & Intervention</p>
      </div>
    </AbsoluteFill>
  );
};
