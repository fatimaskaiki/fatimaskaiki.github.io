import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Authors from "./Components/Authors";
import '../src/Components/style.css'

function LandingPage() {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID tokent: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "774292517382-j2m9jbdf23pkf4e8aagrqgipf3ne7uar.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      size: "large",
      'width': 500,
      'height': 1500,
      'longtitle': true,
      'border-radius': 10,
     
    });
    google.accounts.id.prompt();
  }, []);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  console.log("user", isEmpty(user));

  return (
    <>
      {!isEmpty(user) ?
      <Authors 
      user = {user}
      setUser = {setUser}/>
      :
      <div id="signInDiv"></div>
      }
   </>
  );
}

export default LandingPage;
