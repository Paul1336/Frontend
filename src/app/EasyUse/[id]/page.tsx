"use client";
import { FunctionComponent, useCallback } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

export type VerifyType = {
  className?: string;
};

const Verify: FunctionComponent<VerifyType> = ({ className = "" }) => {
  const router = useRouter();

  const { id } = useParams();

  const onGoBackContainerClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div
      className={`bg-bg-grey max-w-full overflow-y-auto flex flex-col items-start justify-start pt-20 px-[31px] pb-11 box-border gap-[10px] leading-[normal] tracking-[normal] text-center text-base text-sec-black font-jost ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[22px]">
        <div className="flex flex-row items-start justify-start gap-[9px]">
          <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
            <img
              className="w-[15px] h-[15px] relative object-contain"
              loading="lazy"
              alt=""
              src="/forward@2x.png"
            />
          </div>
          <div
            className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[32px]"
            onClick={onGoBackContainerClick}
          >
            返回
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[25px] w-full h-[75%] self-stretch overflow-auto px-[19px] pt-[23px] pb-[6em]">
        <div className="w-full h-[15em] drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl bg-bg-white grow-0">
          <img
            className="object-scale-down h-full w-full"
            alt=""
            src="/group-16@2x.png"
          />
        </div>

        <div className="w-full h-[13em] drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl h-[300px] bg-bg-white flex justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center gap-[30px] w-full my-[10%]">
            <h2 className="text-lg tracking-[-0.43px] leading-[22px] font-bold font-[inherit] z-[2] inline-block">
              魚樂土魠魚羹
            </h2>
            <h2 className="text-[25px] tracking-[-0.43px] leading-[30px] font-bold font-[inherit] z-[2] inline-block max-w-[60%] mx-auto">
              來店消費滿 120 送滷蛋一顆
            </h2>
            <h2 className="text-lg tracking-[-0.43px] leading-[22px] font-bold font-[inherit] z-[2] inline-block">
              活動有效至 2024/07/13
            </h2>
            </div>
        </div>

        <div className="w-full h-[16em] drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl h-[300px] bg-bg-white flex justify-center items-center h-full">
          <div className="flex flex-col justify-center items-start gap-[30px] w-[80%] my-[10%]">
            <h2 className="text-xl tracking-[-0.43px] leading-[22px] text-left font-bold font-[inherit] z-[2] inline-block">活動期間至政大茶亭一店，<br/>來店消費即可折 5 元。</h2>
            <h2 className="text-lg tracking-[-0.43px] leading-[22px] font-[inherit] z-[2] inline-block">注意事項 :</h2>
            <h2 className="text-lg tracking-[-0.43px] leading-[22px] font-[inherit] z-[2] inline-block">1. <br/>2. <br/>3. <br/>4. <br/>5. <br/>6. <br/>7. <br/>8.</h2>
          </div>
        </div>

        <div className="bg-act-yellow inline-block drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] right-[50px] left-[50px] h-[5em] bottom-[30px] rounded-xl flex flex-col items-center justify-center fixed">
          <h2 className="text-[32px] tracking-[-0.43px] leading-[22px] font-bold font-[inherit] z-[2] inline-block">
            核銷
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Verify;
