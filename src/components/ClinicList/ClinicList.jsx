import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import styles from './ClinicList.module.scss';

function ClinicList() {
  const clinicList = clsx(styles.clinicList);
  const clinicBox = clsx(styles.clinicBox);
  const clinicTitle = clsx(styles.clinicTitle);
  const iconAction = clsx(styles.iconAction);
  return (
    <div className="container">
      <div className={clinicBox}>
        <div className={clinicList}>
          <div className={clinicTitle}>
            <h2>Danh sách phòng khám</h2>
            <div>
              <Button submitAdd>Thêm</Button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>STT</td>
                  <td>Phòng khám</td>
                  <td>Số giường/ ghế</td>
                  <td>Chi nhánh</td>
                  <td>Bác sĩ</td>
                  <td>Hành động</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mắt</td>
                  <td>5</td>
                  <td>Hà Nội</td>
                  <td>Trần Quang Khải</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mũi</td>
                  <td>5</td>
                  <td>Hà Nội</td>
                  <td>Trần Quang Khải</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mắt</td>
                  <td>8</td>
                  <td>Hồ Chí Minh</td>
                  <td>Trần Quang Khải</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Mắt</td>
                  <td>5</td>
                  <td>Hồ Chí Minh</td>
                  <td>Trần Quang Khải</td>
                  <td>
                    <div className={iconAction}>
                      <i className="icon-edit"></i>
                      <i className="icon-trash-empty"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mắt</td>
                  <td>3</td>
                  <td>Hà Nội</td>
                  <td>Trần Quang Khải</td>
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
      </div>
    </div>
  );
}

export default ClinicList;
