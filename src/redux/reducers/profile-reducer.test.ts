import {
  addPostAC,
  ProfilePageType,
  profileReducer,
  setProfileStatusAC,
  setUserProfileAC,
} from "redux/reducers/profile-reducer";
import { UserProfileType } from "api/profile-api";

export {};

let startState: ProfilePageType = {
  posts: [
    { id: 1, postText: "Post 1 text goes here", likesCount: 10 },
    { id: 2, postText: `Post 2 text goes here`, likesCount: 22 },
  ],
  newPostText: "it-kamasutra",
  profile: null,
  profileStatus: "",
};

beforeEach(() => {
  startState = {
    posts: [
      { id: 1, postText: "Post 1 text goes here", likesCount: 10 },
      { id: 2, postText: `Post 2 text goes here`, likesCount: 22 },
    ],
    newPostText: "it-kamasutra",
    profile: null,
    profileStatus: "",
  };
});

test("should add new post", () => {
  const newPostText = "Post 3 text goes here...";

  const endState = profileReducer(startState, addPostAC(newPostText));

  expect(endState.posts.length).toBe(3);
});

test("added post text should have proper text", () => {
  const newPostText = "Post 3 text goes here...";

  const endState = profileReducer(startState, addPostAC(newPostText));

  expect(endState.posts[0].postText).toBe("Post 3 text goes here...");
});

test("added post id should have proper id number", () => {
  const newPostText = "Post 3 text goes here...";

  const endState = profileReducer(startState, addPostAC(newPostText));

  expect(endState.posts[0].id).toBe(3);
});

const newUserProfile: UserProfileType = {
  aboutMe: "",
  contacts: {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: null,
    mainLink: null,
  },
  lookingForAJob: true,
  lookingForAJobDescription: "need some job",
  fullName: "John",
  userId: 226,
  photos: {
    small: "",
    large: "",
  },
};

test("user profile id should be correct", () => {
  const endState = profileReducer(startState, setUserProfileAC(newUserProfile));

  expect(endState.profile?.userId).toBe(226);
});

test("user name should be correct", () => {
  const endState = profileReducer(startState, setUserProfileAC(newUserProfile));

  expect(endState.profile?.fullName).toBe("John");
});

test("user facebook contact should be correct", () => {
  const endState = profileReducer(startState, setUserProfileAC(newUserProfile));

  expect(endState.profile?.contacts.facebook).toBe(null);
});

test("user profile status should be correctly set", () => {
  const newStatus = "exhausted now, enjoying my vacation";

  const endState = profileReducer(startState, setProfileStatusAC(newStatus));

  expect(endState.profileStatus).toBe("exhausted now, enjoying my vacation");
});
