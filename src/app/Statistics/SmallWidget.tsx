import {
  FunctionComponent,
  useCallback,
  useMemo,
  type CSSProperties,
} from "react";
import { useRouter } from "next/navigation";

export type SmallWidgetType = {
  className?: string;
  description?: string;
  usage?:number;
  metric?:string;
};

const SmallWidget: FunctionComponent<SmallWidgetType> = ({ className = "", description, usage, metric}) => {
  return (
    <div
      className={`h-fit py-[30px] flex flex-col items-center justify-center self-stretch h-40 drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] max-w-full text-sec-black font-jost ${className}`}
    >

        <div className="w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-bg-white"></div>

          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-xl tracking-[-0.43px] leading-[22px] font-[inherit] z-[2] inline-block">
                {description}
            </h2>
                <h2 className="text-xl tracking-[-0.43px] leading-[3em] font-[inherit] z-[2]">
                  <span className="text-[3em] font-bold mx-[10px]">{usage}</span>{metric}
                </h2>
          </div>

        </div>

  );
};

export default SmallWidget;
