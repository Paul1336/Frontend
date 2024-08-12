import { FunctionComponent } from "react";
import UserInfoElement from "./UserInfoElement";

export type UserDataPanelType = {
  className?: string;
};

const UserDataPanel: FunctionComponent<UserDataPanelType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl bg-bg-white flex flex-row items-start justify-start pt-[31px] pb-[29px] pl-[30px] pr-[29px] box-border max-w-full text-left text-base text-sec-black font-jost ${className}`}
    >
      <div className="h-[500px] w-[331px] relative rounded-xl bg-bg-white hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start gap-4 z-[1]">
        <UserInfoElement prop="用戶名" rickyLu="Ricky Lu" />
        <UserInfoElement
          rickyLuGap="23px"
          prop="帳號"
          userIconsMinWidth="32px"
          rickyLu="rickylu40508@gmail.com (G) Lu"
          userAvatarsDisplay="unset"
          userAvatarsMinWidth="unset"
        />
        <UserInfoElement
          rickyLuGap="20px"
          prop="手機號碼"
          userIconsMinWidth="64px"
          rickyLu="0912-345-678"
          userAvatarsDisplay="inline-block"
          userAvatarsMinWidth="94px"
        />
        <UserInfoElement
          rickyLuGap="20px"
          prop="年齡"
          userIconsMinWidth="32px"
          rickyLu="19"
          userAvatarsDisplay="inline-block"
          userAvatarsMinWidth="17px"
        />
        <UserInfoElement
          rickyLuGap="20px"
          prop="身分"
          userIconsMinWidth="32px"
          rickyLu="大學生"
          userAvatarsDisplay="inline-block"
          userAvatarsMinWidth="48px"
        />
        <UserInfoElement
          rickyLuGap="39px"
          prop="性別"
          userIconsMinWidth="32px"
          rickyLu="完成資料填寫即可獲得獎勵 !"
          userAvatarsDisplay="unset"
          userAvatarsMinWidth="unset"
        />
        <UserInfoElement
          rickyLuGap="20px"
          prop="地區"
          userIconsMinWidth="32px"
          rickyLu="台北"
          userAvatarsDisplay="inline-block"
          userAvatarsMinWidth="32px"
        />
        <UserInfoElement
          rickyLuGap="20px"
          prop="學校"
          userIconsMinWidth="32px"
          rickyLu="完成資料填寫即可獲得獎勵 !"
          userAvatarsDisplay="inline-block"
          userAvatarsMinWidth="32px"
          lastElement={true}
        />
      </div>
    </div>
  );
};

export default UserDataPanel;
