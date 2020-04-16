import React, { useContext } from 'react';
import { Button } from 'antd';
import PagePrivate from '../state';
function Page3() {
  const {state, dispatch} = useContext(PagePrivate);
  return (<div>
    <Button onClick={()=>{dispatch({type:2})}}>child2：{state.num}</Button>
  </div>);
}

export default Page3;
