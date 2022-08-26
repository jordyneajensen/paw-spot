import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtectedSpotIndex from './ProtectedSpotIndex'
Enzyme.configure({ adapter: new Adapter() })

describe("When ProtectedSpotIndex renders", () => {
    
      
    let protectedSpotIndex;
    const props = {
        spots : [
            {
                id:1,
                name:"buzz",
                street:"123 random",
                city: "san diego",
                state: "ca",
                zip: "12345",
                image:"img",
                category:"bar",
                user_id:1
            }
            
        ],
        current_user: {id: 1},
        logged_in: true
    }
  
    beforeEach(() => {
      protectedSpotIndex = shallow(<ProtectedSpotIndex {...props} />);
    });
  
    it("has an h1 tag", () =>{
        const protectedSpotIndexHeading = protectedSpotIndex.find("h1")
        expect(protectedSpotIndexHeading.length).toEqual(1)
    })

    it("displays a spot", () => {
        const protectedSpotIndexRow = protectedSpotIndex.find("Row")
        expect(protectedSpotIndexRow.length).toEqual(1)
    })

    it("displays a div", () => {
        const protectedSpotIndexDiv = protectedSpotIndex.find("div")
        expect(protectedSpotIndexDiv.length).toEqual(2)
    })

    it("displays a Card", () => {
        const protectedSpotIndexCard = protectedSpotIndex.find("Card")
        expect(protectedSpotIndexCard.length).toEqual(1)
    })

    it("displays a CardImg", () => {
        const protectedSpotIndexImg = protectedSpotIndex.find("CardImg")
        expect(protectedSpotIndexImg.length).toEqual(1)
    })

    it("displays a CardBody", () => {
        const protectedSpotIndexBody = protectedSpotIndex.find("CardBody")
        expect(protectedSpotIndexBody.length).toEqual(1)
    })

    it("displays a CardTitle", () => {
        const protectedSpotIndexTitle = protectedSpotIndex.find("CardTitle")
        expect(protectedSpotIndexTitle.length).toEqual(1)
    })

    it("displays a CardSubtitle", () => {
        const protectedSpotIndexSubtitle = protectedSpotIndex.find("CardSubtitle")
        expect(protectedSpotIndexSubtitle.length).toEqual(1)
    })

    it("displays a button", () => {
        const protectedSpotIndexButton = protectedSpotIndex.find("Button")
        expect(protectedSpotIndexButton.length).toEqual(1)
    })


    
})