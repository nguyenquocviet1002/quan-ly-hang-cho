import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const sidebar = clsx(styles.sidebar);
  const logo = clsx(styles.logo);
  const nav = clsx(styles.nav);
  const navItem = clsx(styles.navItem);
  const active = clsx(styles.active);
  return (
    <div className={sidebar}>
      <div className={logo}>
        <img width="180" height="80" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
      </div>
      <ul className={nav}>
        <li className={`${navItem}`}>
          <NavLink to="booking-list" className={({ isActive }) => (isActive ? active : '')}>
            <i className="icon-doc-text"></i>
            Danh sách đặt lịch
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink to="customer-list" className={({ isActive }) => (isActive ? active : '')}>
            <i className="icon-user"></i>
            Danh sách khách hàng
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink to="clinic-list" className={({ isActive }) => (isActive ? active : '')}>
            <i className="icon-home"></i>
            Danh sách phòng khám
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink to="booking" className={({ isActive }) => (isActive ? active : '')}>
            <i className="icon-calendar"></i>
            Đặt lịch khám
          </NavLink>
        </li>
        <li className={navItem}>
          <NavLink to="onduty-list" className={({ isActive }) => (isActive ? active : '')}>
            <i className="icon-calendar"></i>
            Lịch trực
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
