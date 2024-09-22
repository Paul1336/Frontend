"use client";
import { FunctionComponent, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Gift from "./Gift";

export type CouponType = {
  className?: string;
  description?: string;
  CouponName?: string;
  id?: number;
};

const coupons = [
  { id: 1, description: "來店消費即可折 5 元", CouponName: "政大茶亭一店" },
  { id: 2, description: "來店消費即可折 5 元", CouponName: "政大茶亭二店" },
  { id: 3, description: "來店消費即可折 10 元", CouponName: "政大茶亭三店" },
  { id: 4, description: "滿 100 元即可折 15 元", CouponName: "政大茶亭四店" },
  { id: 5, description: "滿 200 元折 20 元", CouponName: "政大茶亭五店" },
  { id: 6, description: "第二杯半價", CouponName: "政大茶亭六店" },
  { id: 7, description: "指定飲品折扣", CouponName: "政大茶亭七店" },
];

const Coupon: FunctionComponent<CouponType> = ({className = "", description, CouponName, id}) => {
  const router = useRouter();

  const onCouponClick = useCallback(() => {
    router.push(`/EasyUse/${id}`);
  }, [router, id]);

  return (
    <div
      className={`self-stretch drop-shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start shrink-0 max-w-full text-left text-xs text-sec-black font-jost ${className}`}
      onClick={onCouponClick}
    >
      <div className="flex-1 flex flex-row items-start justify-start pt-[73px] px-2 pb-5 box-border relative max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-bg-white" />

        <h2 className="left-[119px] absolute top-[32px] text-xl tracking-[-0.43px] leading-[22px] font-bold font-[inherit] z-[2] inline-block">
          {CouponName}
        </h2>

        <div className="bottom-[5px] left-[111px] w-[204px] relative tracking-[-0.43px] leading-[23px] flex items-center shrink-0 z-[1]">
          {description}
        </div>

        <div className="h-[70px] w-[70px] absolute !m-[0] top-[50%] translate-y-[-50%] left-[22px] z-[2]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-16@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

const EasyUse = ({ className = "" }) => {
  const router = useRouter();

  const onMenuIconClick = useCallback(() => {
    router.push("/OptionsMenu");
  }, [router]);

  return (
    <div
      className={`w-full h-dvh bg-bg-grey max-w-full flex flex-col items-end justify-start pt-[100px] px-[11px] pb-4 box-border gap-[15px] leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-end py-0 pl-5 pr-[17px] box-border max-w-full text-left text-13xl text-sec-black font-jost">
        <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <h1 className="text-[32px] m-0 relative tracking-[-0.01em] leading-[150%] font-bold font-[inherit]">
                專屬酷胖
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
            <Navbar atCollection={true}/>
          </div>
          <SearchBar />
        </div>
      </section>
      <section className="self-stretch h-[75%] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-[23px] px-[19px] pb-[13px] box-border gap-[25px] max-w-full">
        <Gift GiftType="每日獨特酷胖" ReceiveType="領取" />
        <Gift GiftType="Emily 的贈禮" ReceiveType="收下" />
        {coupons.map((coupon, index) => (
            <Coupon key={coupon.id} description={coupon.description} CouponName={coupon.CouponName} id={coupon.id}></Coupon>
        ))}
      </section>
    </div>
  );
};

export default EasyUse;
