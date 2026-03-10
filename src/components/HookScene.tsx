import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Background particles fade
  const bgOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  // Ring image appears with dramatic zoom
  const ringOpacity = interpolate(frame, [10, 50], [0, 1], { extrapolateRight: "clamp" });
  const ringScale = interpolate(frame, [10, 80], [1.3, 1], { extrapolateRight: "clamp" });
  const ringRotate = interpolate(frame, [10, 120], [-5, 0], { extrapolateRight: "clamp" });

  // Glow pulse around ring
  const pulsePhase = frame / 20;
  const glowIntensity = 0.3 + 0.2 * Math.sin(pulsePhase);

  // Text reveals
  const tagOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" });
  const tagY = interpolate(frame, [60, 90], [30, 0], { extrapolateRight: "clamp" });

  const titleOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [90, 120], [20, 0], { extrapolateRight: "clamp" });

  // BOK logo
  const logoOpacity = interpolate(frame, [120, 150], [0, 1], { extrapolateRight: "clamp" });

  // Scene fade out
  const fadeOut = interpolate(frame, [160, 190], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeOut }}>
      {/* Deep blue gradient bg */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: bgOpacity,
          background: `radial-gradient(ellipse at 60% 40%, rgba(77, 166, 255, 0.08) 0%, transparent 50%),
                       radial-gradient(ellipse at 40% 60%, rgba(176, 136, 249, 0.05) 0%, transparent 50%)`,
        }}
      />

      {/* Ring product image - center hero */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: "50%",
          transform: `translateX(-50%) scale(${ringScale}) rotate(${ringRotate}deg)`,
          opacity: ringOpacity,
          filter: `drop-shadow(0 0 ${60 * glowIntensity}px rgba(77, 166, 255, ${0.4 * glowIntensity}))`,
        }}
      >
        <Img
          src={staticFile("ring-product.svg")}
          style={{ width: 500, height: 500, objectFit: "contain" }}
        />
      </div>

      {/* Tagline */}
      <div
        style={{
          position: "absolute",
          bottom: 280,
          width: "100%",
          textAlign: "center",
          opacity: tagOpacity,
          transform: `translateY(${tagY}px)`,
        }}
      >
        <p
          style={{
            fontFamily: FONTS.heading,
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.textSecondary,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Smart Health, Premium Life
        </p>
      </div>

      {/* Main title */}
      <div
        style={{
          position: "absolute",
          bottom: 170,
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: 64,
            fontWeight: 600,
            color: COLORS.white,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Your Health.{" "}
          <span style={{ color: COLORS.accent }}>Always On.</span>
        </h1>
      </div>

      {/* BOK logo */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          width: "100%",
          textAlign: "center",
          opacity: logoOpacity,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: 42,
            fontWeight: 700,
            color: COLORS.white,
            letterSpacing: "0.2em",
          }}
        >
          BOK
        </span>
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: 18,
            color: COLORS.textMuted,
            marginLeft: 16,
            letterSpacing: "0.1em",
          }}
        >
          SMART RING
        </span>
      </div>
    </AbsoluteFill>
  );
};
