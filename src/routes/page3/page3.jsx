import React, { useReducer } from 'react';


import ChildParent from './parent';
import PagePrivate from './state';

const initState = {
  num: 0,
}

// 分发state
const appDispatch = (state, action) => {
  switch (action.type) {
    case 1:
      return {...state, num: state.num + 1};
    case 2:
      return {...state, num: state.num + 2};
    default:
      return state;
  }
}

const AppPrivate = props => {
  const [state, dispatch] = useReducer(appDispatch, initState);
  return (
    <PagePrivate.Provider value={{state, dispatch}}>
      {props.children}
    </PagePrivate.Provider>
  );
}
function Page3() {
  return (<AppPrivate>
    <ChildParent>
    </ChildParent>
  </AppPrivate>);
}

export default Page3;
