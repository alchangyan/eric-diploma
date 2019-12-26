import * as React from 'react';
import './Content.scss';

export type ContentProps = {
  children?: React.ReactNode |React.ReactElement | React.ReactElement[],
};

export const Content: React.FC<ContentProps> = ({children}) => {
  return (
    <div className="Content">
      {children}
    </div>
  );
};
