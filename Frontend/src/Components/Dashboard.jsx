import AuthUser from "../Components/AuthUser";
import { useState ,useEffect} from "react";
export default function Dashboard() {
  const { user, http } = AuthUser();
  const [userDetails, setUserDetails] = useState();
 
  useEffect(() => {
    http.post("/me").then((res) => {    
      setUserDetails(res.data);
      console.log(userDetails);
    });
    
  },[http,userDetails]);

  function renderElement() {
    if (userDetails) {
      return (
        <div>
          <h4>Name</h4>
          <p>{userDetails.name}</p>
          <h4>Email</h4>
          <p>{userDetails.email}</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>Loading....</p>
        </div>
      )
    }
  }
  return <div>{renderElement()}</div>;
}
