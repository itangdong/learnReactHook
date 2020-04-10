import {
  fetch,
} from '../services/example.js';

export default {

  namespace: 'example',

  state: {
    exampleData:[],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const {
        type,
      } = payload;
      const result = yield call(fetch,{type});
      yield put({ type: 'save', payload: result });
    },
  },

  reducers: {
    save(state, action) {
      const exampleData = action.payload;
      return { ...state, exampleData };
    },
  },

};
