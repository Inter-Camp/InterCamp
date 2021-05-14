import React from "react";
import "./user-page.styles.scss";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebas.utils";
import { userMenu } from "../../data/index";

import { Route, Switch } from 'react-router-dom';


import { CustomButton, BackToAllButton } from "../../components/buttons";

const Dashboard = () => {
  return (
    <div className="flex">
      <h3>Dashboard</h3>
      <BackToAllButton />
      <Link className="link-to-all" to={"/favorite"}>
        <CustomButton color="primary">Go To Favorite</CustomButton>
      </Link>
      <CustomButton
        color="primary"
        onClick={() => {
          auth.signOut();
        }}
      >
        SIGN OUT
        </CustomButton>
    </div>
  );
}
const Bookmarks = () => {
  return (
    <div className="flex">
      <h3>Bookmarks</h3>
      <p>Stay Connected, More Coming Soon</p>
    </div>
  );
}
const Trending = () => {
  return (
    <div className="flex">
      <h3>Trending</h3>
      <p>Stay Connected, More Coming Soon</p>
    </div>
  );
}
const Statistics = () => {
  return (
    <div className="flex">
      <h3>Statistics</h3>
      <p>Stay Connected, More Coming Soon</p>
    </div>
  );
}

const UserPage = ({ favQuestions }) => {
  return (

    <div className="user-page">

      <div className="nav-items">
        {userMenu.menuLabels.map((item) => {
          return (
            <div className="nav-lists" key={item.id}><NavLink to={item.link} activeStyle={{
              fontWeight: "bold",
              color: "rgba(245, 123, 0, 0.8)"
            }}>{item.text}</NavLink></div>

          );
        })}
      </div>
      <div className="nav-container flex">
        <div>
          <Switch>
            {/*  // All 3 this components below would be rendered when in a homepage */}
            <Route exact path="/user" component={Dashboard} />

            <Route path="/user/dashboard" component={Dashboard} />
            <Route path="/user/bookmarks" component={Bookmarks} />
            <Route path="/user/trending" component={Trending} />
            <Route path="/user/statistics" component={Statistics} />
          </Switch>
        </div>

      </div>

    </div>
  );
};

export default UserPage;
