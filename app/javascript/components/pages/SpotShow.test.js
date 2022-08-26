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
      renderedSpotShow = shallow(<SpotShow {...props} spot={spot} />);

    });
  
    it("displays one Card", () => {
      const spotShowHeading = renderedSpotShow.find("Card")
      expect(spotShowHeading.length).toEqual(1)
    })
  
    it("has three anchor tag", () =>{
      const spotShowAnchorTag = renderedSpotShow.find("a")
      expect(spotShowAnchorTag.length).toEqual(3)
    })

    it("has three buttons tag", () =>{
      const spotShowButton = renderedSpotShow.find("Button")
      expect(spotShowButton.length).toEqual(3)
    })

    it("has one CardImg ", () =>{
      const spotShowCardImg = renderedSpotShow.find("CardImg")
      expect(spotShowCardImg.length).toEqual(1)
    })

    it("has one CardTitle tag", () =>{
      const spotShowCardTitle = renderedSpotShow.find("CardTitle")
      expect(spotShowCardTitle.length).toEqual(1)
    })

    it("has one CardText tag", () =>{
      const spotShowCardText = renderedSpotShow.find("CardText")
      expect(spotShowCardText.length).toEqual(1)
    })

    it("has three div tags", () =>{
      const spotShowDiv = renderedSpotShow.find("div")
      expect(spotShowDiv.length).toEqual(3)
    })

    it("has one LoadScript tag", () =>{
      const spotShowLoadScript = renderedSpotShow.find("LoadScript")
      expect(spotShowLoadScript.length).toEqual(1)
    })

    it("has one GoogleMap tag", () =>{
      const spotShowGoogleMap = renderedSpotShow.find("GoogleMap")
      expect(spotShowGoogleMap.length).toEqual(1)
    })

    it("has one Marker tag", () =>{
      const spotShowMarker = renderedSpotShow.find("Marker")
      expect(spotShowMarker.length).toEqual(2)
    })
  })
  
  