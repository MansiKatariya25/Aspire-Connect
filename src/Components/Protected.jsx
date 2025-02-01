import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./Config/axios";
import Loading from "./Common/Loading";


function Protected({ component: Component }) {
  const [verified, setVerify] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const verifyUser = async () => {
      try {
        const response = await api.get("/users/auth/verify-user");
        if (response.status === 200) {
          setVerify(true);
        }
      } catch (error) {
        console.error('Authentication error:', error);
        if (error.response?.status === 403 || error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [navigate, token]);

  if (loading) {
    return <Loading/>;
  }

  if (!verified) {
    return navigate("/login");
  }

  return <Component />;
}

export default Protected;