import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    // console.log(this.props.name + " child constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + " child componentDidMount");
    const userData = await fetch("https://api.github.com/users/akshaymarch7");
    const data = await userData.json();
    this.setState({
      userInfo: data,
    });
  }
  render() {
    // console.log(this.props.name + " child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: abcd@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

// https://api.github.com/users/tmusale
