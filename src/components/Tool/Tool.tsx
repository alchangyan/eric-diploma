import * as React from 'react';
import './Tool.scss';

export type ToolProps = {
  children?: React.ReactNode |React.ReactElement | React.ReactElement[],
};

export const Tool: React.FC<ToolProps> = ({children}) => {
  return (
    <div className="Tool">
      T
    </div>
  );
};
