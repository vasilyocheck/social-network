import React, { lazy } from "react";
import "./App.css";
import { NavBar } from "components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { News } from "components/News/News";
import { Music } from "components/Music/Music";
import { Settings } from "components/Settings/Settings";
import { UsersContainer } from "components/Users/UsersContainer";
import { HeaderContainer } from "components/Header/HeaderContainer";
import { Login } from "components/Login/Login";
import { WithAuthRedirect } from "hoc/withAuthRedirect";
import { WithSuspense } from "hoc/withSuspense";

const DialoguesContainer = lazy(() =>
  import("./components/Dialogues/DialoguesContainer").then(({ DialoguesContainer }) => ({
    default: DialoguesContainer,
  })),
);

const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer").then(({ ProfileContainer }) => ({
    default: ProfileContainer,
  })),
);

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={WithAuthRedirect(WithSuspense(ProfileContainer))} />
          <Route path="/profile/:userId" element={WithAuthRedirect(WithSuspense(ProfileContainer))} />
          <Route path="/dialogues" element={WithAuthRedirect(WithSuspense(DialoguesContainer))} />
          <Route path="/users" element={WithAuthRedirect(UsersContainer)} />
          <Route path="/news" element={WithAuthRedirect(News)} />
          <Route path="/music" element={WithAuthRedirect(Music)} />
          <Route path="/settings" element={WithAuthRedirect(Settings)} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
