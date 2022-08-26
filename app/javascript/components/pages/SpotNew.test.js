// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import SpotNew from './SpotNew'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When SpottNew renders", () => {

  let spotNew;
  let props = {current_user: {id: 1}} 

  beforeEach(()=>{
    spotNew = shallow(<SpotNew {...props}/>);
  });
  it("displays a heading", () => {
    const spotNewHeading = spotNew.find("h1").text("New Pet Spot")
    expect(spotNewHeading)
  })
  it("displays 8 FormGroups ", () => {
    const spotNewFormGroup = spotNew.find("FormGroup")
    expect(spotNewFormGroup.length).toEqual(8)
  })
  it("displays 8 labels ", () => {
    const spotNewLabel = spotNew.find("Label")
    expect(spotNewLabel.length).toEqual(8)
  })
  it("displays 8 inputs ", () => {
    const spotNewInput = spotNew.find("Input")
    expect(spotNewInput.length).toEqual(8)
  })
  it("displays a button ", () => {
    const spotNewButton = spotNew.find("Button")
    expect(spotNewButton.length).toEqual(1)
  })

  it("displays 6 option tags", () => {
    const spotNewOption = spotNew.find("option")
    expect(spotNewOption.length).toEqual(6)
})

})


