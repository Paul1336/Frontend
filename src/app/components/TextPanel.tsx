import { FunctionComponent } from "react";

export type TextPanelType = {
  className?: string;
};

const TextPanel: FunctionComponent<TextPanelType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch ml-[27px] shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] rounded-xl bg-bg-white flex flex-row items-start justify-start py-[33.3px] px-[26px] text-left text-base text-sec-black font-jost ${className}`}
    >
      <div className="w-full overflow-y-auto shrink-0 flex flex-row items-start justify-start">
        <div className="mt-[-1.3px] h-[540px] flex-1 relative leading-[27px] inline-block">
          <p className="m-0">1. 會員資格與登錄</p>
          <p className="m-0">使用者需年滿18歲才能註冊並使用本平台。</p>
          <p className="m-0">
            所有使用者需提供有效的電子郵件地址和手機號碼以完成註冊。
          </p>
          <p className="m-0">
            請妥善保管您的帳號資訊，若發現任何異常情況，應立即聯繫我們的客服團隊。
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">2. 優惠券使用規則</p>
          <p className="m-0">優惠券僅限在指定的商家和指定時間內使用。</p>
          <p className="m-0">
            優惠券不可與其他優惠或折扣同時使用，除非另有說明。
          </p>
          <p className="m-0">使用優惠券前請詳細閱讀優惠券的使用條款與細則。</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">3. 商家資訊與服務</p>
          <p className="m-0">商家應提供準確的店鋪資訊、優惠內容及有效期限。</p>
          <p className="m-0">
            若商家提供的優惠內容有變更或取消，商家需及時更新資訊並通知用戶。
          </p>
          <p className="m-0">
            若您對商家的服務有任何問題，請直接聯繫商家處理。
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
      </div>
    </section>
  );
};

export default TextPanel;
