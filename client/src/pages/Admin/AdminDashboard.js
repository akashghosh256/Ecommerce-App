import React from "react";
//import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
        <h1>admin dash</h1>
    </Layout>
  );
};

export default AdminDashboard;