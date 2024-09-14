"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const page = () => {
  const [cameras, setCameras] = useState([]);
  const { data: session } = useSession();
  const BACKEND_URL = "http://localhost:4000";
  useEffect(() => {
    const fetchCameras = async () => {
      const response = await axios.get(`${BACKEND_URL}/all/camera`, {
        data: session?.user.id,
      });
      setCameras(response.data);
      console.log(response.data);
    };
    fetchCameras();
  }, []);

  return <div>User Dashboard</div>;
};

export default page;
