import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_Paths } from '../../utils/apiPaths';

const Home = () => {
    useUserAuth();

    const navigate = useNavigate();

    const [DashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(false)

    const fetchDashboard = async () => {
      if(loading) return;

      setLoading(true);

      try {
        const response = await axiosInstance.get(
          `${API_Paths.DASHBOARD.GET_DATA}`
        );

        if(response.data){
          setDashboardData(response.data);
        }
      } catch(error){
        console.log("Something went wrong. Please try again.", error)
      } finally{
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchDashboard();
      return () => {};
    }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'>
        
      </div>
    </DashboardLayout>
  )
}

export default Home