import React from 'react';
import clsx from 'clsx';
import styles from './MedicalExaminationList.module.scss';

function MedicalExaminationList() {
  const medicalListBox = clsx(styles.medicalListBox);
  const medicalListBoxLeft = clsx(styles.medicalListBoxLeft);
  const medicalListBoxRight = clsx(styles.medicalListBoxRight);
  const medicalListBoxMid = clsx(styles.medicalListBoxMid);
  const medicalNumb = clsx(styles.medicalNumb);
  const medicalName = clsx(styles.medicalName);
  const medicalService = clsx(styles.medicalService);
  return (
    <div className={medicalListBox}>
      <div className={medicalListBoxLeft}>
        <h2>Đang thăm khám</h2>
        <p className={medicalNumb}>001</p>
        <p className={medicalName}>Thúy Kiều</p>
        <p className={medicalService}>Dịch vụ khám: Nâng mũi</p>
      </div>
      <div className={medicalListBoxMid}></div>
      <div className={medicalListBoxRight}>
        <h2>Danh sách chờ khám</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>STT</td>
                <td>Họ tên</td>
                <td>Dịch vụ khám</td>
                <td>Phòng khám</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Thúy Vân</td>
                <td>Nâng mũi</td>
                <td>Mũi</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Thúy Vân</td>
                <td>Nâng mũi</td>
                <td>Mũi</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Thúy Vân</td>
                <td>Nâng mũi</td>
                <td>Mũi</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Thúy Vân</td>
                <td>Nâng mũi</td>
                <td>Mũi</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Thúy Vân</td>
                <td>Nâng mũi</td>
                <td>Mũi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MedicalExaminationList;
