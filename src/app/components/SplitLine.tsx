import { FunctionComponent } from "react";

export type SplitLineType = {
  className?: string;
};

const SplitLine: FunctionComponent<SplitLineType> = ({ className = "" }) => {
  return <div className={`h-px flex-1 relative bg-mid ${className}`} />;
};

export default SplitLine;
