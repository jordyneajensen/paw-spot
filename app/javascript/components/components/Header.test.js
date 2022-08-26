// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";

// Imports in the component we are going to be testing.
import Header from "./Header";


//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });



// links for all users
describe("When Header renders", () => {
  let renderedHeader;

  beforeEach(() => {
    renderedHeader = shallow(<Header/>)
  })

  it("displays a Home link", () => {
    const renderedHomeRoute = renderedHeader.find("[href='/']")
    expect(renderedHomeRoute.length).toEqual(1)
  })

  it("displays an About link", () => {
    const headerAboutRoute = renderedHeader.find("[href='/spotaboutus']")
    expect(headerAboutRoute.length).toEqual(1)
  })


  it("displays a Recent Spots link", () => {
    const headerRecentSpotsRoute = renderedHeader.find("[href='/spotaboutus']")
    expect(headerRecentSpotsRoute.length).toEqual(1)
  })
})

//links for logged in users
  describe("When Header logged in renders", () => {
    let renderedHeader;
    beforeEach(() => {
      renderedHeader = shallow(<Header logged_in={true} />)
    })

    it("displays a view all spots link", () => {
      const headerViewAllSpotsRoute = renderedHeader.find("[href='/spotindex']")
      expect(headerViewAllSpotsRoute.length).toEqual(1)
    })

    it("displays a add spot link", () => {
      const headerAddSpotRoute = renderedHeader.find("[href='/spotnew']")
      expect(headerAddSpotRoute.length).toEqual(1);
    })

    it("displays a my spots link", () => {
      const headerMySpotsRoute = renderedHeader.find("[href='/myspots']")
      expect(headerMySpotsRoute.length).toEqual(1)
    })
  })
