import React from "react";

import AdminPanel from "./AdminPanel";
import PostsPagination from "../components/PostsPagination";

import person from "../assets/images/person.jpg";

const Users = () => {
  return (
    <div className="admin_users">
      <h1 className="text-[70px] font-[700] text-center mb-10">Users</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-[332px]">
          <AdminPanel />
        </div>
        <div className="admin_users-wrapper h-[1050px] w-[974px] p-6 rounded-[50px]">
          {[
            {
              img: person,
              name: "User Name",
              last: "User Last Name",
              email: "user@gamil.com",
            },
            {
              img: person,
              name: "User Name",
              last: "User Last Name",
              email: "user@gamil.com",
            },
            {
              img: person,
              name: "User Name",
              last: "User Last Name",
              email: "user@gamil.com",
            },
            {
              img: person,
              name: "User Name",
              last: "User Last Name",
              email: "user@gamil.com",
            },
            {
              img: person,
              name: "User Name",
              last: "User Last Name",
              email: "user@gamil.com",
            },
          ].map((box, i) => {
            return (
              <div
                className="admin_users-wrapper_box flex items-center mt-[80px]"
                key={i}
              >
                <div className="w-1/6">
                  <img
                    src={box.img}
                    alt="Person"
                    className="w-[6.25rem] rounded-full"
                  />
                </div>
                <div className="w-3/6 text-[20px] lg:text-[25px] ml-4">
                  <h3>{box.name}</h3>
                  <h3>{box.last}</h3>
                </div>
                <div className="w-2/6 text-[20px] lg:text-[25px]">
                  <h3>{box.email}</h3>
                </div>
              </div>
            );
          })}
          <div className="-mt-40">
            <PostsPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
