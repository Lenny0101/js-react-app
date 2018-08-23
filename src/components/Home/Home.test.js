import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "./index";

describe("Home", () => {
  const props = {
    validateToken: jest.fn(),
    loginReducer: {
      isLogged: true
    }
  };
  const wrapper = shallow(<Home {...props} />);

  it("renders properly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("changes state after calling handleOpenModal", () => {
    expect(wrapper.state().isModalOpen).toEqual(false);
    wrapper.instance().handleOpenModal();
    expect(wrapper.state().isModalOpen).toEqual(true);
  });
  it("changes state after calling handleCloseModal", () => {
    expect(wrapper.state().isModalOpen).toEqual(true);
    wrapper.instance().handleCloseModal();
    expect(wrapper.state().isModalOpen).toEqual(false);
  });
});
