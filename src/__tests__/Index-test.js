import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../Components/App';
import Home from '../Components/Home';
import Quote from '../Components/Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/App" exact component={App} />
          <Route path="/Quote" exact component={Quote} />
        </Switch>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
