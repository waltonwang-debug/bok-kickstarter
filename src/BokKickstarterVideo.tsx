import { AbsoluteFill, Sequence } from "remotion";
import { HookScene } from "./components/HookScene";
import { ProblemScene } from "./components/ProblemScene";
import { ProductRevealScene } from "./components/ProductRevealScene";
import { HowItWorksScene } from "./components/HowItWorksScene";
import { FeaturesScene } from "./components/FeaturesScene";
import { CTAScene } from "./components/CTAScene";

// 90 seconds at 30fps = 2700 frames
// Scene breakdown (with overlapping transitions):
// Hook:           0-200   (0-6.7s)     - Product first impression
// Problem:        170-570 (5.7-19s)    - Why current solutions fail
// Product Reveal: 540-960 (18-32s)     - Dramatic BOK reveal
// How It Works:   930-1530 (31-51s)    - 3-step process
// Features:       1500-2200 (50-73.3s) - Feature deep dive with images
// CTA:            2170-2700 (72.3-90s) - Call to action

export const BokKickstarterVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#050508" }}>
      <Sequence from={0} durationInFrames={200}>
        <HookScene />
      </Sequence>

      <Sequence from={170} durationInFrames={400}>
        <ProblemScene />
      </Sequence>

      <Sequence from={540} durationInFrames={420}>
        <ProductRevealScene />
      </Sequence>

      <Sequence from={930} durationInFrames={600}>
        <HowItWorksScene />
      </Sequence>

      <Sequence from={1500} durationInFrames={700}>
        <FeaturesScene />
      </Sequence>

      <Sequence from={2100} durationInFrames={600}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
