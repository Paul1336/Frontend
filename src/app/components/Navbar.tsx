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
      className={`self-stretch h-[54px] relative shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-bg-white">
        <div className="absolute h-[66%] w-[30%] left-[4%] top-[50%] translate-y-[-50%] rounded-xl bg-act-yellow z-[1]">  
          <img
            className="absolute inset-0 m-auto w-[25px] h-[25px] object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src="/home@2x.png"
            onClick={onProductIconClick}
          />
        </div>

        <div className="absolute h-[66%] w-[30%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl z-[1]">  
          <img
            className="absolute inset-0 m-auto w-[25px] h-[25px] object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src="/product@2x.png"
            onClick={onProductIconClick}
          />
        </div>

        <div className="absolute h-[66%] w-[30%] right-[4%] top-[50%] translate-y-[-50%] rounded-xl z-[1]">  
          <img
            className="absolute inset-0 m-auto w-[25px] h-[25px] object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src="/combo-chart@2x.png"
            onClick={onComboChartIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
