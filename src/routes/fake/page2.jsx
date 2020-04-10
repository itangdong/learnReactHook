import React, {
  // useRef,
  useEffect,
  useReducer,
} from 'react';
import { connect } from 'dva';
import {
  Table,
} from 'antd';

import Search from './search';

function searchReducer(state, action) {
  if(!action){
    return {}
  }
  return {
    ...state,
    ...action,
  }
}

function Page2(props) {
  // 保存搜索参数
  // const reqParams = useRef();

  // useReducer
  const [paramState,dispatch] = useReducer(searchReducer, {a:1})

  useEffect(()=>{
    onSearch(paramState);
  },[paramState]);

  // // 请求任务   (这是针对useRef的hook写的逻辑)
  function onSearch(searchParams = {}) {
  //   let params = {};
  //   if (reqParams.current) {
  //     params = {
  //       ...searchParams,
  //       ...reqParams.current,
  //     }
  //   } else {
  //     reqParams.current = searchParams;
  //     params = {
  //       ...searchParams,
  //     }
  //   }
  //   props.dispatch(params);
    props.dispatch(searchParams);
  }

  // 渲染表格
  function renderTable(){
    const data = props.people.data || [];
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ];
    return (<Table
      rowSelection={{
        onChange(selectedKeys){
          console.log(selectedKeys)
        },
      }}
      columns={columns}
      dataSource={data}
    />);
  }
  return (<div>
    <Search onSearch={dispatch}/>
    {renderTable()}
  </div>)
}
const mapStateToProps = ({peopleModel: {people}}) => {
  return {people}
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch: (params) => {dispatch({type: 'peopleModel/fetch', payload:params})}}
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);

