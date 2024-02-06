import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
    <div className="text-center">
      <div className="list-group">
      <h4>Admin Panel Options</h4>
        <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">
         Create category
        </NavLink>
        <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
         create product
        </NavLink>
        <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">
        users
        </NavLink>
      </div>
      </div>
    </>

  );
};

export default AdminMenu;
