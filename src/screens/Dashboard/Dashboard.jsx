import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
