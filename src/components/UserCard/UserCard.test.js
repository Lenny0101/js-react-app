import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UserCard, { sum } from "./index";

describe("testing PostCard", () => {
  const wrapper = shallow(<UserCard />);

  //   it("sums two numbers", () => {
  //     expect(sum(3, 5)).toEqual(8);
  //   });
  //   it("renders properly", () => {
  //     expect(wrapper.length).toEqual(1);
  //   });
  it("renders a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
