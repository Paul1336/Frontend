"use client";
import { FunctionComponent, useCallback } from "react";
import Image from "next/image";
import UserDataPanel from "../components/UserData/UserDataPanel";
import { useRouter } from "next/navigation";

export type UserDataType = {
  className?: string;
};

const UserData: FunctionComponent<UserDataType> = ({ className = "" }) => {
  const router = useRouter();

  const onGoBackContainerClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="w-full relative bg-bg-grey overflow-hidden flex flex-col items-start justify-start pt-0 pb-7 pl-1 pr-0 box-border gap-[71px] leading-[normal] tracking-[normal] text-center text-[12px] text-sec-black font-jost">
      <section className="self-stretch flex flex-col items-end justify-start py-0 pl-0 pr-[31px] box-border gap-[35px] max-w-full text-center text-[16px] text-sec-black font-jost">
        <Image
          className="mr-[-35px] w-[393px] relative max-h-full overflow-hidden object-cover max-w-[110%] shrink-0"
          loading="lazy"
          alt=""
          src="/status-bar@2x.png"
          width={393}
          height={100} // Adjust this height to match the aspect ratio of your image
        />
        <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[5px] pl-[27px] pr-0 gap-[22px]">
          <div className="flex flex-row items-start justify-start gap-[9px]">
            <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
              <Image
                className="w-[15px] h-[15px] relative object-contain"
                loading="lazy"
                alt=""
                src="/forward@2x.png"
                width={15}
                height={15}
              />
            </div>
            <div
              className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[32px] cursor-pointer"
              onClick={onGoBackContainerClick}
            >
              返回
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[29px] text-left text-[32px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[150%] font-bold font-[inherit] inline-block min-w-[64px]">
              用戶資料
            </h2>
          </div>
        </div>
        <UserDataPanel></UserDataPanel>
      </section>
    </div>
  );
};

export default UserData;
