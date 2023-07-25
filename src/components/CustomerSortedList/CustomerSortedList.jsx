import React from 'react';
import clsx from 'clsx';
import styles from './CustomerSortedList.module.scss';

function CustomerSortedList() {
  const customerList = clsx(styles.customerList);
  const iconAction = clsx(styles.iconAction);
  return (
    <div className="container">
      <div className={customerList}>
        <div className="table__box1">
          <h2>Danh sách khách hàng đặt khám</h2>
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
                    <div className={iconAction}>
                      <i className="icon-user-plus"></i>
                      <i className="icon-ok-circled2"></i>
                      <i className="icon-cancel-circled2"></i>
                    </div>
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
                    <div className={iconAction}>
                      <i className="icon-user-plus"></i>
                      <i className="icon-ok-circled2"></i>
                      <i className="icon-cancel-circled2"></i>
                    </div>
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
                    <div className={iconAction}>
                      <i className="icon-user-plus"></i>
                      <i className="icon-ok-circled2"></i>
                      <i className="icon-cancel-circled2"></i>
                    </div>
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
                    <div className={iconAction}>
                      <i className="icon-user-plus"></i>
                      <i className="icon-ok-circled2"></i>
                      <i className="icon-cancel-circled2"></i>
                    </div>
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
                    <div className={iconAction}>
                      <i className="icon-user-plus"></i>
                      <i className="icon-ok-circled2"></i>
                      <i className="icon-cancel-circled2"></i>
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

export default CustomerSortedList;
