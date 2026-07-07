import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Logged User Profile
      </h2>

      {user ? (
        <div className="space-y-2 text-slate-300">
          <p>
            <span className="font-semibold text-white">Username:</span>{" "}
            {user.username}
          </p>

          <p>
            <span className="font-semibold text-white">Password:</span>{" "}
            {user.password}
          </p>
        </div>
      ) : (
        <p className="italic text-slate-500">
          Username will appear here after login.
        </p>
      )}
    </div>
  );
};

export default Profile;
