import { FunctionComponent, useCallback } from "react";
import { useRouter } from "next/navigation";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  const router = useRouter();

  const onProductIconClick = useCallback(() => {
    router.push("/5");
  }, [router]);

  const onComboChartIconClick = useCallback(() => {
    router.push("/8");
  }, [router]);

  return (
    <div
      className={`self-stretch h-[54px] relative shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-bg-white" />
      <div className="absolute h-[64.81%] w-[28.4%] top-[16.67%] right-[68.58%] bottom-[18.52%] left-[3.02%] rounded-xl bg-act-yellow z-[1]" />
      <img
        className="absolute h-[40.74%] w-[6.65%] top-[29.63%] right-[78.85%] bottom-[29.63%] left-[14.5%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/home@2x.png"
      />
      <img
        className="absolute h-[40.74%] w-[6.65%] top-[29.63%] right-[46.53%] bottom-[29.63%] left-[46.83%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer z-[1]"
        loading="lazy"
        alt=""
        src="/product@2x.png"
        onClick={onProductIconClick}
      />
      <img
        className="absolute h-[40.74%] w-[6.65%] top-[29.63%] right-[13.9%] bottom-[29.63%] left-[79.46%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer z-[1]"
        loading="lazy"
        alt=""
        src="/combo-chart@2x.png"
        onClick={onComboChartIconClick}
      />
    </div>
  );
};

export default Navbar;
