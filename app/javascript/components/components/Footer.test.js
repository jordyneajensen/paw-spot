import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";
Enzyme.configure({ adapter: new Adapter() });



describe("When Footer renders", () => {
    let renderedFooter;
  
    beforeEach(() => {
      renderedFooter = shallow(<Footer/>)
    })
  
    it("displays a p tag", () => {
      const renderedFooterParagraph = renderedFooter.find("p")
      expect(renderedFooterParagraph.length).toEqual(1)
    })
  })