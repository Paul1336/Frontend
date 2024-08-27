import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propFlexDirection?: CSSProperties["flexDirection"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];

  /** Action props */
  onGroupContainerClick?: () => void;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  onGroupContainerClick,
  propFlexDirection,
  propFlex,
  propAlignSelf,
  prop,
  propHeight,
  prop1,
  propWidth,
  propMinWidth,
  propRight,
  propLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const h2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      right: propRight,
      left: propLeft,
    };
  }, [propWidth, propMinWidth, propRight, propLeft]);

  return (
    <div
      className={`self-stretch [filter:drop-shadow(0px_1px_10px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-start shrink-0 max-w-full text-left text-xs text-sec-black font-jost ${className}`}
      onClick={onGroupContainerClick}
      style={groupDivStyle}
    >
      <div
        className="flex-1 flex flex-row items-start justify-end pt-[73px] px-2 pb-5 box-border relative max-w-full"
        style={groupDiv1Style}
      >
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-bg-white" />
        <div
          className="h-[18px] w-[204px] relative leading-[23px] flex items-center shrink-0 z-[1]"
          style={div2Style}
        >
          {prop}
        </div>
        <div className="h-[70px] w-[70px] absolute !m-[0] bottom-[20px] left-[22px] z-[2]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-16@2x.png"
          />
        </div>
        <h2
          className="!m-[0] w-[118px] absolute top-[38px] right-[94px] text-xl tracking-[-0.43px] leading-[22px] font-bold font-[inherit] inline-block z-[2]"
          style={h2Style}
        >
          {prop1}
        </h2>
      </div>
    </div>
  );
};

export default GroupComponent;
