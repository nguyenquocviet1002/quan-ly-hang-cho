import React from 'react';
import Header from '../../components/Header';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Dashboard.module.scss';

function Dashboard() {
  const dashboardMain = clsx(styles.dashboardMain);
  const boxRight = clsx(styles.boxRight);
  return (
    <>
      <div className={dashboardMain}>
        <Sidebar />
        <div className={boxRight}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
