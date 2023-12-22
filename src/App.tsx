import React, { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { News } from "components/News/News";
import { Music } from "components/Music/Music";
import { Settings } from "components/Settings/Settings";
import { DialoguesContainer } from "components/Dialogues/DialoguesContainer";
import { UsersContainer } from "components/Users/UsersContainer";
import { ProfileContainer } from "components/Profile/ProfileContainer";
import { HeaderContainer } from "components/Header/HeaderContainer";
import { Login } from "components/Login/Login";
import { WithAuthRedirect } from "hoc/withAuthRedirect";

const App = () => {
  return (
    <div className="app-wrapper">
      <HashtagInput />
      <HeaderContainer />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={WithAuthRedirect(ProfileContainer)} />
          <Route path="/profile/:userId" element={WithAuthRedirect(ProfileContainer)} />
          <Route path="/dialogues" element={WithAuthRedirect(DialoguesContainer)} />
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

export const HashtagInput = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleInput = (event: any) => {
      const words = event.target.value.split(" ");
      const highlightedWords = words.map((word: any) => {
        if (word.startsWith("#")) {
          return <span style={{ color: "red" }}>{word} </span>;
        }
        return `${word} `;
      });
      setInputValue(highlightedWords);
    };

    const input = document.querySelector("#hashtag-input");
    if (input) {
      input.addEventListener("input", handleInput);

      return () => {
        input.removeEventListener("input", handleInput);
      };
    }
  }, []);

  return (
    <div>
      <input id="hashtag-input" type="text" value={""} />
      <p>{inputValue}</p>
    </div>
  );
};
