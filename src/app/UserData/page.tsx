import { FunctionComponent } from "react";
import Image from "next/image";
import UserDataPanel from "../components/UserDataPanel";

export type UserDataType = {
  className?: string;
};

const UserData: FunctionComponent<UserDataType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[393px] bg-bg-grey max-w-full overflow-hidden flex flex-col items-start justify-start pt-3 pb-[149px] pl-[21px] pr-3.5 box-border gap-[29px] leading-[normal] tracking-[normal] ${className}`}
    >
      <Image
        className="w-[219px] h-[30px] relative object-cover hidden"
        alt=""
        src="/notch@2x.png"
        width={219} // Provide width
        height={30} // Provide height
      />
      <Image
        className="w-1.5 h-1.5 relative hidden"
        alt=""
        src="/recording-indicator.svg"
        width={6} // Provide width (1.5rem = 24px, w-1.5 = 6px)
        height={6} // Provide height
      />
      <section className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-px gap-5 text-center text-base text-sec-black font-jost">
        <div className="w-[137px] flex flex-col items-start justify-start gap-[47px]">
          <Image
            className="w-[54px] h-[21px] relative"
            loading="lazy"
            alt=""
            src="/left-side.svg"
            width={54} // Provide width
            height={21} // Provide height
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
              <div className="flex flex-row items-start justify-start py-0 pl-0 pr-5 gap-[9px]">
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <Image
                    className="w-[15px] h-[15px] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/forward@2x.png"
                    width={15} // Provide width
                    height={15} // Provide height
                  />
                </div>
                <div className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[32px]">
                  返回
                </div>
              </div>
              <h1 className="m-0 relative text-13xl tracking-[-0.01em] leading-[150%] font-bold font-[inherit] inline-block min-w-[127px]">
                用戶資料
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <Image
              className="h-[10.7px] w-[17px] relative"
              loading="lazy"
              alt=""
              src="/mobile-signal.svg"
              width={17} // Provide width
              height={10.7} // Provide height
            />
            <Image
              className="h-[11px] w-[15.3px] relative"
              loading="lazy"
              alt=""
              src="/wifi.svg"
              width={15.3} // Provide width
              height={11} // Provide height
            />
            <Image
              className="self-stretch w-[24.3px] relative max-h-full min-h-[11px]"
              loading="lazy"
              alt=""
              src="/battery.svg"
              width={24.3} // Provide width
              height={11} // Provide height
            />
          </div>
        </div>
      </section>
      <footer className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-[17px] box-border max-w-full">
        <UserDataPanel />
      </footer>
    </div>
  );
};

export default UserData;
