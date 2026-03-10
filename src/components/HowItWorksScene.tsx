import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

const STEPS = [
  { icon: "💍", title: "Monitor", desc: "BOK ring continuously tracks your\nautonomic nervous system signals", detail: "HRV • Skin Temperature • Blood Oxygen", startFrame: 60 },
  { icon: "🧠", title: "Analyze", desc: "AI agent identifies patterns\nand detects stress in real-time", detail: "Pattern Recognition • Predictive Analysis", startFrame: 200 },
  { icon: "⚡", title: "Intervene", desc: "Proactive interventions delivered\nbefore symptoms escalate", detail: "Breathing Guides • Micro-breaks • Alerts", startFrame: 340 },
];

export const HowItWorksScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [10, 40], [0, 1], { extrapolateRight: "clamp" });
  const lineProgress = interpolate(frame, [80, 400], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [560, 600], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      <div style={{ position: "absolute", top: 80, width: "100%", textAlign: "center", opacity: titleOpacity }}>
        <h2 style={{ fontFamily: FONTS.heading, fontSize: 52, fontWeight: 300, color: COLORS.offWhite, margin: 0 }}>
          How <span style={{ fontWeight: 600, color: COLORS.accent }}>BOK</span> Works
        </h2>
      </div>
      <div style={{ position: "absolute", top: 240, width: "100%", display: "flex", justifyContent: "center", gap: 80, padding: "0 140px" }}>
        {STEPS.map((step, i) => {
          const stepOpacity = interpolate(frame, [step.startFrame, step.startFrame + 30], [0, 1], { extrapolateRight: "clamp" });
          const stepY = interpolate(frame, [step.startFrame, step.startFrame + 30], [50, 0], { extrapolateRight: "clamp" });
          const detailOpacity = interpolate(frame, [step.startFrame + 40, step.startFrame + 60], [0, 1], { extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ flex: 1, textAlign: "center", opacity: stepOpacity, transform: `translateY(${stepY}px)` }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", border: `2px solid ${COLORS.accent}`, display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto 30px", fontSize: 44 }}>{step.icon}</div>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 36, fontWeight: 600, color: COLORS.white, margin: "0 0 16px" }}>{step.title}</h3>
              <p style={{ fontFamily: FONTS.body, fontSize: 22, color: COLORS.textMuted, lineHeight: 1.5, whiteSpace: "pre-line", margin: "0 0 20px" }}>{step.desc}</p>
              <div style={{ opacity: detailOpacity }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: 14, color: COLORS.accent, backgroundColor: "rgba(0, 229, 160, 0.1)", padding: "8px 16px", borderRadius: 20, border: "1px solid rgba(0, 229, 160, 0.2)" }}>{step.detail}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", top: 285, left: "50%", transform: "translateX(-50%)", width: 800, height: 4 }}>
        <div style={{ width: `${lineProgress * 100}%`, height: "100%", background: `linear-gradient(90deg, ${COLORS.accent}, rgba(0, 229, 160, 0.3))`, borderRadius: 2 }} />
      </div>
      <div style={{ position: "absolute", bottom: 100, width: "100%", textAlign: "center", opacity: interpolate(frame, [440, 470], [0, 1], { extrapolateRight: "clamp" }) }}>
        <p style={{ fontFamily: FONTS.body, fontSize: 28, color: COLORS.offWhite, margin: 0, fontWeight: 300 }}>
          24/7 autonomous health guardian — <span style={{ color: COLORS.accent, fontWeight: 500 }}>no manual input needed</span>
        </p>
      </div>
    </AbsoluteFill>
  );
};
