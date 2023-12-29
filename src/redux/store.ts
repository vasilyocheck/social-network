import { GeneralProfileReducerType, ProfilePageType, profileReducer } from "./reducers/profile-reducer";
import { DialoguesPageType, dialoguesReducer, GeneralDialoguesReducer } from "./reducers/dialogues-reducer";
import { sidebarReducer, SiderBarType } from "./reducers/sidebar-reducer";

type StoreType = {
  profilePage: ProfilePageType;
  dialoguesPage: DialoguesPageType;
  sidebar: SiderBarType;
};

export type StoreState = {
  _state: StoreType;
  _callSubscriber: (state: StoreType) => void;
  subscribe: (observer: (state: StoreType) => void) => void;
  getState: () => StoreType;
  dispatch: (action: GeneralActionType) => void;
};

export type GeneralActionType = GeneralDialoguesReducer | GeneralProfileReducerType;

export const store: StoreState = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, postText: "Post 1 message goes here", likesCount: 15 },
        { id: 2, postText: `It's a lorem ipsum message for post`, likesCount: 23 },
      ],
      newPostText: "it-kamasutra",
      profile: null,
      profileStatus: "",
      isLoading: false,
    },
    dialoguesPage: {
      dialogues: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Igor" },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "What about your IT-Kamasutra?" },
        { id: 3, message: "Yoh!" },
        { id: 4, message: "Yo!" },
        { id: 5, message: "Yohhhh!" },
      ],
      newMessage: "kamasutra-message",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Andrew", pic: "https://i.pravatar.cc/150?img=3" },
        { id: 2, name: "Sasha", pic: "https://i.pravatar.cc/150?img=68" },
        { id: 3, name: "Sveta", pic: "https://i.pravatar.cc/150?img=45" },
        { id: 4, name: "Katya", pic: "https://i.pravatar.cc/150?img=44" },
        { id: 5, name: "Masha", pic: "https://i.pravatar.cc/150?img=46" },
        { id: 6, name: "Vova", pic: "https://i.pravatar.cc/150?img=50" },
      ],
    },
  },
  _callSubscriber(state: StoreType) {
    console.log("state is changed", state);
  },
  getState() {
    return this._state;
  },
  subscribe(observer: (state: StoreType) => void) {
    this._callSubscriber = observer;
  },
  dispatch(action: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};
