import { useState } from "react";
import AuthUser from "./AuthUser"
export default function Login() {
  const {http, setToken} = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmail = (e) =>{
    const eValue = e.target.value;
    setEmail(eValue);
  }
  const handlePassword = (e) =>{
    const pValue = e.target.value;
    setPassword(pValue);
  }
  const submitForm = () =>{
    http.post('/login', {email:email,password:password}).then((res)=>{
      setToken(res.data.user, res.data.access_token);
    })
  } 
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <div className="form-group">
            <label >Email address:</label>
            <input type="email" className="form-control" 
            onChange={handleEmail}
            id="email" />
          </div>
          <div className="form-group ml-3">
            <label >Password:</label>
            <input type="password" className="form-control"
            onChange={handlePassword}
            id="pwd" />
          </div>
          <button type="button" onClick={submitForm} className="btn btn-primary mt-4">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
