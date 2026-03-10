import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

const STEPS = [
  {
    num: "01",
    title: "Wear",
    desc: "Slip on BOK — lightweight titanium\nthat looks like a classic ring",
    image: "ring-lifestyle.svg",
    startFrame: 60,
  },
  {
    num: "02",
    title: "Monitor",
    desc: "Dual PD sensors track heart rate,\nblood oxygen & temperature 24/7",
    image: "ring-sensors.svg",
    startFrame: 180,
  },
  {
    num: "03",
    title: "Insights",
    desc: "AI-powered analysis delivers\nactionable health insights in real-time",
    image: "ring-charger.svg",
    startFrame: 300,
  },
];

export const HowItWorksScene: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  const titleOpacity = interpolate(frame, [10, 40], [0, 1], { extrapolateRight: "clamp" });

  // Progress line
  const lineProgress = interpolate(frame, [60, 400], [0, 1], { extrapolateRight: "clamp" });

  const fadeOut = interpolate(frame, [530, 570], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      {/* Subtle gradient */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `linear-gradient(180deg, ${COLORS.black} 0%, ${COLORS.navy} 100%)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 60,
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
        }}
      >
        <h2
          style={{
            fontFamily: FONTS.heading,
            fontSize: 52,
            fontWeight: 300,
            color: COLORS.offWhite,
            margin: 0,
          }}
        >
          How{" "}
          <span style={{ fontWeight: 600, color: COLORS.accent }}>BOK</span>{" "}
          Works
        </h2>
      </div>

      {/* Steps - horizontal layout */}
      <div
        style={{
          position: "absolute",
          top: 180,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 60,
          padding: "0 100px",
        }}
      >
        {STEPS.map((step, i) => {
          const stepOpacity = interpolate(
            frame,
            [step.startFrame, step.startFrame + 35],
            [0, 1],
            { extrapolateRight: "clamp" }
          );
          const stepY = interpolate(
            frame,
            [step.startFrame, step.startFrame + 35],
            [40, 0],
            { extrapolateRight: "clamp" }
          );
          const imgOpacity = interpolate(
            frame,
            [step.startFrame + 20, step.startFrame + 50],
            [0, 1],
            { extrapolateRight: "clamp" }
          );
          const imgScale = interpolate(
            frame,
            [step.startFrame + 20, step.startFrame + 50],
            [0.9, 1],
            { extrapolateRight: "clamp" }
          );

          return (
            <div
              key={i}
              style={{
                flex: 1,
                opacity: stepOpacity,
                transform: `translateY(${stepY}px)`,
                textAlign: "center",
              }}
            >
              {/* Step image */}
              <div
                style={{
                  width: "100%",
                  height: 260,
                  borderRadius: 20,
                  overflow: "hidden",
                  marginBottom: 24,
                  opacity: imgOpacity,
                  transform: `scale(${imgScale})`,
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                }}
              >
                <Img
                  src={staticFile(step.image)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Step number */}
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 16,
                  color: COLORS.accent,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                STEP {step.num}
              </div>

              {/* Step title */}
              <h3
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 36,
                  fontWeight: 600,
                  color: COLORS.white,
                  margin: "0 0 12px",
                }}
              >
                {step.title}
              </h3>

              {/* Step desc */}
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 20,
                  color: COLORS.textMuted,
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress line */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 3,
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: 2,
        }}
      >
        <div
          style={{
            width: `${lineProgress * 100}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.health})`,
            borderRadius: 2,
            boxShadow: `0 0 20px ${COLORS.accent}40`,
          }}
        />
      </div>

      {/* Bottom label */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          width: "100%",
          textAlign: "center",
          opacity: interpolate(frame, [420, 450], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 22,
            color: COLORS.textSecondary,
            margin: 0,
          }}
        >
          24/7 health monitoring —{" "}
          <span style={{ color: COLORS.health, fontWeight: 500 }}>
            no charging hassle
          </span>
        </p>
      </div>
    </AbsoluteFill>
  );
};
