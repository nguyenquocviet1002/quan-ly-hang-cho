import React from 'react';
import clsx from 'clsx';
import styles from './BookingList.module.scss';

function BookingList() {
  const bookingList = clsx(styles.bookingList);
  const icon = clsx(styles.icon);
  const text = clsx(styles.text);
  return (
    <div className="container">
      <div className={bookingList}>
        <div className="table__box1">
          <h2>Danh sách đặt lịch khám từ ERP và KH trực tiếp</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>STT</td>
                  <td>Họ và tên</td>
                  <td>Dịch vụ khám</td>
                  <td>Bác sĩ khám</td>
                  <td>Giờ khám</td>
                  <td>Ngày khám</td>
                  <td>Nguồn</td>
                  <td>Hành động</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Thúy Kiều</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Hệ thống</td>
                  <td>
                    <span className={icon}>
                      <i className="icon-plus-squared-alt"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Thúy Vân</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Trực tiếp</td>
                  <td>
                    <span className={icon}>
                      <i className="icon-plus-squared-alt"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Thúy Vân</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Trực tiếp</td>
                  <td>
                    <span className={icon}>
                      <i className="icon-plus-squared-alt"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Thúy Vân</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Trực tiếp</td>
                  <td>
                    <span className={icon}>
                      <i className="icon-plus-squared-alt"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Thúy Vân</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Trực tiếp</td>
                  <td>
                    <span className={icon}>
                      <i className="icon-plus-squared-alt"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="table__box2">
          <h2>Danh sách hàng chờ theo ngày</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>STT</td>
                  <td>Họ và tên</td>
                  <td>Dịch vụ khám</td>
                  <td>Bác sĩ khám</td>
                  <td>Giờ khám</td>
                  <td>Ngày khám</td>
                  <td>Nguồn</td>
                  <td>Hành động</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Thúy Kiều</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Hệ thống</td>
                  <td>
                    <p className={text}>Thăm khám</p>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Thúy Vân</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Trực tiếp</td>
                  <td>
                    <p className={text}>Thăm khám</p>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Thúy Vân</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Trực tiếp</td>
                  <td>
                    <p className={text}>Thăm khám</p>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Thúy Vân</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Trực tiếp</td>
                  <td>
                    <p className={text}>Thăm khám</p>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Thúy Vân</td>
                  <td>Nâng mũi</td>
                  <td>Hoàng Khoa</td>
                  <td>8h-10h</td>
                  <td>22/05/2023</td>
                  <td>Trực tiếp</td>
                  <td>
                    <p className={text}>Thăm khám</p>
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

export default BookingList;
