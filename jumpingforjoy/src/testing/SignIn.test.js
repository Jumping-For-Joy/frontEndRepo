import React from 'react';
import { shallow, mount, render } from "enzyme";
import "../../enzymeConfig";
import SignIn from "../components/SignIn";

describe("test signin form", () => {
    let wrapper; 

    it("Should check the presence of an email ", () => {
        wrapper = mount(<SignIn />);
        console.log(wrapper)
        wrapper.find('input[type="text"]').simulate("change"), {
            target: { id: "email", value: "test@text.com" }
        }
    });
    expect(wrapper.prop("email")).toEqual("test@text.com");
});
