import React from "react";

import { uiIconTypeSizeMap } from "./icon-type-size.map";
import { uiIconTypeToSvgMap } from "./icon-type-svg.map";
import { TUiIconTypes } from "./icon-types.enum";

type IconProps = {
  type: TUiIconTypes;
  className?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ type, className, color = "#9F9F9F" }) => {
  const size = uiIconTypeSizeMap.get(type);
  const width = size?.width || 16;
  const height = size?.height || 16;

  const svgContent = uiIconTypeToSvgMap.get(type);

  return (
    <svg
      width={width}
      height={height}
      className={className}
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: svgContent || "" }} 
      style={{ stroke: color }}
    />
  );
};
