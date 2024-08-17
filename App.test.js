import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

describe("our sample test", () => {
  it("5*5 should be 25", () => {
    expect(5 * 5).toBe(25);
  })
})

describe("app", () =>{
  it("has one child", () =>{
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  })
})

describe('<App />', () => {
  it("should match snapshot", () => {
    const snap = render(<App />).toJSON();
    expect(snap).toMatchSnapshot();
  })
})