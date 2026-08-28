import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import profileAvatar from "../assets/profile-avatar.jpg";
import playIcon from "../assets/play.png";
import pauseIcon from "../assets/pause.png";
import schoolImg from "../assets/aisgazipur-in.png";
import danceImg from "../assets/dance-academy.png";
import nestmartImg from "../assets/nest-mart.png";
import bannerImg from "../assets/Banner.png";
import bn1Img from "../assets/Bn1.png";
import projectImg from "../assets/Project.png";

function Preloader({ onComplete }) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [loadingText, setLoadingText] = useState("Importing assets...");
  
  // Status flags for visual badge indicators
  const [status, setStatus] = useState({
    images: false,
    video: false,
    laptop: false,
    dom: false,
  });

  // Track R3F GLTF/HDRI loading progress
  const { progress: r3fProgress } = useProgress();

  useEffect(() => {
    // Lock scroll during preloading
    document.body.style.overflow = "hidden";

    let imagesLoaded = 0;
    const imagesToLoad = [
      "/lightLogo.png",
      "/darkLogo.png",
      "/IMG-20240216-WA0019.jpg",
      profileAvatar,
      playIcon,
      pauseIcon,
      schoolImg,
      danceImg,
      nestmartImg,
      bannerImg,
      bn1Img,
      projectImg,
    ];

    const totalImageCount = imagesToLoad.length;
    let videoLoaded = false;
    let glbLoaded = false;
    let hdriLoaded = false;
    let domReady = false;

    // Weight allocation for total 100%:
    // Images: 35%, Video: 25%, GLB Model: 25%, HDRI & DOM: 15%
    const calculateOverallProgress = () => {
      const imgRatio = imagesLoaded / totalImageCount;
      const vidRatio = videoLoaded ? 1 : 0;
      const glbRatio = glbLoaded ? 1 : 0;
      const hdriDomRatio = (hdriLoaded ? 0.5 : 0) + (domReady ? 0.5 : 0);

      const calculated = Math.round(
        imgRatio * 35 + vidRatio * 25 + glbRatio * 25 + hdriDomRatio * 15
      );

      setTargetProgress((prev) => Math.max(prev, Math.min(100, calculated)));
    };

    // 1. Preload Static Images
    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      const onImgDone = () => {
        imagesLoaded++;
        if (imagesLoaded === totalImageCount) {
          setStatus((prev) => ({ ...prev, images: true }));
        }
        calculateOverallProgress();
      };
      img.onload = onImgDone;
      img.onerror = onImgDone;
    });

    // 2. Preload Laptop Screen Video
    const video = document.createElement("video");
    video.src = "./videoSid.mp4";
    video.preload = "auto";

    const onVidSuccess = () => {
      videoLoaded = true;
      setStatus((prev) => ({ ...prev, video: true }));
      calculateOverallProgress();
    };

    video.oncanplaythrough = onVidSuccess;
    video.onloadeddata = onVidSuccess;
    video.onerror = () => {
      // Fallback video source
      const fallbackVid = document.createElement("video");
      fallbackVid.src = "./video.mp4";
      fallbackVid.preload = "auto";
      fallbackVid.oncanplaythrough = onVidSuccess;
      fallbackVid.onloadeddata = onVidSuccess;
      fallbackVid.onerror = onVidSuccess;
    };

    // 3. Preload 3D Laptop Model (mac.glb)
    fetch("./mac.glb")
      .then((res) => {
        if (!res.body) {
          glbLoaded = true;
          setStatus((prev) => ({ ...prev, laptop: true }));
          calculateOverallProgress();
          return;
        }
        const reader = res.body.getReader();
        return reader.read().then(function processChunk({ done }) {
          if (done) {
            glbLoaded = true;
            setStatus((prev) => ({ ...prev, laptop: true }));
            calculateOverallProgress();
            return;
          }
          return reader.read().then(processChunk);
        });
      })
      .catch(() => {
        glbLoaded = true;
        setStatus((prev) => ({ ...prev, laptop: true }));
        calculateOverallProgress();
      });

    // 4. Preload HDRI environment
    fetch("https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/blue_photo_studio_4k.exr", { mode: "cors" })
      .then(() => {
        hdriLoaded = true;
        calculateOverallProgress();
      })
      .catch(() => {
        hdriLoaded = true;
        calculateOverallProgress();
      });

    // 5. DOM Ready state listener
    if (document.readyState === "complete") {
      domReady = true;
      setStatus((prev) => ({ ...prev, dom: true }));
      calculateOverallProgress();
    } else {
      const handleWindowLoad = () => {
        domReady = true;
        setStatus((prev) => ({ ...prev, dom: true }));
        calculateOverallProgress();
      };
      window.addEventListener("load", handleWindowLoad);
      return () => window.removeEventListener("load", handleWindowLoad);
    }
  }, []);

  // Incorporate Three.js R3F progress if active
  useEffect(() => {
    if (r3fProgress > 0) {
      setTargetProgress((prev) => Math.max(prev, Math.round(r3fProgress)));
    }
  }, [r3fProgress]);

  // Smooth lerp for percentage display counting up smoothly
  useEffect(() => {
    let animId;
    const updateDisplay = () => {
      setDisplayProgress((prev) => {
        if (prev < targetProgress) {
          const step = Math.max(1, Math.ceil((targetProgress - prev) * 0.15));
          return Math.min(targetProgress, prev + step);
        }
        return prev;
      });

      if (displayProgress < 100) {
        animId = requestAnimationFrame(updateDisplay);
      }
    };

    animId = requestAnimationFrame(updateDisplay);
    return () => cancelAnimationFrame(animId);
  }, [targetProgress, displayProgress]);

  // Update dynamic status messages
  useEffect(() => {
    if (displayProgress < 25) {
      setLoadingText("Importing images & media...");
    } else if (displayProgress < 55) {
      setLoadingText("Loading 3D Laptop model & video...");
    } else if (displayProgress < 85) {
      setLoadingText("Preparing canvas & shaders...");
    } else if (displayProgress < 100) {
      setLoadingText("Almost ready...");
    } else {
      setLoadingText("Website Loaded Successfully!");
    }
  }, [displayProgress]);

  // Fade out preloader when display reaches 100%
  useEffect(() => {
    if (displayProgress >= 100) {
      const timer = setTimeout(() => {
        setIsFading(true);
        const doneTimer = setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = "auto";
          if (onComplete) onComplete();
        }, 700);
        return () => clearTimeout(doneTimer);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [displayProgress, onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a192f] dark:bg-[#0a192f] text-white transition-opacity duration-700 ease-in-out select-none px-4 ${
        isFading ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Background ambient glow effect */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-teal-500/10 dark:bg-[#64FFDA]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center space-y-6">
        
        {/* Animated 3D Laptop / Tech Icon Graphic */}
        <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/5 border border-teal-500/30 backdrop-blur-md shadow-2xl shadow-teal-500/10 group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-30 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          {/* Animated Laptop Icon SVG */}
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14 text-teal-400 transform transition-transform duration-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </div>

        {/* Brand Name / Title */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-slate-100 font-mono">
            SIDDHI SINGH
          </h2>
          <p className="text-xs sm:text-sm font-mono text-teal-400/90 tracking-widest uppercase">
            Portfolio Preloader
          </p>
        </div>

        {/* Huge Percentage Number Counter */}
        <div className="flex items-baseline justify-center space-x-1 my-2">
          <span className="font-mono text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-200 bg-clip-text text-transparent">
            {displayProgress}
          </span>
          <span className="font-mono text-2xl sm:text-3xl text-teal-400 font-bold">%</span>
        </div>

        {/* Sleek Progress Bar Container */}
        <div className="w-full max-w-xs sm:max-w-sm h-2.5 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-teal-500/30 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-200 ease-out shadow-[0_0_12px_rgba(20,184,166,0.8)]"
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        {/* Dynamic Loading Subtitle */}
        <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider h-5 transition-all duration-300">
          {loadingText}
        </p>

        {/* Asset Badges Status */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] font-mono">
          <span
            className={`px-2.5 py-1 rounded-full border transition-all duration-300 ${
              status.laptop
                ? "bg-teal-950/60 border-teal-500/50 text-teal-300"
                : "bg-slate-900/40 border-slate-700 text-slate-500"
            }`}
          >
            💻 Laptop 3D {status.laptop ? "✓" : "..."}
          </span>
          <span
            className={`px-2.5 py-1 rounded-full border transition-all duration-300 ${
              status.video
                ? "bg-teal-950/60 border-teal-500/50 text-teal-300"
                : "bg-slate-900/40 border-slate-700 text-slate-500"
            }`}
          >
            🎬 Video {status.video ? "✓" : "..."}
          </span>
          <span
            className={`px-2.5 py-1 rounded-full border transition-all duration-300 ${
              status.images
                ? "bg-teal-950/60 border-teal-500/50 text-teal-300"
                : "bg-slate-900/40 border-slate-700 text-slate-500"
            }`}
          >
            🖼️ Assets {status.images ? "✓" : "..."}
          </span>
        </div>

      </div>
    </div>
  );
}

export default Preloader;
