import UserContext from "../utils/UserContext";
import Contact from "./Contact";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       {/* <User /> */}
//       <UserClass name={"Tushar from Classes"} location={"YTL from class"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log(" parent constructor");
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("interval");
    // }, 1000);
    // console.log("parent componentDidMount");
  }

  componentWillUnmount() {
    // invoked afetr the component is removed from DOM
    // clearInterval(this.timer);
  }

  render() {
    // console.log(" parent render");
    return (
      <div>
        <h1>About Us Class component Page</h1>
        {/* <User /> */}
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"First"} location={"YTL from class"} />
      </div>
    );
  }
}

export default About;
