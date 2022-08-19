import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtectedSpotIndex from './ProtectedSpotIndex'
Enzyme.configure({ adapter: new Adapter() })

describe("When ProtectedSpotIndex renders", () => {
    
      
    let protectedSpotIndex;
    let props = {current_user: {id: 1}, logged_in: true}
  
    beforeEach(() => {
      protectedSpotIndex = shallow(<ProtectedSpotIndex {...props}  />);
    });
  
    it("has an h1 tag", () =>{
        const protectedSpotIndexHeading = protectedSpotIndex.find("h1")
        expect(protectedSpotIndexHeading.length).toEqual(1)
    })

    it("displays a spot", () => {
        const protectedSpotIndexRow = protectedSpotIndex.find("Row")
        expect(protectedSpotIndexRow.length).toEqual(1)
    })
})