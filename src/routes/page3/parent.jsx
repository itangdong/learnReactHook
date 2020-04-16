import React, { useContext } from 'react';
import { Button } from 'antd';
import PagePrivate from './state';
import Page3Child from './child/page3Child';
import Page3Child2 from './child/page3Child2';
function Parent() {
  const {state} = useContext(PagePrivate);
  return (<div>
    <Button>childParent：{state.num}</Button>
    <Page3Child/>
    <Page3Child2/>
  </div>);
}

export default Parent;
