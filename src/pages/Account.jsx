import React from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();
  return (
    <div className="flex items-center justify-center w-full h-full absolute top-0 left-0">
      <div className="max-w-[300px] h-[300px] bg-black/75 text-white border border-white py-16 px-8 my-16">
        <h3 className="underline">Username</h3>
        <p className="mb-4 pb-2">{user?.email}</p>
        <h3 className="underline">Account Created</h3>
        <p className="mb-4 pb-2">{user?.metadata?.creationTime}</p>
      </div>
    </div>
  );
};

export default Account;
