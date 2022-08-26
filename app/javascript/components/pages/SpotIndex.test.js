// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import SpotIndex from './SpotIndex'


//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("when index logged in renders", () => {
    
    let renderedIndex;
    beforeEach(() => {
        renderedIndex = shallow(<SpotIndex logged_in = {true}/>);

    });

  it("displays one h1 tag", () => {
      const IndexH1 = renderedIndex.find("h1")
      expect(IndexH1.length).toEqual(1)
  })

  it("displays a spot ", () => {
    const indexRow = renderedIndex.find("Row")
    expect(indexRow.length).toEqual(1)
    })

})

describe("when index logged out renders", () => {
    
    let renderedIndex;
    beforeEach(() => {
        renderedIndex = shallow(<SpotIndex logged_in = {false}/>);

    });

  it("displays one h1 tag", () => {
      const IndexH1 = renderedIndex.find("h1")
      expect(IndexH1.length).toEqual(1)
  })

  it("displays two h3 tag", () => {
    const IndexH1 = renderedIndex.find("h3")
    expect(IndexH1.length).toEqual(2)
})

  it("displays a spot ", () => {
    const indexRow = renderedIndex.find("Row")
    expect(indexRow.length).toEqual(1)
    })

})


describe("when index renders", () => {

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
        ]
    }
    
    let renderedIndex;
    beforeEach(() => {
        renderedIndex = shallow(<SpotIndex {...props}/>);

    });
it("displays a div", () => {
    const spotIndexDiv = renderedIndex.find("div")
    expect(spotIndexDiv.length).toEqual(1)
})

it("displays a Card", () => {
    const spotIndexCard = renderedIndex.find("Card")
    expect(spotIndexCard.length).toEqual(1)
})

it("displays a CardImg", () => {
    const spotIndexImg = renderedIndex.find("CardImg")
    expect(spotIndexImg.length).toEqual(1)
})

it("displays a CardBody", () => {
    const spotIndexBody = renderedIndex.find("CardBody")
    expect(spotIndexBody.length).toEqual(1)
})

it("displays a CardTitle", () => {
    const spotIndexTitle = renderedIndex.find("CardTitle")
    expect(spotIndexTitle.length).toEqual(1)
})

it("displays a CardSubtitle", () => {
    const spotIndexSubtitle = renderedIndex.find("CardSubtitle")
    expect(spotIndexSubtitle.length).toEqual(1)
})

it("displays a button", () => {
    const spotIndexButton = renderedIndex.find("Button")
    expect(spotIndexButton.length).toEqual(1)
})
 
})


   