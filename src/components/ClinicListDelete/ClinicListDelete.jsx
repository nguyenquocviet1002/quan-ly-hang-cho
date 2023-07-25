import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import styles from './ClinicListDelete.module.scss';

function ClinicList() {
  const clinicListMain = clsx(styles.clinicListMain);
  const clinicListBox = clsx(styles.clinicListBox);
  const clinicListBtn = clsx(styles.clinicListBtn);
  return (
    <div className={clinicListMain}>
      <div className="container">
        <div className={clinicListBox}>
          <p>Bạn có chắc chắn muốn xóa phòng khám này không?</p>
          <div className={clinicListBtn}>
            <Button btnYes>Có</Button>
            <Button btnNo>Không</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicList;
