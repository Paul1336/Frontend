"use client";
import { FunctionComponent, useCallback } from "react";
import CouponHistoryList from "../components/CouponHistoryList";
import { useRouter } from "next/navigation";

export type CouponHistoryType = {
  className?: string;
};

const CouponHistory: FunctionComponent<CouponHistoryType> = ({
  className = "",
}) => {

 const router = useRouter();

 const onClickBack = useCallback(() => {
  router.back();
 }, [router]);

  return (
    <div
      className={`bg-bg-grey h-dvh overflow-auto max-w-full flex flex-col items-start justify-start pt-20 px-[31px] pb-11 box-border gap-[29px] leading-[normal] tracking-[normal] text-center text-base text-sec-black font-jost ${className}`}
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
          <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[32px]" onClick={onClickBack}>
            返回
          </div>
        </div>
        <h1 className="m-0 relative text-[32px] tracking-[-0.01em] leading-[150%] font-bold font-[inherit] text-left inline-block min-w-[127px]">
          優惠紀錄
        </h1>
      </div>
      <CouponHistoryList />
    </div>
  );
};

export default CouponHistory;