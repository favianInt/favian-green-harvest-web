
import { ChromeGrid } from "@/components/ui/chrome-grid";

const DemoOne = () => {
  return (
    <div className="h-svh w-screen">
      <ChromeGrid/>
      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-widest text-white whitespace-nowrap">
          FAVERTON
        </h1>
        <p className="text-sm md:text-base text-white/70 font-mono tracking-wide pointer-events-none">
          Découvrez l'avenir de l'agriculture biologique
        </p>
      </div>
    </div>
  );
};

export { DemoOne };
