import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Empty} from 'antd';

import styles from './IndexPage.css';

function IndexPage(props) {
  const [typeData, setTypeData] = useState({type:1});

  useEffect(()=>{
    props.dispatch(typeData);
  },[typeData]);

  if(!props.exampleData){
    return <Empty />
  }
  return (
    <ul className={styles.normal}>
      {props.exampleData.map((item, index) => <li key={index}>{item.name}</li>)}
      <li onClick={() => setTypeData({type:2})}>变化</li>
    </ul>
  );
}

IndexPage.propTypes = {
};
const mapStateToProps = ({ example: { exampleData }}) => {
  return { exampleData };
}
const mapDispatchToProps = (dispatch) => {
  return {dispatch:(params) => dispatch({type:'example/fetch', payload: params})}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
