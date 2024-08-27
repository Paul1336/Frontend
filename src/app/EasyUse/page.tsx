"use client"
import { FunctionComponent, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Coupon from "../components/Coupon";

const EasyUse = ({ className = "" }) => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/9");
  }, [router]);

  const onMenuIconClick = useCallback(() => {
    router.push("/7");
  }, [router]);

  return (
    <div
      className={`w-[393px] bg-bg-grey max-w-full flex flex-col items-end justify-start pt-[100px] px-[11px] pb-4 box-border gap-[15px] leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-end py-0 pl-5 pr-[17px] box-border max-w-full text-left text-13xl text-sec-black font-jost">
        <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[150%] font-bold font-[inherit] inline-block min-w-[127px]">
                隨取即用
              </h1>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-10 h-10 relative object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/menu@2x.png"
                  onClick={onMenuIconClick}
                />
              </div>
            </div>
            <Navbar />
          </div>
          <SearchBar />
        </div>
      </section>
      <section className="self-stretch h-[542px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-2.5 px-[19px] pb-[13px] box-border gap-[25px] max-w-full">
        <Coupon
          onGroupContainerClick={onGroupContainerClick}
          propFlexDirection="row"
          propFlex="1"
          propAlignSelf="unset"
          prop="來店消費即可折 5 元"
          propHeight="unset"
          prop1="政大茶亭一店"
          propWidth="unset"
          propMinWidth="118px"
          propRight="94px"
          propLeft="unset"
        />
        <Coupon
          propFlexDirection="row"
          propFlex="1"
          propAlignSelf="unset"
          prop="滿50元即送青菜一份"
          propHeight="unset"
          prop1="極鮮滷味"
          propWidth="unset"
          propMinWidth="79px"
          propRight="unset"
          propLeft="119px"
        />
        <Coupon
          propFlexDirection="row"
          propFlex="1"
          propAlignSelf="unset"
          prop="滿130即送蛋花湯一碗"
          propHeight="unset"
          prop1="永康街左撇子"
          propWidth="unset"
          propMinWidth="118px"
          propRight="94px"
          propLeft="unset"
        />
        <Coupon
          propFlexDirection="row"
          propFlex="1"
          propAlignSelf="unset"
          prop="4pm-7pm 來店消費即送甜點一份"
          propHeight="unset"
          prop1="極鮮滷味"
          propWidth="unset"
          propMinWidth="79px"
          propRight="unset"
          propLeft="119px"
        />
        <Coupon
          propFlexDirection="column"
          propFlex="unset"
          propAlignSelf="stretch"
          prop="4pm-7pm 來店消費即送甜點一份"
          propHeight="18px"
          prop1="首思義"
          propWidth="60px"
          propMinWidth="unset"
          propRight="unset"
          propLeft="119px"
        />
        <Coupon
          prop="4pm-7pm 來店消費即送甜點一份"
          prop1="永康街左撇子"
        />
      </section>
    </div>
  );
};

export default EasyUse;