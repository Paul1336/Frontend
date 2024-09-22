import {
  FunctionComponent,
  useCallback,
  useMemo,
  type CSSProperties,
} from "react";
import { useRouter } from "next/navigation";

export type LargeWidgetType = {
  className?: string;
  description?: string;
  usage?:number;
  metric?:string;
};

const LargeWidget: FunctionComponent<LargeWidgetType> = ({ className = "", description, usage, metric}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center self-stretch h-64 drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] max-w-full text-sec-black font-jost ${className}`}
    >

        <div className="w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-bg-white"></div>

          <div className="flex flex-col items-start gap-2 w-[80%]">
            <h2 className="text-xl tracking-[-0.43px] font-[inherit] z-[2]">
                本周你已使用
            </h2>
            <h2 className="text-xl tracking-[-0.43px] font-[inherit] z-[2] self-end">
                7
            </h2>
            <h2 className="text-xl tracking-[-0.43px] font-[inherit] z-[2]">
                還差
            </h2>
            <h2 className="text-xl tracking-[-0.43px] font-[inherit] z-[2] self-end">
                3 張酷胖
            </h2>
            <h2 className="text-xl tracking-[-0.43px] font-[inherit] z-[2]">
                就能獲得額外優惠
            </h2>
          </div>

        </div>

  );
};

export default LargeWidget;
