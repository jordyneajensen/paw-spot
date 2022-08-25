// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import SpotEdit from './SpotEdit'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When SpottEdit renders", () => {

  let spotEdit;
  let props = {current_user: {id: 1}} 

  beforeEach(()=>{
    spotEdit = shallow(<SpotEdit {...props}/>);
  });
  it("displays a heading", () => {
    const spotEditHeading = spotEdit.find("h1").text("Edit Pet Spot")
    expect(spotEditHeading)
  })
  it("displays 7 FormGroups ", () => {
    const spotEditFormGroup = spotEdit.find("FormGroup")
    expect(spotEditFormGroup.length).toEqual(8)
  })
  it("displays 7 labels ", () => {
    const spotEditLabel = spotEdit.find("Label")
    expect(spotEditLabel.length).toEqual(8)
  })
  it("displays 7 inputs ", () => {
    const spotEditInput = spotEdit.find("Input")
    expect(spotEditInput.length).toEqual(8)
  })
  it("displays a button ", () => {
    const spotEditButton = spotEdit.find("Button")
    expect(spotEditButton.length).toEqual(1)
  })

})