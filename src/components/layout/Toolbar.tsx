import React, { ReactNode } from "react";

interface ToolbarProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ leftContent, rightContent }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-left">{leftContent}</div>
      <div className="toolbar-right">{rightContent}</div>
    </div>
  );
};

export default Toolbar;
