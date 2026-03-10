import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

export const ProductRevealScene: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  // Dramatic ring entrance - starts big, zooms to fit
  const ringScale = interpolate(frame, [20, 80], [2.0, 1], { extrapolateRight: "clamp" });
  const ringOpacity = interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" });
  const ringY = interpolate(frame, [20, 80], [100, 0], { extrapolateRight: "clamp" });

  // Glow pulse
  const pulsePhase = frame / 15;
  const glowIntensity = frame > 50 ? 0.4 + 0.3 * Math.sin(pulsePhase) : 0;

  // "Introducing" text
  const introOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateRight: "clamp" });
  const introY = interpolate(frame, [90, 120], [20, 0], { extrapolateRight: "clamp" });

  // Product name
  const nameOpacity = interpolate(frame, [130, 160], [0, 1], { extrapolateRight: "clamp" });
  const nameScale = interpolate(frame, [130, 170], [0.9, 1], { extrapolateRight: "clamp" });

  // Tagline
  const taglineOpacity = interpolate(frame, [180, 210], [0, 1], { extrapolateRight: "clamp" });

  // Feature chips
  const chip1Opacity = interpolate(frame, [230, 255], [0, 1], { extrapolateRight: "clamp" });
  const chip2Opacity = interpolate(frame, [250, 275], [0, 1], { extrapolateRight: "clamp" });
  const chip3Opacity = interpolate(frame, [270, 295], [0, 1], { extrapolateRight: "clamp" });

  const fadeOut = interpolate(frame, [350, 390], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn * fadeOut }}>
      {/* Premium gradient background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(ellipse at 50% 30%, rgba(77, 166, 255, 0.08) 0%, transparent 50%),
                       radial-gradient(ellipse at 50% 70%, rgba(201, 168, 76, 0.04) 0%, transparent 40%)`,
        }}
      />

      {/* Ring product hero image */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: "50%",
          transform: `translateX(-50%) scale(${ringScale}) translateY(${ringY}px)`,
          opacity: ringOpacity,
          filter: `drop-shadow(0 0 ${80 * glowIntensity}px rgba(77, 166, 255, ${0.3 * glowIntensity}))
                   drop-shadow(0 20px 60px rgba(0, 0, 0, 0.8))`,
        }}
      >
        <Img
          src={staticFile("ring-product.svg")}
          style={{ width: 480, height: 480, objectFit: "contain" }}
        />
      </div>

      {/* "Introducing" */}
      <div
        style={{
          position: "absolute",
          top: 530,
          width: "100%",
          textAlign: "center",
          opacity: introOpacity,
          transform: `translateY(${introY}px)`,
        }}
      >
        <p
          style={{
            fontFamily: FONTS.heading,
            fontSize: 24,
            fontWeight: 400,
            color: COLORS.textMuted,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Introducing
        </p>
      </div>

      {/* BOK Smart Ring */}
      <div
        style={{
          position: "absolute",
          top: 580,
          width: "100%",
          textAlign: "center",
          opacity: nameOpacity,
          transform: `scale(${nameScale})`,
        }}
      >
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: 80,
            fontWeight: 700,
            color: COLORS.white,
            margin: 0,
            letterSpacing: "0.05em",
          }}
        >
          BOK{" "}
          <span style={{ fontWeight: 300, color: COLORS.silver }}>
            Smart Ring
          </span>
        </h1>
      </div>

      {/* Tagline */}
      <div
        style={{
          position: "absolute",
          top: 700,
          width: "100%",
          textAlign: "center",
          opacity: taglineOpacity,
        }}
      >
        <p
          style={{
            fontFamily: FONTS.heading,
            fontSize: 30,
            fontWeight: 300,
            color: COLORS.textSecondary,
            margin: 0,
          }}
        >
          Precision Health Monitoring on Your Finger
        </p>
      </div>

      {/* Feature chips */}
      <div
        style={{
          position: "absolute",
          top: 790,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {[
          { label: "Heart Rate", opacity: chip1Opacity, color: COLORS.stress },
          { label: "Blood Oxygen", opacity: chip2Opacity, color: COLORS.health },
          { label: "Wireless Charging", opacity: chip3Opacity, color: COLORS.accent },
        ].map((chip, i) => (
          <div
            key={i}
            style={{
              opacity: chip.opacity,
              padding: "10px 24px",
              borderRadius: 30,
              border: `1px solid ${chip.color}40`,
              backgroundColor: `${chip.color}10`,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: 18,
                color: chip.color,
                fontWeight: 500,
              }}
            >
              {chip.label}
            </span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
