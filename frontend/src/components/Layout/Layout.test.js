/* eslint-env mocha */

import React from "react";
import { expect } from "chai";
import { render } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "../App";
import Layout from "./Layout";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};

describe("Layout", () => {
  it("renders children correctly", () => {
    const store = mockStore(initialState);

    const wrapper = render(
      <App context={{ insertCss: () => {}, store }}>
        <Layout>
          <div className="child" />
        </Layout>
      </App>,
    );
    expect(wrapper.find("div.child").length).to.eq(1);
  });
});
