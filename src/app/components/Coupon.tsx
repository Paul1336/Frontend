import {
  FunctionComponent,
  useCallback,
  useMemo,
  type CSSProperties,
} from "react";
import { useRouter } from "next/navigation";

export type CouponType = {
  className?: string;
  description?: string;
  CouponName?: string;

  propFlexDirection?: CSSProperties["flexDirection"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
};

const Coupon: FunctionComponent<CouponType> = ({
  className = "",
  description,
  CouponName,
}) => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div
      className={`self-stretch drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start shrink-0 max-w-full text-left text-xs text-sec-black font-jost ${className}`}
      onClick={onGroupContainerClick}
    >
      <div className="flex-1 flex flex-row items-start justify-start pt-[73px] px-2 pb-5 box-border relative max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-bg-white" />

        <h2 className="left-[119px] absolute top-[32px] text-xl tracking-[-0.43px] leading-[22px] font-bold font-[inherit] z-[2] inline-block">
          {CouponName}
        </h2>

        <div className="bottom-[5px] left-[111px] w-[204px] relative tracking-[-0.43px] leading-[23px] flex items-center shrink-0 z-[1]">
          {description}
        </div>

        <div className="h-[70px] w-[70px] absolute !m-[0] top-[50%] translate-y-[-50%] left-[22px] z-[2]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-16@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Coupon;
