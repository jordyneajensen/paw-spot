// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";

// Imports in the component we are going to be testing.
import Header from "./Header";
import { Nav, NavItem } from 'reactstrap'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });


// links for all users
describe("When Header renders", () => {
  let renderedHeader;

  beforeEach(() => {
    renderedHeader = shallow(<Header />);
  });

  it("displays a Home link", () => {
    const renderedHomeRoute = renderedHeader.find("[path='/']")

    expect(renderedHomeRoute.length).toEqual(1);
  });
})

//   it("displays an About link", () => {
//     const headerAbout = renderedHeader.find("About");

//     expect(headerAbout.length).toEqual(1);
//   });

//   it("displays a Recent Spots link", () => {
//     const headerRecentSpots = renderedHeader.find("Recent Spots");

//     expect(headerRecentSpots.length).toEqual(1);
//   });

// // links for logged out users
//   describe("when header logged out renders", () => {
//     let renderedHeader;
//     beforeEach(() => {
//       renderedHeader = shallow(<Header logged_in={false} />);
//     });

//     it("displays a sign in link", () => {
//       const headerSignIn = renderedHeader.find("Sign In");
//       expect(headerSignIn.length).toEqual(1);
//     });

//     it("displays a sign up link", () => {
//       const headerSignUp = renderedHeader.find("Sign Up");
//       expect(headerSignUp.length).toEqual(1);
//     });
//   });

// //links for logged in users
//   describe("When Header logged in renders", () => {
//     let renderedHeader;
//     beforeEach(() => {
//       renderedHeader = shallow(<Header logged_in={true} />);
//     });

//     it("displays a view all spots link", () => {
//       const headerViewAllSpots = renderedHeader.find("View All Spots");
//       expect(headerViewAllSpots.length).toEqual(1);
//     });

//     it("displays a add spot link", () => {
//       const headerAddSpot = renderedHeader.find("Add Spot");
//       expect(headerAddSpot.length).toEqual(1);
//     });

//     it("displays a sign out link", () => {
//       const headerSignOut = renderedHeader.find("Sign Out");
//       expect(headerSignOut.length).toEqual(1);
//     });

//     it("displays a my spots link", () => {
//       const headerMySpots = renderedHeader.find("MySpots");
//       expect(headerMySpots.length).toEqual(1);
//     });
//   });
// });
