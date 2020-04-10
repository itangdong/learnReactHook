import {
  fetchPeople,
} from '../services/example.js';

export default {

  namespace: 'peopleModel',

  state: {
    people:{},  // 人员
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const {
        sex,
      } = payload;
      const result = yield call(fetchPeople,{sex});
      yield put({ type: 'save', payload: result });
    },
  },

  reducers: {
    save(state, action) {
      const people = action.payload;
      return { ...state, people };
    },
  },

};
