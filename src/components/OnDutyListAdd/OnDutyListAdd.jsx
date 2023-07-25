import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import styles from './OnDutyListAdd.module.scss';

function OnDutyListAdd() {
  const onDutyList = clsx(styles.onDutyList);
  const onDutyBox = clsx(styles.onDutyBox);
  const onDutyAdd = clsx(styles.onDutyAdd);
  const onDutyAddForm = clsx(styles.onDutyAddForm);
  const onDutyTitle = clsx(styles.onDutyTitle);
  const iconAction = clsx(styles.iconAction);
  return (
    <div className="container">
      <div className={onDutyBox}>
        <div className={onDutyList}>
          <div className={onDutyTitle}>
            <h2>Danh sách lịch trực</h2>
            <div>
              <Button submitAdd>Thêm</Button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>STT</td>
                  <td>Bác sĩ</td>
                  <td>Phòng khám</td>
                  <td>Chi nhánh</td>
                  <td>Thời gian trực</td>
                  <td>Hành động</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Huy Hùng</td>
                  <td>Mắt</td>
                  <td>Hà Nội</td>
                  <td>8h-10h(26/05/2023)</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Huy Hùng</td>
                  <td>Mắt</td>
                  <td>Hà Nội</td>
                  <td>8h-10h(26/05/2023)</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Huy Hùng</td>
                  <td>Mắt</td>
                  <td>Hà Nội</td>
                  <td>8h-10h(26/05/2023)</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Huy Hùng</td>
                  <td>Mắt</td>
                  <td>Hà Nội</td>
                  <td>8h-10h(26/05/2023)</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Huy Hùng</td>
                  <td>Mắt</td>
                  <td>Hà Nội</td>
                  <td>8h-10h(26/05/2023)</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={onDutyAdd}>
          <h2>Thêm lịch trực</h2>
          <div className={onDutyAddForm}>
            <label htmlFor="">Bác sĩ</label>
            <input type="text" />
            <label htmlFor="">Phòng khám</label>
            <input type="text" />
            <label htmlFor="">Chi nhánh</label>
            <select name="" id="">
              <option value="">Hà Nội</option>
              <option value="">Hồ Chí Minh</option>
            </select>
            <label htmlFor="">Thời gian trực</label>
            <input type="time" />
            <label htmlFor="">Ngày trực</label>
            <input type="date" />
          </div>
          <Button submitAdd>Thêm</Button>
        </div>
      </div>
    </div>
  );
}

export default OnDutyListAdd;
