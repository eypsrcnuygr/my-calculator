import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../Components/Navbar';
import Display from '../Components/Display';
import ButtonPanel from '../Components/ButtonPanel';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <div className="app">
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <Display />
        <ButtonPanel />
      </div>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
