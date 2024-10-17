import { FunctionComponent } from "react";

export type SearchBarType = {
  className?: string;
};

const SearchBar: FunctionComponent<SearchBarType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl bg-bg-white flex flex-row items-start justify-start pt-2 px-2.5 pb-[7px] box-border gap-2.5 max-w-full text-left text-xs text-sec-black font-jost ${className}`}
    >
      <div className="h-[35px] w-[331px] relative rounded-xl bg-bg-white hidden max-w-full" />
      <img
        className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
        alt=""
        src="/search@2x.png"
      />
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
        <b className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[96px] z-[1]">
          輸入想尋找的酷胖
        </b>
      </div>
    </div>
  );
};

export default SearchBar;
