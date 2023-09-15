import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';

function Header() {
  const classes = clsx(styles.header);
  const user = clsx(styles.user);
  const btnCheck = clsx(styles.btnCheck);
  const user__dropdown = clsx(styles.user__dropdown);
  const user__itemMenu = clsx(styles.user__itemMenu);
  return (
    <div className={classes}>
      <div className={btnCheck}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={user}>
        <i className="icon icon-user"></i>
        <p>
          Nguyen Hoang Son <i className="icon-angle-down"></i>
        </p>
        <div className={user__dropdown}>
          <ul>
            <li className={user__itemMenu}>
              <i className="icon-user-4"></i>
              Hồ sơ cá nhân
            </li>
            <li className={user__itemMenu}>
              <i className="icon-lock"></i>
              Đổi mật khẩu
            </li>
            <li className={user__itemMenu}>
              <i className="icon-logout"></i>
              Đăng xuất
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
