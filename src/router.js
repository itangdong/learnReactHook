import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';

const IndexPage = () => import('./routes/IndexPage');
const Page2 = () => import('./routes/fake/page2');
const Page3 = () => import('./routes/page3/page3');

function RouterConfig({ history, app }) {
  const promiseDynamic = dynamic(
    {
      component:IndexPage,
    }
  )
  const promiseDynamic2 = dynamic(
    {
      component:Page2,
    }
  )
  const promiseDynamic3 = dynamic(
    {
      component:Page3,
    }
  )
  return (
    <Router history={history}>
      <Switch>
        <Route path="/page3" exact component={promiseDynamic3} />
        <Route path="/page2" exact component={promiseDynamic2} />
        <Route path="/" exact component={promiseDynamic} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
