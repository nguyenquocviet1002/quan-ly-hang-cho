import React from 'react';
import Header from '../../components/Header';
import BookingList from '../../components/BookingList';
import CustomerSortedList from '../../components/CustomerSortedList';
import Booking from '../../components/Booking';
import OnDuty from '../../components/OnDuty';
import ClinicList from '../../components/ClinicList';
import ClinicListAdd from '../../components/ClinicListAdd';
import ClinicListEdit from '../../components/ClinicListEdit';
import ClinicListDelete from '../../components/ClinicListDelete';
import OnDutyList from '../../components/OnDutyList';
import OnDutyListAdd from '../../components/OnDutyListAdd';
import OnDutyListEdit from '../../components/OnDutyListEdit';
import OnDutyListDelete from '../../components/OnDutyListDelete';

function Dashboard() {
  return (
    <>
      <Header />
      {/* <BookingList /> */}
      {/* <CustomerSortedList /> */}
      {/* <Booking /> */}
      <OnDuty />
      {/* <ClinicList /> */}
      {/* <ClinicListAdd /> */}
      {/* <ClinicListEdit /> */}
      {/* <ClinicListDelete /> */}
      {/* <OnDutyList /> */}
      {/* <OnDutyListAdd /> */}
      {/* <OnDutyListEdit /> */}
      {/* <OnDutyListDelete /> */}
    </>
  );
}

export default Dashboard;
