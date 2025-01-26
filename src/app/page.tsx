"use client";
import Header from "@/components/core/Header";
import { NeatConfig, NeatGradient } from "@firecms/neat";
import { useEffect, useRef } from "react";

const config: NeatConfig = {
  colors: [
    { color: "#00BAFF", enabled: true },
    { color: "#FB40F8", enabled: true },
    { color: "#FFB700", enabled: false },
    { color: "#5865F2", enabled: true },
    { color: "#32ED7C", enabled: false },
  ],
  speed: 4,
  horizontalPressure: 3,
  verticalPressure: 4,
  waveFrequencyX: 10,
  waveFrequencyY: 0,
  waveAmplitude: 10,
  shadows: 5,
  highlights: 10,
  colorBrightness: 0.25,
  colorSaturation: 2,
  wireframe: false,
  colorBlending: 9,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  grainScale: 2,
  grainIntensity: 0.05,
  grainSpeed: 1,
  resolution: 0.5,
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Use HTMLCanvasElement
  let neatInstance: NeatGradient | null = null;

  useEffect(() => {
    if (canvasRef.current) {
      neatInstance = new NeatGradient({
        ref: canvasRef.current,
        ...config,
      });
      neatInstance.speed = 6;
    }

    return () => {
      if (neatInstance) {
        neatInstance.destroy();
        neatInstance = null;
      }
    };
  }, []);

  return (
    <>

      <Header />


      <div className="w-full fx-flex-center flex-col absolute top-0">
       
        <div className="hero-bg-animation relative z-10 h-[700px] fx-default-layout ">
        </div>

        <div className="fx-default-layout overflow-hidden h-[700px] absolute top-0">

          <div className="absolute inset-0 top-0 z-[-1] h-[700px] bg-transparent bg-[linear-gradient(to_right,var(--gradient-grid-main-header)_1px,transparent_1px),linear-gradient(to_bottom,var(--gradient-grid-main-header)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="PZLPMy fx-default-layout h-[700px] overflow-hidden absolute top-0">
          <canvas ref={canvasRef} className="w-full h-[700px] absolute -z-10 top-0 left-0" /> {/* Use canvas tag */}
        </div>
      </div>

      <div className="pt-[64px]">
        <h1>Hello world</h1>
      </div>



    </>
  );
}