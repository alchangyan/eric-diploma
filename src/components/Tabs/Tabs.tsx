import * as React from 'react';
import Tab from './tab';
import './Tabs.scss';

export type TabsProps = {
  children: React.ReactElement | React.ReactElement[],
};

export const Tabs = ({children}: TabsProps) => {
  const childrenArray = children instanceof Array ? children : [children];
  const tabData = React.useCallback(() => childrenArray.map((child) => {
    const { props } = child;
    return props.tab;
  }), [childrenArray])();

  console.log(tabData)

  return (
    <div className="Tabs">
      {childrenArray}
    </div>
  );
};

Tabs.Tab = Tab;
