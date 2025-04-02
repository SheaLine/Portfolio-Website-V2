import withFadeEffect from "./Fade";
import Scene from "./CampfireScene";
import BackButton from "./BackButton/BackButton";

function PageLayout({ className, title, handleFadeOut, children }) {
  return (
    <Scene VideoSrc="./Blender-Camp-Scene.mp4">
      <BackButton handleFadeOut={handleFadeOut} />
      <div className={className}>
        <h1>{title}</h1>
        {children}
      </div>
    </Scene>
  );
}

const FadedPageLayout = withFadeEffect(PageLayout);
export default FadedPageLayout;
