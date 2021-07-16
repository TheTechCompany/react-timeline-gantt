import React, { Component, createRef, useEffect, useRef, useState } from 'react';
import { DATA_CONTAINER_WIDTH } from '../../Const';
import DataTask from './DataTask';
import DataRow from './DataRow';
import DateHelper from '../../helpers/DateHelper';
import Config from '../../helpers/config/Config';
import sizeMe from 'react-sizeme';
import { useContext } from 'react';
import { getBackgroundPosition, getBackgroundWidth } from '../../utils'
import { TimelineContext } from '../../context'
import styled from 'styled-components'

export const BaseDataViewPort : React.FC<any> = (props) => {

  const dataViewRef = useRef<HTMLDivElement>(null)

  const { moveTimeline, scrollLeft } = useContext(TimelineContext)

  const [ childDragging, setChildDragging ] = useState<boolean>(false) 
  
  const getContainerHeight = (rows: number) => {
    let new_height = rows > 0 ? rows * props.itemheight : 10;
    return new_height;
  }
  const onChildDrag = (dragging: boolean) => {
    setChildDragging(dragging)
  };

  const renderRows = () => {
    let result = [];
    for (let i = props.startRow; i < props.endRow + 1; i++) {
      let item = props.data[i];
      if (!item) break;
      //FIXME PAINT IN BOUNDARIES

      let new_position = DateHelper.dateToPixel(item.start, props.nowposition, props.dayWidth);
      let new_width = DateHelper.dateToPixel(item.end, props.nowposition, props.dayWidth) - new_position;
      result.push(
        <DataRow key={i} label={item.name} top={i * props.itemheight} left={20} itemheight={props.itemheight}>
          <DataTask
            item={item}
            label={item.name}
            nowposition={props.nowposition}
            dayWidth={props.dayWidth}
            color={item.color}
            left={new_position}
            width={new_width}
            height={props.itemheight}
            onChildDrag={onChildDrag}
            isSelected={props.selectedItem == item}
            onSelectItem={props.onSelectItem}
            onStartCreateLink={props.onStartCreateLink}
            onFinishCreateLink={props.onFinishCreateLink}
            onTaskChanging={props.onTaskChanging}
            onUpdateTask={props.onUpdateTask}
          >
            {' '}
          </DataTask>
        </DataRow>
      );
    }
    return result;
  };

  const doMouseDown = (e: { button: number; }) => {
    if (e.button === 0 && !childDragging) {
      props.onMouseDown(e);
    }
  };
  const doMouseMove = (e: any) => {
    props.onMouseMove(e, dataViewRef.current);
  };

  const doTouchStart = (e: any) => {
    if (!childDragging) {
      props.onTouchStart(e);
    }
  };
  const doTouchMove = (e: any) => {
    props.onTouchMove(e, dataViewRef.current);
  };

  useEffect(() => {
    if(dataViewRef.current) dataViewRef.current.scrollLeft = 0;
  }, [])

  useEffect(() => {
    if (dataViewRef.current) {
      dataViewRef.current.scrollLeft = props.scrollLeft;
      dataViewRef.current.scrollTop = props.scrollTop;
    }
  }, [props.scrollLeft, props.scrollTop])

    let height = getContainerHeight(props.data.length);
    return (
      <div
        ref={dataViewRef}
        id="timeLinedataViewPort"
        className={`${props.className} timeLine-main-data-viewPort`}
        onWheel={(evt) => {
          //
          moveTimeline?.((scrollLeft || 0) + evt.deltaX)
        }}
        onMouseDown={doMouseDown}
        onMouseMove={doMouseMove}
        onMouseUp={props.onMouseUp}
        onMouseLeave={props.onMouseLeave}
        onTouchStart={doTouchStart}
        onTouchMove={doTouchMove}
        onTouchEnd={props.onTouchEnd}
        onTouchCancel={props.onTouchCancel}
      >
        <div
          className="timeLine-main-data-container"
          style={{ 
            backgroundSize: `${(getBackgroundWidth(props.mode || 'month') * props.dayWidth) * 2}px 100%`,
            backgroundPositionX: getBackgroundPosition(props.mode || 'month'),
            height: '100%', 
            width: DATA_CONTAINER_WIDTH,
            maxWidth: DATA_CONTAINER_WIDTH }}
        >
          {renderRows()}
        </div>
      </div>
    );
  
}

export const DataViewPort = styled(BaseDataViewPort)`
.timeLine-main-data-container{
  background: linear-gradient(
    to right,
    #5d9634,
    #5d9634 50%,
    #538c2b 50%,
    #538c2b
  );
  }

`

export default sizeMe({ monitorWidth: true, monitorHeight: true })(DataViewPort);
