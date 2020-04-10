import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';

const IndexPage = () => import('./routes/IndexPage');
const Page2 = () => import('./routes/fake/page2');

function RouterConfig({ history, app }) {
  const promiseDynamic = dynamic(
    {
      // app,
      component:IndexPage,
    }
  )
  const promiseDynamic2 = dynamic(
    {
      // app,
      component:Page2,
    }
  )
  return (
    <Router history={history}>
      <Switch>
        <Route path="/page2" exact component={promiseDynamic2} />
        <Route path="/" exact component={promiseDynamic} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
