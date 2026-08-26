import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import MacContainer from "./MacContainer";
import playIcon from "../assets/play.png";
import pauseIcon from "../assets/pause.png";

function Right() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative h-[300px] sm:h-[380px] md:h-[500px] w-full md:w-[45%] flex items-center justify-center group select-none">
      <div className="relative z-10 w-full h-full">
        <Canvas
          camera={{ fov: 25, position: [0, -2, 120] }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <OrbitControls
            enableZoom={true}
            minDistance={50}
            maxDistance={200}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={1} // Slows down rotation for smoother control
            zoomSpeed={0.2} // Adjusts zoom speed
            panSpeed={0.5}
            onStart={() => setIsDragging(true)}
            onEnd={() => setIsDragging(false)}
          />
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/blue_photo_studio_4k.exr"
            ]}
          />
          <MacContainer isPlaying={isPlaying} setIsPlaying={setIsPlaying} videoRef={videoRef} />
        </Canvas>
      </div>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          aria-label="Play Laptop Video"
          className="absolute z-20 flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-white/20 dark:bg-black/40 hover:bg-white/40 dark:hover:bg-black/60 backdrop-blur-md border border-white/40 shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer animate-pulse"
        >
          <img src={playIcon} alt="Play" className="w-8 h-8 sm:w-10 sm:h-10 object-contain ml-0.5 pointer-events-none drop-shadow-md transition-transform duration-300" />
        </button>
      )}

      {/* Pause Button Overlay on Hover when playing */}
      {isPlaying && (
        <button
          onClick={handlePlayClick}
          aria-label="Pause Laptop Video"
          className="absolute z-20 opacity-0 group-hover:opacity-100 flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-white/20 dark:bg-black/40 hover:bg-white/40 dark:hover:bg-black/60 backdrop-blur-md border border-white/40 shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <img src={pauseIcon} alt="Pause" className="w-8 h-8 sm:w-10 sm:h-10 object-contain pointer-events-none drop-shadow-md transition-transform duration-300 scale-110" />
        </button>
      )}

      {/* "rotate me 360" SVG Annotation Hint */}
      <div className={`pointer-events-none absolute top-10 sm:top-10 md:top-20 -rotate-6 -right-2 sm:-right-6 md:-right-10 z-0 flex items-center gap-1.5 select-none transition-opacity duration-300 ${isDragging ? 'opacity-30' : 'opacity-80'}`}>
        <svg
          className="w-8 h-8 sm:w-11 sm:h-11 rotate-[120deg] text-lightModeHeading dark:text-darkModeHeading"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 323.057 323.057"
          fill="currentColor"
        >
          <path d="M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343M144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.123 26.928-66.707"></path>
          <path d="M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73"></path>
        </svg>
        <div className="font-caveat text-base sm:text-xl font-bold text-lightModeHeading dark:text-darkModeHeading  leading-tight tracking-wide">
          <div>rotate me <span className="text-center sm:text-right text-xs roboto sm:text-base">: )</span></div>
        </div>
      </div>
    </div>
  );
}

export default Right;
/**
 * 
 * 
 */