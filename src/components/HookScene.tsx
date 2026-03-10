import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const textOpacity = interpolate(frame, [15, 45], [0, 1], { extrapolateRight: "clamp" });
  const questionScale = interpolate(frame, [15, 50], [0.95, 1], { extrapolateRight: "clamp" });
  const lineWidth = interpolate(frame, [50, 90], [0, 300], { extrapolateRight: "clamp" });
  const logoOpacity = interpolate(frame, [80, 110], [0, 1], { extrapolateRight: "clamp" });
  const logoY = interpolate(frame, [80, 110], [30, 0], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [150, 180], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, justifyContent: "center", alignItems: "center", opacity: fadeOut }}>
      <div style={{ position: "absolute", width: "100%", height: "100%", background: "radial-gradient(ellipse at center, rgba(0, 229, 160, 0.06) 0%, transparent 70%)" }} />
      <div style={{ opacity: textOpacity, transform: `scale(${questionScale})`, textAlign: "center", padding: "0 200px" }}>
        <p style={{ fontFamily: FONTS.heading, fontSize: 58, fontWeight: 300, color: COLORS.offWhite, lineHeight: 1.4, letterSpacing: "-0.02em", margin: 0 }}>
          What if your body could<br />
          <span style={{ fontWeight: 600, color: COLORS.accent }}>warn you before burnout?</span>
        </p>
      </div>
      <div style={{ position: "absolute", bottom: 340, width: lineWidth, height: 2, backgroundColor: COLORS.accent, opacity: 0.6 }} />
      <div style={{ position: "absolute", bottom: 250, opacity: logoOpacity, transform: `translateY(${logoY}px)` }}>
        <span style={{ fontFamily: FONTS.heading, fontSize: 72, fontWeight: 700, color: COLORS.white, letterSpacing: "0.15em" }}>BOK</span>
      </div>
    </AbsoluteFill>
  );
};
