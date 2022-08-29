import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
Enzyme.configure({ adapter: new Adapter() })



describe("When NotFound renders", () => {

  let notFound;

  beforeEach(()=>{
    notFound = shallow(<NotFound />)
  })

  it("displays a heading", () => {
    const notFoundHeading = notFound.find("h1")
    expect(notFoundHeading.text()).toEqual("404")
  })
  it("displays a p tag", () => {
    const notFoundParagraph = notFound.find("p")
    expect(notFoundParagraph.text()).toEqual("Hey, lets head back and find a place we can hang out at!")
  })
  it("displays a NavLink", () => {
      const notFoundNavLink = notFound.find("NavLink")
      expect(notFoundNavLink.length).toEqual(1)
  })
  it("displays a button", () => {
      const notFoundButton = notFound.find("Button")
      expect(notFoundButton.length).toEqual(1)
  })
  it("displays an img", () => {
      const notFoundImg = notFound.find("img")
      expect(notFoundImg.length).toEqual(1)
  })
})