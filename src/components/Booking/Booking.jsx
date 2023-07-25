import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import styles from './Booking.module.scss';

function Booking() {
  const formBooking = clsx(styles.formBooking);
  const formInput = clsx(styles.formInput);
  const formSelect = clsx(styles.formSelect);
  const formSelectItem = clsx(styles.formSelectItem);
  return (
    <div className="container">
      <div className={formBooking}>
        <h2>Đặt lịch cho khách hàng</h2>
        <div className={formInput}>
          <label htmlFor="">Họ và tên</label>
          <input type="text" />
        </div>
        <div className={formSelect}>
          <div className={formSelectItem}>
            <label htmlFor="">Dịch vụ</label>
            <select name="" id="">
              <option value="">Nâng mũi</option>
              <option value="">Nâng ngực</option>
              <option value="">Cắt mí</option>
              <option value="">Hút mỡ</option>
            </select>
          </div>
          <div className={formSelectItem}>
            <label htmlFor="">Ngày khám</label>
            <input type="date" />
          </div>
        </div>
        <div className={formSelect}>
          <div className={formSelectItem}>
            <label htmlFor="">Bác sĩ</label>
            <select name="" id="">
              <option value="">Bác sĩ 1</option>
              <option value="">Bác sĩ 2</option>
              <option value="">Bác sĩ 3</option>
              <option value="">Bác sĩ 4</option>
            </select>
          </div>
          <div className={formSelectItem}>
            <label htmlFor="">Giờ khám</label>
            <input type="time" />
          </div>
        </div>
        <Button submit>Lưu</Button>
      </div>
    </div>
  );
}

export default Booking;
