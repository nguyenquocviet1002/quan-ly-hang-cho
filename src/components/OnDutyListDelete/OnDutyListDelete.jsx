import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import styles from './OnDutyListDelete.module.scss';

function OnDutyList() {
  const onDutyListMain = clsx(styles.onDutyListMain);
  const onDutyListBox = clsx(styles.onDutyListBox);
  const onDutyListBtn = clsx(styles.onDutyListBtn);
  return (
    <div className={onDutyListMain}>
      <div className="container">
        <div className={onDutyListBox}>
          <p>Bạn có chắc chắn muốn xóa lịch trực này không?</p>
          <div className={onDutyListBtn}>
            <Button btnYes>Có</Button>
            <Button btnNo>Không</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnDutyList;
