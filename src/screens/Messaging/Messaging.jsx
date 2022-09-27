import React from 'react';
import GridLayout from 'react-grid-layout';
import Layout from '../../components/shared/Layout/Layout.jsx';
import {MssgContainer, Adbusters, WSJ, PM, TA, HP, BB} from './style.js';

class Messaging extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'adbusters', x: 0, y: 9, w: 10, h: 2},
      {i: 'wsj', x: 0, y: 3, w: 2, h: 13},
      {i: 'pm', x: 2, y: 2, w: 3, h: 6},
      {i: 'ta', x: 2, y: 6, w: 3, h: 4},
      {i: 'hp', x: 2, y: 7, w: 8, h: 3},
      {i: 'bb', x: 5, y: 0, w: 5, h: 10},
    ];
    return (
      <>
        <Layout>
          <MssgContainer>
            <GridLayout
              className='layout'
              layout={layout}
              cols={10}
              rowHeight={30}
              width={1800}
              autoSize={true}
              margin={[0, 0]}
              isDraggable={true}
              isResizable={true}
              compactType={'vertical'}
              resizeHandles={['se']}
            >
              <Adbusters className='adbusters' key='adbusters' />
              <WSJ key='wsj' />
              <PM key='pm' />
              <TA key='ta' />
              <HP key='hp' />
              <BB key='bb' />
            </GridLayout>
          </MssgContainer>
        </Layout>
      </>
    );
  }
}

export default Messaging;
