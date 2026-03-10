import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" });

  // Ring image reappears
  const ringOpacity = interpolate(frame, [20, 60], [0, 1], { extrapolateRight: "clamp" });
  const ringScale = interpolate(frame, [20, 80], [0.8, 1], { extrapolateRight: "clamp" });

  // Glow pulse
  const pulsePhase = (frame - 60) / 18;
  const glowIntensity = frame > 60 ? 0.3 + 0.25 * Math.sin(pulsePhase) : 0;

  // Mission text
  const missionOpacity = interpolate(frame, [80, 120], [0, 1], { extrapolateRight: "clamp" });

  // CTA headline
  const ctaOpacity = interpolate(frame, [160, 200], [0, 1], { extrapolateRight: "clamp" });
  const ctaY = interpolate(frame, [160, 200], [30, 0], { extrapolateRight: "clamp" });

  // Button
  const buttonOpacity = interpolate(frame, [240, 280], [0, 1], { extrapolateRight: "clamp" });
  const buttonScale = interpolate(frame, [240, 290], [0.9, 1], { extrapolateRight: "clamp" });

  // Button glow animation
  const btnGlow = frame > 280 ? 0.6 + 0.4 * Math.sin((frame - 280) / 15) : 0;

  // Price
  const priceOpacity = interpolate(frame, [310, 350], [0, 1], { extrapolateRight: "clamp" });

  // Early bird
  const earlyBirdOpacity = interpolate(frame, [370, 410], [0, 1], { extrapolateRight: "clamp" });

  // Final logo
  const finalLogoOpacity = interpolate(frame, [480, 520], [0, 1], { extrapolateRight: "clamp" });

  // Website
  const websiteOpacity = interpolate(frame, [540, 580], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.black, opacity: fadeIn }}>
      {/* Premium gradient bg */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(ellipse at center 30%, rgba(77, 166, 255, 0.06) 0%, transparent 50%),
                       radial-gradient(ellipse at center 80%, rgba(201, 168, 76, 0.04) 0%, transparent 40%)`,
        }}
      />

      {/* Ring product image */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: "50%",
          transform: `translateX(-50%) scale(${ringScale})`,
          opacity: ringOpacity,
          filter: `drop-shadow(0 0 ${50 * glowIntensity}px rgba(77, 166, 255, ${0.35 * glowIntensity}))`,
        }}
      >
        <Img
          src={staticFile("ring-product.svg")}
          style={{ width: 320, height: 320, objectFit: "contain" }}
        />
      </div>

      {/* Mission */}
      <div
        style={{
          position: "absolute",
          top: 380,
          width: "100%",
          textAlign: "center",
          opacity: missionOpacity,
          padding: "0 200px",
        }}
      >
        <p
          style={{
            fontFamily: FONTS.heading,
            fontSize: 28,
            fontWeight: 300,
            color: COLORS.textSecondary,
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Health should be{" "}
          <span style={{ color: COLORS.health, fontWeight: 500 }}>proactive</span>
          , not reactive.
          <br />
          BOK makes it effortless.
        </p>
      </div>

      {/* CTA Headline */}
      <div
        style={{
          position: "absolute",
          top: 500,
          width: "100%",
          textAlign: "center",
          opacity: ctaOpacity,
          transform: `translateY(${ctaY}px)`,
        }}
      >
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: 60,
            fontWeight: 700,
            color: COLORS.white,
            margin: 0,
          }}
        >
          Join the{" "}
          <span style={{ color: COLORS.accent }}>Revolution</span>
        </h1>
      </div>

      {/* Kickstarter Button */}
      <div
        style={{
          position: "absolute",
          top: 610,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: buttonOpacity,
          transform: `scale(${buttonScale})`,
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentGlow})`,
            color: COLORS.white,
            fontFamily: FONTS.heading,
            fontSize: 30,
            fontWeight: 700,
            padding: "22px 64px",
            borderRadius: 50,
            letterSpacing: "0.03em",
            boxShadow: `0 4px ${20 + 20 * btnGlow}px rgba(77, 166, 255, ${0.3 + 0.2 * btnGlow})`,
          }}
        >
          Back Us on Kickstarter
        </div>
      </div>

      {/* Price */}
      <div
        style={{
          position: "absolute",
          top: 700,
          width: "100%",
          textAlign: "center",
          opacity: priceOpacity,
        }}
      >
        <p style={{ fontFamily: FONTS.heading, fontSize: 22, color: COLORS.textMuted, margin: 0 }}>
          Starting from{" "}
          <span style={{ color: COLORS.white, fontWeight: 600, fontSize: 28 }}>$99</span>
          <span style={{ color: COLORS.textMuted, fontSize: 18, marginLeft: 8, textDecoration: "line-through" }}>$199</span>
        </p>
      </div>

      {/* Early bird */}
      <div
        style={{
          position: "absolute",
          top: 760,
          width: "100%",
          textAlign: "center",
          opacity: earlyBirdOpacity,
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 24px",
            borderRadius: 20,
            backgroundColor: "rgba(255, 176, 32, 0.1)",
            border: "1px solid rgba(255, 176, 32, 0.3)",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: 18,
              color: COLORS.warning,
              fontWeight: 500,
            }}
          >
            Early Bird — Limited to first 500 backers
          </span>
        </div>
      </div>

      {/* Final BOK logo */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          width: "100%",
          textAlign: "center",
          opacity: finalLogoOpacity,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: 56,
            fontWeight: 700,
            color: COLORS.white,
            letterSpacing: "0.15em",
          }}
        >
          BOK
        </span>
      </div>

      {/* Website */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          width: "100%",
          textAlign: "center",
          opacity: websiteOpacity,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 18,
            color: COLORS.textMuted,
            letterSpacing: "0.05em",
          }}
        >
          www.bokring.com
        </span>
      </div>
    </AbsoluteFill>
  );
};
