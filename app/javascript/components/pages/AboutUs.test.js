import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'
Enzyme.configure({ adapter: new Adapter() })

describe("When AboutUs renders", () => {
    let aboutUsRender
    beforeEach(() => {
      aboutUsRender = shallow(<AboutUs />)
    })
      it("displays a heading", () => {
        const aboutUsHeading = aboutUsRender.find("h1").text()
        expect(aboutUsHeading).toEqual("The Creative Minds Behind Paw Spot")
      })
      it("displays a card from reactstrap per post", () => {
        const aboutUsCard  = aboutUsRender.find("Card")
        expect(aboutUsCard.length).toEqual(3)
      })
      it("displays a card title from reactstrap per post", () => {
        const aboutUsCard  = aboutUsRender.find("CardTitle")
        expect(aboutUsCard.length).toEqual(3)
      })
      it("displays a card subtitle from reactstrap per post", () => {
        const aboutUsCard  = aboutUsRender.find("CardSubtitle")
        expect(aboutUsCard.length).toEqual(3)
      })
      it("displays a card text from reactstrap per post", () => {
        const aboutUsCard  = aboutUsRender.find("CardText")
        expect(aboutUsCard.length).toEqual(3)
      })
    })