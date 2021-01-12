import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import logo from "../../assets/dev assets/simpleTree.png";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Navigation";
import SampleTree from "../../assets/images/tempTreeSprite.png";
const url =
  process.env.NODE_ENV === "production"
    ? "https://bonsai-one.vercel.app"
    : "http://localhost:3000";

function Welcome(props) {
  const auth = useAuth();

  function loginNow() {
    const email = prompt("Enter your email");
    auth.login(email);
  }

  return (
    <div className="Welcome">
      <div className="welcomeContainer">
        <div className="treeLogo"></div>
        {/* {<img className="treeLogo" src={logo} alt={logo} /> */}
        <h1>Bonsai</h1>
      </div>
      {/*<button className="loginBtn" onClick={loginNow}>
        Login
  </button>*/}
      <div className="MainBody">
        <div className="VirtTrees">
          these virtual trees
          <br /> don't need sun or water,
          <br /> they rely on your
          <br /> productivity to survive.
        </div>

        <div className="bottomStuff">
          <div className="LeftSide">
            <div className="HOw">
              <h1>How does it work?</h1>
            </div>
            <img className="SampleTree" src={SampleTree} alt={SampleTree} />
            <h1 className="Begin">Ready to begin?</h1>
            <button className="loginBtn" onClick={loginNow}>
              Login
            </button>
          </div>
          <div className="RightSide">
            <div className="infoContainer">
              1. A tree can represent any project you’re working towards! New
              years resolutions, Hobbies, Homework, Habits you’re trying to
              break, Anything that you want to work on regularly. <br />
              2. Bonsai trees have LIFE! As you work on your goals they will
              grow. But if you neglect them they will wither. Don’t let your
              trees die, as you will lose all of the points that they have
              accumulated. <br />
              3. Track your time and see how much your productivity has improved
              since you began using Bonsai!
            </div>
          </div>
        </div>
      </div>
      {/*todo: MOAR DIVS*/}
    </div>
  );
}

// function Login() {

// 	if (auth.loading || auth.loggingIn || auth.loggingOut) {
// 		return "Loading..........";
// 	}

// 	return <div>What's up</div>;
// }

export default Welcome;
