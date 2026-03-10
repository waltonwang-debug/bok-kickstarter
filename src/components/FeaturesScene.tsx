import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

// Feature showcase with images
const FEATURES = [
  {
    title: "Dual PD Sensors",
    desc: "Medical-grade heart rate & blood oxygen monitoring with dual photodiode chips",
    image: "ring-sensors.svg",
    color: COLORS.health,
    startFrame: 30,
    endFrame: 200,
  },
  {
    title: "Wireless Charging",
    desc: "Magnetic wireless charging dock — drop it on, fully charged in 90 minutes",
    image: "ring-charger.svg",
    color: COLORS.accent,
    startFrame: 180,
    endFrame: 350,
  },
  {
    title: "Premium Colors",
    desc: "Silver, Gold, and Midnight Black — crafted from aerospace-grade titanium",
    image: "ring-colors.svg",
    color: COLORS.gold,
    startFrame: 330,
    endFrame: 500,
  },
  {
    title: "Couple Mode",
    desc: "Share health data with your partner — love meets intelligence",
    image: "ring-couple.svg",
    color: COLORS.premium,
    startFrame: 480,
    endFrame: 630,
  },
];

export const FeaturesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [620, 660], [1, 0], { extrapolateRight: "clamp" });

  // Determine which feature is currently active
  const activeIndex = FEATURES.findIndex(
    (f) => frame >= f.startFrame && frame < f.endFrame
  );

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.navy} 100%)`,
        }}
      />

      {/* Section label */}
      <div
        style={{
          position: "absolute",
          top: 50,
          width: "100%",
          textAlign: "center",
          opacity: interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 16,
            color: COLORS.accent,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Key Features
        </span>
      </div>

      {/* Feature showcase - large image left, text right */}
      {FEATURES.map((feature, i) => {
        const isActive = frame >= feature.startFrame && frame < feature.endFrame;
        const featureOpacity = interpolate(
          frame,
          [feature.startFrame, feature.startFrame + 30, feature.endFrame - 30, feature.endFrame],
          [0, 1, 1, 0],
          { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
        );
        const imgScale = interpolate(
          frame,
          [feature.startFrame, feature.startFrame + 40],
          [1.1, 1],
          { extrapolateRight: "clamp" }
        );
        const textX = interpolate(
          frame,
          [feature.startFrame + 10, feature.startFrame + 40],
          [60, 0],
          { extrapolateRight: "clamp" }
        );

        if (!isActive && featureOpacity <= 0) return null;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 120,
              width: "100%",
              height: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 80,
              opacity: featureOpacity,
              padding: "0 120px",
            }}
          >
            {/* Image */}
            <div
              style={{
                width: 700,
                height: 500,
                borderRadius: 24,
                overflow: "hidden",
                transform: `scale(${imgScale})`,
                boxShadow: `0 0 60px ${feature.color}15, 0 20px 80px rgba(0,0,0,0.5)`,
                border: `1px solid ${COLORS.cardBorder}`,
                flexShrink: 0,
              }}
            >
              <Img
                src={staticFile(feature.image)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Text */}
            <div
              style={{
                flex: 1,
                transform: `translateX(${textX}px)`,
              }}
            >
              {/* Feature number */}
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 60,
                  fontWeight: 700,
                  color: `${feature.color}20`,
                  marginBottom: -20,
                }}
              >
                0{i + 1}
              </div>

              <h2
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 48,
                  fontWeight: 600,
                  color: feature.color,
                  margin: "0 0 20px",
                }}
              >
                {feature.title}
              </h2>

              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 24,
                  color: COLORS.textSecondary,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {feature.desc}
              </p>

              {/* Accent line */}
              <div
                style={{
                  width: 60,
                  height: 3,
                  backgroundColor: feature.color,
                  marginTop: 30,
                  borderRadius: 2,
                  boxShadow: `0 0 10px ${feature.color}60`,
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Progress dots at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 12,
        }}
      >
        {FEATURES.map((feature, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              style={{
                width: isActive ? 32 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: isActive ? feature.color : "rgba(255,255,255,0.15)",
                transition: "all 0.3s",
              }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
