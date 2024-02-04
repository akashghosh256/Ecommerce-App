import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify"
const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAdress] = useState("");

// avoid refresh of page on submit
const handleSubmit = (e) => {
e.preventDefault();
console.log(name,email,password,phone,address);
toast.success('registered suceessfully')  // sends floating notification
}


  return (
    <>
      <Layout>
        <form className="Register"  onSubmit={handleSubmit}>
            <h1>Register Here</h1>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={ (e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Name"
              required
          
            />
          </div>
          <div className="mb-3">
           
            <input
              type="email"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-3">
           
            <input
              type="password"
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Password"
              required
          
            />
          </div>
          <div className="mb-3">
           
            <input
              type="text"
              value={phone}
              onChange={ (e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
           placeholder="Enter phone"
           required

            />
          </div>
          <div className="mb-3">
         
            <input
              type="text"
              value={address}
              onChange={ (e) => setAdress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Address"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Layout>
    </>
  );
};

export default Register;
