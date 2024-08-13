import { FunctionComponent } from "react";
import HistoryListElement from "../components/HistoryListElement";

export type CouponHistoryListType = {
  className?: string;
};

const CouponHistoryList: FunctionComponent<CouponHistoryListType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl bg-bg-white overflow-hidden flex flex-row items-start justify-start py-[25px] px-[27px] text-left text-base text-sec-black font-jost ${className}`}
    >
      <div className="h-[555px] flex-1 overflow-y-auto flex flex-col items-start justify-start gap-3">
        <HistoryListElement
          prop="政大茶亭一店"
          separator="2024/07/14, 14:15"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="unset"
          prop="魚樂𩵚魠魚羹"
          propMinWidth="96px"
          propWidth1="unset"
          separator="2024/07/14, 03:23"
          propDisplay="inline-block"
          propMinWidth1="101px"
          propAlignSelf="unset"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="unset"
          prop="永康街左撇子"
          propMinWidth="96px"
          propWidth1="unset"
          separator="2024/07/13, 08:30"
          propDisplay="inline-block"
          propMinWidth1="101px"
          propAlignSelf="unset"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="unset"
          prop="極鮮滷味"
          propMinWidth="64px"
          propWidth1="unset"
          separator="2024/07/12, 00:03"
          propDisplay="inline-block"
          propMinWidth1="102px"
          propAlignSelf="unset"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="unset"
          prop="首思義"
          propMinWidth="48px"
          propWidth1="unset"
          separator="2024/07/11, 18:09"
          propDisplay="inline-block"
          propMinWidth1="99px"
          propAlignSelf="unset"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="unset"
          prop="政大茶亭一店"
          propMinWidth="96px"
          propWidth1="unset"
          separator="2024/07/10, 17:15"
          propDisplay="inline-block"
          propMinWidth1="98px"
          propAlignSelf="unset"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="unset"
          prop="政大茶亭一店"
          propMinWidth="96px"
          propWidth1="unset"
          separator="2024/07/10, 17:15"
          propDisplay="inline-block"
          propMinWidth1="98px"
          propAlignSelf="unset"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="unset"
          prop="政大茶亭一店"
          propMinWidth="96px"
          propWidth1="unset"
          separator="2024/07/10, 17:15"
          propDisplay="inline-block"
          propMinWidth1="98px"
          propAlignSelf="unset"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="unset"
          prop="政大茶亭一店"
          propMinWidth="96px"
          propWidth1="unset"
          separator="2024/07/10, 17:15"
          propDisplay="inline-block"
          propMinWidth1="98px"
          propAlignSelf="unset"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="99px"
          prop="政大茶亭一店"
          propMinWidth="unset"
          propWidth1="96px"
          separator="2024/07/10, 17:15"
          propDisplay="unset"
          propMinWidth1="unset"
          propAlignSelf="stretch"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="99px"
          prop="政大茶亭一店"
          propMinWidth="unset"
          propWidth1="96px"
          separator="2024/07/10, 17:15"
          propDisplay="unset"
          propMinWidth1="unset"
          propAlignSelf="stretch"
          forward="/forward-1@2x.png"
        />
        <HistoryListElement
          propWidth="99px"
          prop="政大茶亭一店"
          propMinWidth="unset"
          propWidth1="96px"
          separator="2024/07/10, 17:15"
          propDisplay="unset"
          propMinWidth1="unset"
          propAlignSelf="stretch"
          forward="/forward-1@2x.png"
          lastElement={true}
        />

      </div>
    </section>
  );
};

export default CouponHistoryList;