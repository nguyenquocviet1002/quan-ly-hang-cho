import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import styles from './OnDuty.module.scss';

function OnDuty() {
  const formBooking = clsx(styles.formBooking);
  const formInput = clsx(styles.formInput);
  const formSelect = clsx(styles.formSelect);
  const formSelectItem = clsx(styles.formSelectItem);
  return (
    <div className="container">
      <div className={formBooking}>
        <h2>Đặt lịch trực</h2>
        <div className={formInput}>
          <label htmlFor="">Họ và tên</label>
          <input type="text" />
        </div>
        <div className={formSelect}>
          <div className={formSelectItem}>
            <label htmlFor="">Chi nhánh</label>
            <select name="" id="">
              <option value="">Hà Nội</option>
              <option value="">Hồ Chí Minh</option>
            </select>
          </div>
          <div className={formSelectItem}>
            <label htmlFor="">Ngày trực</label>
            <input type="date" />
          </div>
        </div>
        <div className={formSelect}>
          <div className={formSelectItem}>
            <label htmlFor="">Phòng khám</label>
            <select name="" id="">
              <option value="">Phòng khám 1</option>
              <option value="">Phòng khám 2</option>
              <option value="">Phòng khám 3</option>
              <option value="">Phòng khám 4</option>
            </select>
          </div>
          <div className={formSelectItem}>
            <label htmlFor="">Giờ trực</label>
            <input type="time" />
          </div>
        </div>
        <Button submit>Gửi</Button>
      </div>
    </div>
  );
}

export default OnDuty;
