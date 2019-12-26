import * as React from 'react';
import EditorLayout from '../../../../layouts/EditorLayout';
import ToolBars from '../../../../components/Toolbars';
import Content from '../../../../components/Content';
import Footer from '../../../../components/Footer';
import Tool from '../../../../components/Tool';
import './Interface.scss';

const {
  ToolBarRight,
  ToolBarLeft,
  ToolBarTop,
} = ToolBars;

const divStyles = {
  color: '#fff',
  fontSize: 10,
  fontWeight: 700,
};

export const Interface: React.SFC = () => {
  return (
    <div className="Interface">
      <EditorLayout>
        <ToolBarLeft>
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
        </ToolBarLeft>
        <ToolBarRight>
          <Tool />
          <Tool />
          <Tool />
        </ToolBarRight>
        <ToolBarTop>
          <Tool />
        </ToolBarTop>
        <Content>
          {/* rulers and other stuff */}
        </Content>
        <Footer>
          <div style={divStyles}>English</div>
        </Footer>
      </EditorLayout>
    </div>
  );
}
