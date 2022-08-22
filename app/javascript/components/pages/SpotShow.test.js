import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SpotShow from './SpotShow'
Enzyme.configure({ adapter: new Adapter() })





describe("When SpotShow renders", () => {
    const spot = {
      user_id: 1,
      name: "Buzz Coffee",
      street: "123 other way",
      city: "San Diego",
      state: "CA",
      zip: "22400",
      description: "pet friendly spot one",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
      }
    
    let renderedSpotShow;
    let props = {current_user: {id: 1}} 
    beforeEach(() => {
      renderedSpotShow = shallow(<SpotShow spot={spot} {...props}/>);
    });
  
    it("displays one Card", () => {
      const spotShowHeading = renderedSpotShow.find("Card")
      expect(spotShowHeading.length).toEqual(1)
    })
  
    it("has one anchor tag", () =>{
      const spotShowAnchorTag = renderedSpotShow.find("a")
      expect(spotShowAnchorTag.length).toEqual(3)
    })
  })
  
  