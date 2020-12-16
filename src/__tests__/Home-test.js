import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../Components/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <h1 style={{ textAlign: 'center' }}>Math Magicians</h1>
        <p style={{ width: '75%', margin: '0 auto' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
        </p>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
