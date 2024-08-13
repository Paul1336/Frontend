import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SplitLine from "./SplitLine";

export type UserInfoElementType = {
  className?: string;
  prop?: string;
  rickyLu?: string;

  /** Style props */
  rickyLuGap?: CSSProperties["gap"];
  userIconsMinWidth?: CSSProperties["minWidth"];
  userAvatarsDisplay?: CSSProperties["display"];
  userAvatarsMinWidth?: CSSProperties["minWidth"];
  lastElement?: boolean;
};

const UserInfoElement: FunctionComponent<UserInfoElementType> = ({
  className = "",
  rickyLuGap,
  prop,
  userIconsMinWidth,
  rickyLu,
  userAvatarsDisplay,
  userAvatarsMinWidth,
  lastElement,
}) => {
  const userNamesStyle: CSSProperties = useMemo(() => {
    return {
      gap: rickyLuGap,
    };
  }, [rickyLuGap]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: userIconsMinWidth,
    };
  }, [userIconsMinWidth]);

  const rickyLuStyle: CSSProperties = useMemo(() => {
    return {
      display: userAvatarsDisplay,
      minWidth: userAvatarsMinWidth,
    };
  }, [userAvatarsDisplay, userAvatarsMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-4 text-left text-base text-sec-black font-jost ${className}`}
    >
      <div
        className="self-stretch flex flex-row items-start justify-between gap-5"
        style={userNamesStyle}
      >
        <div
          className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[48px]"
          style={divStyle}
        >
          {prop}
        </div>
        <div
          className="relative tracking-[-0.01em] leading-[150%] text-top text-right inline-block min-w-[54px]"
          style={rickyLuStyle}
        >
          {rickyLu}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
        {!lastElement && <SplitLine />}
      </div>
    </div>
  );
};

export default UserInfoElement;
