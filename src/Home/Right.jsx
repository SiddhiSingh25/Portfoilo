import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import MacContainer from "./MacContainer";
import playIcon from "../assets/play.png";
import pauseIcon from "../assets/pause.png";

function Right() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative h-[300px] sm:h-[380px] md:h-[500px] w-full md:w-[45%] flex items-center justify-center group select-none">
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
        />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/blue_photo_studio_4k.exr"
          ]}
        />
        <MacContainer isPlaying={isPlaying} setIsPlaying={setIsPlaying} videoRef={videoRef} />
      </Canvas>

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
    </div>
  );
}

export default Right;
/**
 * 
 * 
 */