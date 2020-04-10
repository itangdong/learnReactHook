// import request from '../utils/request';

export function fetch(params) {
  // return request('/api/users');
  if(params.type === 1){
    return [{name:'ai7'},{name:'apple'}];
  }
  if(params.type === 2){
    return [{name:'zhangwei'},{name:'dali'}];
  }
}
export function fetchPeople(params) {
  // return request('/api/users');
  if(params.sex === 'man'){
    return {
      count:4,
      data:[
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Disabled User',
          age: 99,
          address: 'Sidney No. 1 Lake Park',
        },
      ],
    };
  }
  if(params.sex === 'women'){
    return {
      count:5,
      data:[
        {
          key: '1',
          name: 'women1',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'women2',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'women3',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'women4',
          age: 99,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '5',
          name: 'women5',
          age: 199,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '6',
          name: 'women6',
          age: 199,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '7',
          name: 'women7',
          age: 199,
          address: 'Sidney No. 1 Lake Park',
        },
      ],
    };
  }
  return {
    count:11,
    data:[
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '5',
        name: 'women1',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '6',
        name: 'women2',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '7',
        name: 'women3',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '8',
        name: 'women4',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '9',
        name: 'women5',
        age: 199,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '10',
        name: 'women6',
        age: 199,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '11',
        name: 'women7',
        age: 199,
        address: 'Sidney No. 1 Lake Park',
      },
    ],
  };
}
