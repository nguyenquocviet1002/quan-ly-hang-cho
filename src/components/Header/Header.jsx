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
        <Link>
          <p>Danh sách đặt lịch</p>
        </Link>
        <Link>
          <p>Danh sách sắp xếp khách hàng</p>
        </Link>
        <Link>
          <p>
            Đặt lịch <i className="icon-angle-down"></i>
            <ul>
              <Link>
                <li>Đặt lịch trực</li>
              </Link>
              <Link>
                <li>Đặt lịch khám</li>
              </Link>
            </ul>
          </p>
        </Link>
        <Link>
          <p>Danh sách phòng khám</p>
        </Link>
        <Link>
          <p>Lịch trực</p>
        </Link>
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
