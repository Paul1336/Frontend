"use client";
import Image from "next/image";
import { FunctionComponent, useCallback } from "react";

interface Props {
  className?: string;
}

const OptionsLinkPanel: FunctionComponent = ({ className }: Props) => {
  const onOptionsGridContainerClick = useCallback(() => {
    // Please sync "優惠記錄" to the project
  }, []);

  const onOptionsGridContainerClick1 = useCallback(() => {
    // Please sync "聯絡我們" to the project
  }, []);

  const onOptionsGridContainerClick2 = useCallback(() => {
    // Please sync "權益須知" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pl-[27px] pr-0 box-border max-w-full text-center text-xl text-sec-black font-jost ${className}`}
    >
      <div className="flex-1 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl bg-bg-white flex flex-col items-start justify-start py-[31px] pl-[25px] pr-[19px] box-border gap-[21px] max-w-full">
        <div
          className="self-stretch flex flex-row items-start justify-between gap-5 cursor-pointer"
          onClick={onOptionsGridContainerClick}
        >
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <Image
              className="h-10 w-10 relative rounded-xl object-cover"
              alt=""
              src="/time-machine@2x.png"
              width={40}
              height={40}
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[80px]">
                優惠紀錄
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <Image
              className="w-5 h-5 relative object-cover z-[1]"
              alt=""
              src="/forward-1@2x.png"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
          <div className="h-px flex-1 relative bg-mid z-[1]" />
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-between gap-5 cursor-pointer"
          onClick={onOptionsGridContainerClick1}
        >
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <Image
              className="h-10 w-10 relative rounded-xl object-cover"
              alt=""
              src="/phone@2x.png"
              width={40}
              height={40}
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[80px]">
                聯絡我們
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <Image
              className="w-5 h-5 relative object-cover z-[1]"
              alt=""
              src="/forward-1@2x.png"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
          <div className="h-px flex-1 relative bg-mid z-[1]" />
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start relative gap-[18px] cursor-pointer"
          onClick={onOptionsGridContainerClick2}
        >
          <Image
            className="h-10 w-10 relative rounded-xl object-cover"
            alt=""
            src="/document@2x.png"
            width={40}
            height={40}
          />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[80px]">
              權益須知
            </div>
          </div>
          <Image
            className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[0px] object-cover z-[1]"
            alt=""
            src="/forward-1@2x.png"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default OptionsLinkPanel;
