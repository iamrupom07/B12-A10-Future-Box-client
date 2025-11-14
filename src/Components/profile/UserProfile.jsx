import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { user, setUser, updateUser } = use(AuthContext);

  const updateProfle = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUser({ displayName: name, photoURL: photo }).then(() => {
      setUser(user);
      toast.success("Profile Updated");
    });
  };

  // console.log(user?.photoURL);
  return (
    <div className="flex justify-center my-12">
      <div className="card bg-base-100 w-96 shadow-sm">
        <h2 className="card-title">My Profile</h2>
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="rounded-full w-34"
          />
        </figure>
        <div className="card-body  text-center">
          <div className="text-left">
            <p className=" text-xl">Name: {user?.displayName}</p>
            <p className=" text-xl">Email: {user?.email}</p>
          </div>
          <h2 className="card-title">Update Your Profile</h2>
          <form onSubmit={updateProfle}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Name"
                name="name"
              />{" "}
              <label className="label">Photo URL</label>
              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="Photo URL"
                name="photo"
              />{" "}
              <button className="btn btn-neutral mt-4 w-full">
                Update Now
              </button>{" "}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
