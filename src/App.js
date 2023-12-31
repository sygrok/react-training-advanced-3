import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  //We have added context to index.js to reach globally

  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;

// <React.Fragment> Since we use Auhcontext with 'Provider' we don't need react fragment anymore
// With the 'Provider' context can wrap jsx code and all of the components child can accesss
// We can pass functions to make context dynamic

////////////////////////////////////////

//First use of useContext without custom context

// function App() {
// const [isLoggedIn, setIsLoggedIn] = useState(false);

// useEffect(() => {
//   const storedUserLoggedIn = localStorage.getItem("isLoggedIn");

//   if (storedUserLoggedIn === "1") {
//     setIsLoggedIn(true);
//   }
// }, []);

// const loginHandler = (email, password) => {
//   localStorage.setItem("isLoggedIn", "1");
//   setIsLoggedIn(true);
// };

// const logoutHandler = () => {
//   localStorage.removeItem("isLoggedIn");
//   setIsLoggedIn(false);
// };

// return (
// <React.Fragment> Since we use Auhcontext with 'Provider' we don't need react fragment anymore
// With the 'Provider' context can wrap jsx code and all of the components child can accesss
// We can pass functions to make context dynamic

//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler, //function
//         onLogin: loginHandler, //function
//       }}
//     >
//       <MainHeader />
//       <main>
//         {!isLoggedIn && <Login />}
//         {isLoggedIn && <Home />}
//       </main>
//     </AuthContext.Provider>
//   );
// }

// export default App;
