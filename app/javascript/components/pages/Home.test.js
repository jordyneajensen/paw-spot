// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'


//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
    
    
    
    let renderedHome;
    
    beforeEach(() => {
        renderedHome = shallow(<Home />);
    });
    
    it("displays a heading", () => {
    const homeHeading = renderedHome.find("h1")

    expect(homeHeading.length).toEqual(1)
  })


  it("displays 2 buttons", () => {
    
    const homeButton = renderedHome.find("a")
    
    expect(homeButton.length).toEqual(2)
  })

  it("displays a Carousel", () => {
    
    const homeCarousel = renderedHome.find("UncontrolledCarousel")
    
    expect(homeCarousel.length).toEqual(1)
  })

  describe("when home logged out renders", () => {

    let renderedHome;
    beforeEach(() => {
        renderedHome = shallow(<Home logged_in = {false}/>);

    });

  it("displays one p tag", () => {
      const homeParagraphs = renderedHome.find("p")
      expect(homeParagraphs.length).toEqual(1)
  })
})

  describe("When Home logged in renders", () => {

      let renderedHome;
      beforeEach(() => {
          renderedHome = shallow(<Home logged_in = {true}/>);

      });

    it("displays two p tags", () => {
        const homeParagraphs = renderedHome.find("p")
        expect(homeParagraphs.length).toEqual(2)
    })

    it("displays one img tag", () => {
        const homeImg = renderedHome.find("img")
        expect(homeImg.length).toEqual(1)
    })
  })

})





