"use client";

import {
    FunctionComponent,
    useMemo,
    type CSSProperties,
    useCallback,
  } from "react";
  
  import { useRouter } from "next/navigation";

  export type HistoryListElementType = {
    className?: string;
    prop?: string;
    separator?: string;
    forward?: string;
  
    /** Style props */
    propWidth?: CSSProperties["width"];
    propMinWidth?: CSSProperties["minWidth"];
    propWidth1?: CSSProperties["width"];
    propDisplay?: CSSProperties["display"];
    propMinWidth1?: CSSProperties["minWidth"];
    propAlignSelf?: CSSProperties["alignSelf"];
    lastElement?: boolean;
  };
  
  const HistoryListElement: FunctionComponent<HistoryListElementType> = ({
    className = "",
    propWidth,
    prop,
    propMinWidth,
    propWidth1,
    separator,
    propDisplay,
    propMinWidth1,
    propAlignSelf,
    forward,
    lastElement
  }) => {
    const router = useRouter();
    const frameDivStyle: CSSProperties = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);
  
    const divStyle: CSSProperties = useMemo(() => {
      return {
        minWidth: propMinWidth,
        width: propWidth1,
      };
    }, [propMinWidth, propWidth1]);
  
    const div1Style: CSSProperties = useMemo(() => {
      return {
        display: propDisplay,
        minWidth: propMinWidth1,
        alignSelf: propAlignSelf,
      };
    }, [propDisplay, propMinWidth1, propAlignSelf]);
  
    const onCouponClick = useCallback(() => {
      router.push("/HistoryElementPage");
    }, []);
  
    return (
      <div
        className={`self-stretch flex flex-col items-start justify-start gap-2 shrink-0 cursor-pointer text-left text-base text-sec-black font-jost ${className}`}
        onClick={onCouponClick}
      >
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div
            className="flex flex-col items-start justify-start"
            style={frameDivStyle}
          >
            <div
              className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[96px]"
              style={divStyle}
            >
              {prop}
            </div>
            <div
              className="relative text-xs tracking-[-0.01em] leading-[150%] text-top inline-block min-w-[99px] whitespace-nowrap"
              style={div1Style}
            >
              {separator}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <img
              className="w-5 h-5 relative object-cover"
              loading="lazy"
              alt=""
              src={forward}
            />
          </div>
        </div>
        {!lastElement && <div className="w-full h-px relative bg-mid" />}
      </div>
    );
  };
  
  export default HistoryListElement;