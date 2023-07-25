import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScreenDemo from './Demo';
import GlobalStyles from '@/components/GlobalStyles';
import Login from './Login';
import Regis from './Register';
import Dashboard from './Dashboard';
import MedicalList from './MedicalList';

const ScreenRoot = () => {
    return (
        <GlobalStyles>
            <Router>
                <Routes>
                    <Route path='/' element={<ScreenDemo />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Regis />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/medical-list' element={<MedicalList />} />
                </Routes>
            </Router>
        </GlobalStyles>
    )
}

export default ScreenRoot;