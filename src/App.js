import React, { useContext, useEffect, useState } from "react";
const UserContext = React.createContext();

function App() {
  const [userState, setUserState] = useState({
    Namık: false,
    Eda: true,
    Suzan: true,
    Engin: true,
    Samet: true,
  });

  // KODUNUZ BURAYA GELECEK
  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser =
        Object.keys(userState)[
          Math.floor(Math.random() * Object.keys(userState).length)
        ];
      setUserState((prevState) => ({
        ...prevState,
        [randomUser]: !prevState[randomUser],
      }));
    }, 2000);
    return clearInterval(interval);
  }, [userState]);
  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <UserList />
    </UserContext.Provider>
  );
}

const UserList = () => {
  // KODUNUZ BURAYA GELECEK
  const { userState } = useContext(UserContext);
  return (
    <div className="max-w-xs mx-auto mt-8">
      {Object.entries(userState).map(([username, online]) => (
        <User key={username} username={username} online={online} />
      ))}
    </div>
  );
};
const User = ({ username, online }) => {
  return (
    <div className="flex items-center mb-2">
      <span className="mr-2">{username}</span>{" "}
      {online ? (
        <span className="text-green-500">🟢</span>
      ) : (
        <span className="text-red-500">🔴</span>
      )}
    </div>
  );
};

export default App;
