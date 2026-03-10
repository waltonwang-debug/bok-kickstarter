import { Composition } from "remotion";
import { BokKickstarterVideo } from "./BokKickstarterVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BokKickstarter"
        component={BokKickstarterVideo}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
