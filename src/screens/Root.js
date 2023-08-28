import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScreenDemo from './Demo';
import GlobalStyles from '@/components/GlobalStyles';
import Login from './Login';
import Regis from './Register';
import Dashboard from './Dashboard';
import MedicalList from './MedicalList';
import BookingList from '@/components/BookingList';
import CustomerSortedList from '@/components/CustomerSortedList';
import Booking from '@/components/Booking';
import OnDuty from '@/components/OnDuty';
import ClinicList from '@/components/ClinicList';
import ClinicListAdd from '@/components/ClinicListAdd';
import ClinicListEdit from '@/components/ClinicListEdit';
import ClinicListDelete from '@/components/ClinicListDelete';
import OnDutyList from '@/components/OnDutyList';
import OnDutyListAdd from '@/components/OnDutyListAdd';
import OnDutyListEdit from '@/components/OnDutyListEdit';
import OnDutyListDelete from '@/components/OnDutyListDelete';

const ScreenRoot = () => {
    return (
        <GlobalStyles>
            <Router>
                <Routes>
                    <Route path='/' element={<ScreenDemo />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Regis />} />
                    <Route path='/dashboard' element={<Dashboard />}>
                        <Route path='booking-list' element={<BookingList />}></Route>
                        <Route path='customer-list' element={<CustomerSortedList />}></Route>
                        <Route path='booking' element={<Booking />}></Route>
                        <Route path='onduty' element={<OnDuty />}></Route>
                        <Route path='clinic-list' element={<ClinicList />}></Route>
                        <Route path='clinic-list-add' element={<ClinicListAdd />}></Route>
                        <Route path='clinic-list-edit' element={<ClinicListEdit />}></Route>
                        <Route path='clinic-list-delete' element={<ClinicListDelete />}></Route>
                        <Route path='onduty-list' element={<OnDutyList />}></Route>
                        <Route path='onduty-list-add' element={<OnDutyListAdd />}></Route>
                        <Route path='onduty-list-edit' element={<OnDutyListEdit />}></Route>
                        <Route path='onduty-list-delete' element={<OnDutyListDelete />}></Route>
                    </Route>
                    <Route path='/medical-list' element={<MedicalList />} />
                </Routes>
            </Router>
        </GlobalStyles>
    )
}

export default ScreenRoot;