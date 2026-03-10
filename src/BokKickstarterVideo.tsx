import { AbsoluteFill, Sequence } from "remotion";
import { HookScene } from "./components/HookScene";
import { ProblemScene } from "./components/ProblemScene";
import { ProductRevealScene } from "./components/ProductRevealScene";
import { HowItWorksScene } from "./components/HowItWorksScene";
import { FeaturesScene } from "./components/FeaturesScene";
import { CTAScene } from "./components/CTAScene";

// 90 seconds at 30fps = 2700 frames
export const BokKickstarterVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0A" }}>
      <Sequence from={0} durationInFrames={180}>
        <HookScene />
      </Sequence>
      <Sequence from={150} durationInFrames={330}>
        <ProblemScene />
      </Sequence>
      <Sequence from={450} durationInFrames={330}>
        <ProductRevealScene />
      </Sequence>
      <Sequence from={750} durationInFrames={600}>
        <HowItWorksScene />
      </Sequence>
      <Sequence from={1320} durationInFrames={630}>
        <FeaturesScene />
      </Sequence>
      <Sequence from={1920} durationInFrames={780}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
