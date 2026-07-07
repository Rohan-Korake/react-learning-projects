import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-white">
            React Context API
          </h1>

          <Login />

          <div className="my-6 border-t border-slate-700"></div>

          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
