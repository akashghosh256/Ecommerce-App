import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            

            // <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
            //   <Link to={`/category/${c.slug}`} className="btn btn-primary">
            //     {c.name}
            //   </Link>
            // </div>
          


            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}  >
            <Link to={`/category/${c.slug}`} className="card-link" style={{ textDecoration: 'none' }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <p className="card-text">Click to view category</p>
                </div>
              </div>
            </Link>
          </div>
          

          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;