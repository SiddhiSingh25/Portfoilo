import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MacContainer from "./MacContainer";

function Right() {
  return (
    <div className="relative h-[300px] sm:h-[380px] md:h-[500px] w-full md:w-[45%] flex items-center justify-center">
      {/* Removed unnecessary div */}
      <Canvas camera={{ fov: 25, position: [0, -2, 120] }}>
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
        <MacContainer />
      </Canvas>
    </div>
  );
}

export default Right;
/**
 * 
 * 
 */