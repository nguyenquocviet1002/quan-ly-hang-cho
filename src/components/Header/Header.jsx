import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  const classes = clsx(styles.header);
  const menu = clsx(styles.menu);
  const user = clsx(styles.user);
  const btnCheck = clsx(styles.btnCheck);
  return (
    <div className={classes}>
      <div className={btnCheck}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img width="180" height="80" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
      <div className={menu}>
        <p>
          <Link to="booking-list">Danh sách đặt lịch</Link>
        </p>

        <p>
          <Link to="customer-list">Danh sách sắp xếp khách hàng</Link>
        </p>

        <p>
          <Link>
            Đặt lịch <i className="icon-angle-down"></i>
            <ul>
              <li>
                <Link to="onduty">Đặt lịch trực</Link>
              </li>
              <li>
                <Link to="booking">Đặt lịch khám</Link>
              </li>
            </ul>
          </Link>
        </p>

        <p>
          <Link to="clinic-list">Danh sách phòng khám</Link>
        </p>

        <p>
          <Link to="onduty-list">Lịch trực</Link>
        </p>
      </div>
      <div className={user}>
        <i className="icon icon-user"></i>
        <p>
          Nguyen Hoang Son <i className="icon-angle-down"></i>
        </p>
      </div>
    </div>
  );
}

export default Header;
