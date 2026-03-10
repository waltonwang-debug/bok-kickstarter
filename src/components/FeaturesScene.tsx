import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

const FEATURES = [
  { title: "Stress Alert", desc: "Real-time autonomic nervous system monitoring detects stress before you feel it", icon: "🔴", color: COLORS.stress, startFrame: 40 },
  { title: "Guided Breathing", desc: "AI-powered breathing exercises to activate your parasympathetic response", icon: "🧘", color: COLORS.calm, startFrame: 140 },
  { title: "Sleep Optimization", desc: "Track and improve sleep quality through nervous system regulation", icon: "🌙", color: "#B088F9", startFrame: 240 },
  { title: "Predictive Insights", desc: "Machine learning patterns predict and prevent health events before they occur", icon: "📊", color: COLORS.accent, startFrame: 340 },
];

export const FeaturesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [10, 35], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [590, 630], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      <div style={{ position: "absolute", top: 70, width: "100%", textAlign: "center", opacity: titleOpacity }}>
        <h2 style={{ fontFamily: FONTS.heading, fontSize: 48, fontWeight: 300, color: COLORS.offWhite, margin: 0 }}>
          Intelligent <span style={{ fontWeight: 600, color: COLORS.accent }}>Features</span>
        </h2>
      </div>
      <div style={{ position: "absolute", top: 200, width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 40, padding: "0 180px" }}>
        {FEATURES.map((feature, i) => {
          const cardOpacity = interpolate(frame, [feature.startFrame, feature.startFrame + 25], [0, 1], { extrapolateRight: "clamp" });
          const cardScale = interpolate(frame, [feature.startFrame, feature.startFrame + 25], [0.9, 1], { extrapolateRight: "clamp" });
          const glowOpacity = interpolate(frame, [feature.startFrame + 20, feature.startFrame + 40, feature.startFrame + 80, feature.startFrame + 100], [0, 0.6, 0.6, 0.2], { extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ width: 700, opacity: cardOpacity, transform: `scale(${cardScale})` }}>
              <div style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: 20, padding: "36px 40px", display: "flex", alignItems: "center", gap: 28, boxShadow: `0 0 30px rgba(${feature.color === COLORS.stress ? "255,77,77" : feature.color === COLORS.calm ? "77,166,255" : feature.color === "#B088F9" ? "176,136,249" : "0,229,160"}, ${0.1 * glowOpacity})` }}>
                <div style={{ fontSize: 48, width: 80, height: 80, borderRadius: 16, backgroundColor: `${feature.color}15`, display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>{feature.icon}</div>
                <div>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: 28, fontWeight: 600, color: feature.color, margin: "0 0 8px" }}>{feature.title}</h3>
                  <p style={{ fontFamily: FONTS.body, fontSize: 20, color: COLORS.textMuted, margin: 0, lineHeight: 1.4 }}>{feature.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
