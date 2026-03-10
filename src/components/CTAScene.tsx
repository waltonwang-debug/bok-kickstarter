import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" });
  const missionOpacity = interpolate(frame, [20, 60], [0, 1], { extrapolateRight: "clamp" });
  const believeOpacity = interpolate(frame, [60, 100], [0, 1], { extrapolateRight: "clamp" });
  const dividerWidth = interpolate(frame, [120, 180], [0, 400], { extrapolateRight: "clamp" });
  const ringOpacity = interpolate(frame, [200, 240], [0, 1], { extrapolateRight: "clamp" });
  const ringScale = interpolate(frame, [200, 260], [0.85, 1], { extrapolateRight: "clamp" });
  const pulsePhase = (frame - 240) / 30;
  const glowIntensity = frame > 240 ? 0.4 + 0.3 * Math.sin(pulsePhase) : 0;
  const ctaOpacity = interpolate(frame, [280, 320], [0, 1], { extrapolateRight: "clamp" });
  const ctaY = interpolate(frame, [280, 320], [30, 0], { extrapolateRight: "clamp" });
  const buttonOpacity = interpolate(frame, [350, 390], [0, 1], { extrapolateRight: "clamp" });
  const buttonScale = interpolate(frame, [350, 400], [0.9, 1], { extrapolateRight: "clamp" });
  const earlyBirdOpacity = interpolate(frame, [420, 460], [0, 1], { extrapolateRight: "clamp" });
  const finalLogoOpacity = interpolate(frame, [520, 560], [0, 1], { extrapolateRight: "clamp" });
  const websiteOpacity = interpolate(frame, [580, 620], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn }}>
      <div style={{ position: "absolute", width: "100%", height: "100%", background: "radial-gradient(ellipse at center bottom, rgba(0, 229, 160, 0.08) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", top: 100, width: "100%", textAlign: "center", opacity: missionOpacity, padding: "0 240px" }}>
        <p style={{ fontFamily: FONTS.heading, fontSize: 32, fontWeight: 300, color: COLORS.textMuted, margin: 0, lineHeight: 1.6 }}>
          We believe health should be <span style={{ color: COLORS.accent, fontWeight: 500 }}>proactive, not reactive</span>
        </p>
      </div>
      <div style={{ position: "absolute", top: 180, width: "100%", textAlign: "center", opacity: believeOpacity, padding: "0 200px" }}>
        <p style={{ fontFamily: FONTS.body, fontSize: 24, color: COLORS.textMuted, margin: 0, lineHeight: 1.6 }}>
          BOK combines cutting-edge biosensors with an intelligent AI agent<br />to become your personal autonomic nervous system guardian
        </p>
      </div>
      <div style={{ position: "absolute", top: 290, left: "50%", transform: "translateX(-50%)", width: dividerWidth, height: 1, backgroundColor: "rgba(0, 229, 160, 0.3)" }} />
      <div style={{ position: "absolute", top: 330, left: "50%", transform: `translateX(-50%) scale(${ringScale})`, opacity: ringOpacity }}>
        <div style={{ width: 140, height: 140, borderRadius: "50%", border: `2px solid ${COLORS.accent}`, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: `0 0 ${30 * glowIntensity}px ${15 * glowIntensity}px rgba(0, 229, 160, ${0.3 * glowIntensity})` }}>
          <div style={{ width: 100, height: 100, borderRadius: "50%", border: "1.5px solid rgba(0, 229, 160, 0.4)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: COLORS.accent, boxShadow: `0 0 12px 4px rgba(0, 229, 160, ${0.4 * glowIntensity})` }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: 520, width: "100%", textAlign: "center", opacity: ctaOpacity, transform: `translateY(${ctaY}px)` }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: 56, fontWeight: 600, color: COLORS.white, margin: 0 }}>
          Take Control of Your <span style={{ color: COLORS.accent }}>Nervous System</span>
        </h1>
      </div>
      <div style={{ position: "absolute", top: 630, width: "100%", display: "flex", justifyContent: "center", opacity: buttonOpacity, transform: `scale(${buttonScale})` }}>
        <div style={{ backgroundColor: COLORS.accent, color: COLORS.black, fontFamily: FONTS.heading, fontSize: 28, fontWeight: 700, padding: "22px 60px", borderRadius: 50, letterSpacing: "0.03em", boxShadow: "0 4px 30px rgba(0, 229, 160, 0.4)" }}>Back Us on Kickstarter</div>
      </div>
      <div style={{ position: "absolute", top: 720, width: "100%", textAlign: "center", opacity: earlyBirdOpacity }}>
        <p style={{ fontFamily: FONTS.body, fontSize: 22, color: COLORS.warning, margin: 0 }}>Early Bird pricing available — Limited quantity</p>
      </div>
      <div style={{ position: "absolute", bottom: 120, width: "100%", textAlign: "center", opacity: finalLogoOpacity }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: 48, fontWeight: 700, color: COLORS.white, letterSpacing: "0.15em" }}>BOK</span>
      </div>
      <div style={{ position: "absolute", bottom: 70, width: "100%", textAlign: "center", opacity: websiteOpacity }}>
        <span style={{ fontFamily: FONTS.mono, fontSize: 18, color: COLORS.textMuted }}>www.getbok.com</span>
      </div>
    </AbsoluteFill>
  );
};
