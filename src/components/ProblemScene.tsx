import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

const STATS = [
  { number: "77%", label: "of people experience stress\nthat affects their physical health", delay: 30 },
  { number: "83%", label: "of workers suffer\nfrom work-related stress", delay: 80 },
  { number: "$300B", label: "lost annually due to\nworkplace stress in the US", delay: 130 },
];

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [10, 35], [0, 1], { extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [180, 210], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [300, 330], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      <div style={{ position: "absolute", width: "100%", height: "100%", background: "radial-gradient(ellipse at top, rgba(255, 77, 77, 0.08) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", top: 120, width: "100%", textAlign: "center", opacity: titleOpacity }}>
        <h2 style={{ fontFamily: FONTS.heading, fontSize: 48, fontWeight: 300, color: COLORS.stress, letterSpacing: "-0.01em", margin: 0 }}>Stress is a silent epidemic</h2>
      </div>
      <div style={{ position: "absolute", top: 280, width: "100%", display: "flex", justifyContent: "center", gap: 100, padding: "0 120px" }}>
        {STATS.map((stat, i) => {
          const statOpacity = interpolate(frame, [stat.delay, stat.delay + 25], [0, 1], { extrapolateRight: "clamp" });
          const statY = interpolate(frame, [stat.delay, stat.delay + 25], [40, 0], { extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ textAlign: "center", opacity: statOpacity, transform: `translateY(${statY}px)`, flex: 1 }}>
              <div style={{ fontFamily: FONTS.heading, fontSize: 80, fontWeight: 700, color: COLORS.white, lineHeight: 1, marginBottom: 20 }}>{stat.number}</div>
              <div style={{ fontFamily: FONTS.body, fontSize: 22, color: COLORS.textMuted, lineHeight: 1.5, whiteSpace: "pre-line" }}>{stat.label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", bottom: 160, width: "100%", textAlign: "center", opacity: subtitleOpacity }}>
        <p style={{ fontFamily: FONTS.heading, fontSize: 36, fontWeight: 400, color: COLORS.offWhite, margin: 0 }}>
          Your nervous system needs an <span style={{ color: COLORS.accent, fontWeight: 600 }}>ally</span>
        </p>
      </div>
    </AbsoluteFill>
  );
};
