import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ component: Component }) {
  const [verified, setVerify] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect to login if no token is found
      return;
    }

    const verifyUser = async () => {
      try {
        const response = await axios.get("/users/auth/verify-user", {
          headers: {
           'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

          },
        });
        if (response) {
          setVerify(true);
        }
      } catch (error) {
        console.log(error);
        // navigate("/login");
      }
    };

    verifyUser();
  }, [navigate, token]);

  if (!verified) {
    return <div>Loading...</div>;
  }

  return <Component />;
}

export default Protected;
