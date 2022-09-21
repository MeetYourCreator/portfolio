import React from 'react';
import {Adbusters, WSJ, PM, TA, HP, BB} from './style.js';
import GridLayout from 'react-grid-layout';

class Messaging extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 5, w: 5, h: 2},
      {i: 'b', x: 0, y: 3, w: 2, h: 10},
      {i: 'c', x: 2, y: 2, w: 3, h: 10},
      {i: 'd', x: 3, y: 5, w: 3, h: 10},
      {i: 'e', x: 4, y: 9, w: 3, h: 10},
      {i: 'f', x: 5, y: 9, w: 3, h: 10},
    ];
    return (
      <>
        <section className='mssg-container'>
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
            <Adbusters key='a' />
            <WSJ key='b' />
            <PM key='c' />
            <TA key='d' />
            <HP key='e' />
            <BB key='f' />
          </GridLayout>
        </section>
      </>
    );
  }
}

export default Messaging;
