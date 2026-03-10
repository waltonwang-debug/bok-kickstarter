import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

const PAIN_POINTS = [
  {
    icon: "?",
    text: "Smartwatches are bulky and distracting",
    delay: 40,
  },
  {
    icon: "?",
    text: "Health data without actionable insights",
    delay: 90,
  },
  {
    icon: "?",
    text: "You only know you're stressed after the fact",
    delay: 140,
  },
];

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  // Title
  const titleOpacity = interpolate(frame, [10, 40], [0, 1], { extrapolateRight: "clamp" });

  // Stats
  const stat1Opacity = interpolate(frame, [200, 230], [0, 1], { extrapolateRight: "clamp" });
  const stat2Opacity = interpolate(frame, [240, 270], [0, 1], { extrapolateRight: "clamp" });

  // Bottom message
  const bottomOpacity = interpolate(frame, [280, 310], [0, 1], { extrapolateRight: "clamp" });

  const fadeOut = interpolate(frame, [340, 370], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      {/* Red warning gradient */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "radial-gradient(ellipse at top center, rgba(255, 77, 77, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 80,
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
          Health tracking is{" "}
          <span style={{ color: COLORS.stress, fontWeight: 600 }}>broken</span>
        </h2>
      </div>

      {/* Pain points */}
      <div
        style={{
          position: "absolute",
          top: 220,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
        }}
      >
        {PAIN_POINTS.map((point, i) => {
          const opacity = interpolate(frame, [point.delay, point.delay + 25], [0, 1], {
            extrapolateRight: "clamp",
          });
          const x = interpolate(frame, [point.delay, point.delay + 25], [-40, 0], {
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateX(${x}px)`,
                display: "flex",
                alignItems: "center",
                gap: 24,
                width: 900,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  backgroundColor: "rgba(255, 77, 77, 0.1)",
                  border: "1px solid rgba(255, 77, 77, 0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 28,
                  color: COLORS.stress,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {point.icon}
              </div>
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 30,
                  color: COLORS.textSecondary,
                  margin: 0,
                }}
              >
                {point.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Stats row */}
      <div
        style={{
          position: "absolute",
          bottom: 220,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 120,
        }}
      >
        <div style={{ textAlign: "center", opacity: stat1Opacity }}>
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 64,
              fontWeight: 700,
              color: COLORS.white,
            }}
          >
            77%
          </div>
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: 18,
              color: COLORS.textMuted,
              marginTop: 8,
            }}
          >
            experience stress affecting health
          </div>
        </div>
        <div style={{ textAlign: "center", opacity: stat2Opacity }}>
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 64,
              fontWeight: 700,
              color: COLORS.white,
            }}
          >
            $300B
          </div>
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: 18,
              color: COLORS.textMuted,
              marginTop: 8,
            }}
          >
            annual cost of workplace stress
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          width: "100%",
          textAlign: "center",
          opacity: bottomOpacity,
        }}
      >
        <p
          style={{
            fontFamily: FONTS.heading,
            fontSize: 36,
            fontWeight: 400,
            color: COLORS.offWhite,
            margin: 0,
          }}
        >
          You deserve{" "}
          <span style={{ color: COLORS.health, fontWeight: 600 }}>better</span>
        </p>
      </div>
    </AbsoluteFill>
  );
};
