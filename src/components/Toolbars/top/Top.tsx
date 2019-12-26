import * as React from 'react';
import './Top.scss';

export type TopProps = {
  children?: React.ReactElement | React.ReactElement[],
};

export const Top: React.FC<TopProps> = ({children}) => {
  return (
    <div className="Top">
      {children}
    </div>
  );
};
