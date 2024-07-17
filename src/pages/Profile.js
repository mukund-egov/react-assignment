import React, { useContext, useEffect } from "react";
import { userContext, credentailContext } from "../context/context";

function Profile() {
  const { user, setuser } = useContext(userContext);
  const { credentail, setValue } = useContext(credentailContext);

  useEffect(() => {
    setuser(JSON.parse(sessionStorage.getItem("user")));
    console.log(user);
  }, [user]);

  if (!user)
    return (
      <h1 className="p-20 text-3xl font-sans font-bold justify-center text-center">
        Fill out the form to fetch profile
      </h1>
    );

  return (
    <div className="profile sm:w-2/3 w-full sm:p-6 justify-center">
      <h1 className="text-3xl font-sans font-bold p-4 m-4">Profile</h1>
      <p>
        <h3 className="bg-slate-50 shadow-md p-3 mb-5">
          <strong>Name</strong>: {user.name}
        </h3>
        <h3 className="bg-slate-50 shadow-md p-3 mb-5">
          <strong>Email</strong>: {user.email}
        </h3>
        <h3 className="bg-slate-50 shadow-md p-3 mb-5">
          <strong>Phone Number</strong>: {user.phonenumber}{" "}
        </h3>
        <h3 className="bg-slate-50 shadow-md p-3 mb-5">
          <strong>Age</strong>: {user.age ? user.age : "NA"}{" "}
        </h3>
        <h3 className="bg-slate-50 shadow-md p-3 mb-5">
          <strong>Gender</strong>: {user.gender}{" "}
        </h3>
        <h3 className="bg-slate-50 shadow-md p-3 mb-5">
          <strong>Hobbies: </strong>
          {user.hobbies &&
            user.hobbies.map((el) => <span className="m-2">{el}</span>)}
          {!user.hobbies && <span>NA</span>}
        </h3>
        {/* <h3 className="bg-slate-50 shadow-md p-3 mb-3">
          <strong className="bg-slate-50 shadow-md p-3 mb-3">Country</strong>: {user.country}{" "}
        </h3> */}
      </p>
    </div>
  );
}

export default Profile;
