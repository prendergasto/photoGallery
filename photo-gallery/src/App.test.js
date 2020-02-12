import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer";
test('renders App.js correctly', () => {
  const tree = renderer
  .create(<App />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
// import { render } from '@testing-library/react';
import renderer from "react-test-renderer";
import App from './App';
import Header from './header';
test('renders App.js correctly', () => {
  const tree = renderer
  .create(<Header />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
// import { render } from '@testing-library/react';
import renderer from "react-test-renderer";
import App from './App';
import Header from './header';
import ImageItem from './imageItem';
test('renders App.js correctly', () => {
  const tree = renderer
  .create(<ImageItem />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});