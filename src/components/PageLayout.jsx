import withFadeEffect from "./Fade";
import Scene from "./CampfireScene";
import BackButton from "./BackButton/BackButton";
import { useEffect, useState } from "react";

function PageLayout({ className, title, handleFadeOut, children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (isMobile) {
    return (
      <div className="fullscreen-image-container">
        <BackButton handleFadeOut={handleFadeOut} />
        <div className={className}>
          <h1 className="h1-font text-8xl w-full text-center">{title}</h1>
          {children}
        </div>
      </div>
    );
  }

  return (
    <Scene VideoSrc="./Blender-Camp-Scene.mp4">
      <BackButton handleFadeOut={handleFadeOut} />
      <div className={className}>
        <h1 className="h1-font text-8xl w-full text-center" >{title}</h1>
        {children}
      </div>
    </Scene>
  );
}

const FadedPageLayout = withFadeEffect(PageLayout);
export default FadedPageLayout;
