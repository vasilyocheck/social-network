export type FriendsType = {
  id: number;
  name: string;
  pic: string;
};

export type SiderBarType = {
  friends: FriendsType[];
};

const initialState = {
  friends: [
    { id: 1, name: "Andrew", pic: "https://i.pravatar.cc/150?img=3" },
    { id: 2, name: "Sasha", pic: "https://i.pravatar.cc/150?img=68" },
    { id: 3, name: "Sveta", pic: "https://i.pravatar.cc/150?img=45" },
    { id: 4, name: "Katya", pic: "https://i.pravatar.cc/150?img=44" },
    { id: 5, name: "Masha", pic: "https://i.pravatar.cc/150?img=46" },
    { id: 6, name: "Vova", pic: "https://i.pravatar.cc/150?img=50" },
  ],
};

export const sidebarReducer = (state: SiderBarType = initialState, action: any): SiderBarType => {
  return state;
};
