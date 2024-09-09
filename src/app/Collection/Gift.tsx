import {
  FunctionComponent,
  useCallback,
  useMemo,
  type CSSProperties,
} from "react";
import { useRouter } from "next/navigation";

export type GiftType = {
  className?: string;
  description?: string;
  GiftType?: string;
  ReceiveType?: string;
};

const Gift: FunctionComponent<GiftType> = ({className = "", description, GiftType, ReceiveType}) => {

  return (
    <div
      className={`self-stretch drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start shrink-0 max-w-full text-left text-xs text-sec-black font-jost ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start pt-[73px] px-2 pb-5 box-border relative max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-bg-white"></div>

        <h2 className="left-[22px] text-xl absolute tracking-[-0.43px] leading-[22px] font-bold font-[inherit] z-[2] inline-block top-[50%] transform translate-y-[-50%]">
            {GiftType}
        </h2>

        <div className="bg-act-yellow w-[45%] h-[60%] rounded-xl absolute top-[50%] -translate-y-1/2 right-[22px]">
            <h2 className="text-xl absolute tracking-[-0.43px] leading-[22px] font-bold font-[inherit] z-[2] inline-block top-[53%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                {ReceiveType}
            </h2>
        </div>

      </div>
    </div>
  );
};

export default Gift;