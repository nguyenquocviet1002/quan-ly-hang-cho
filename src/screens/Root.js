import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScreenDemo from './Demo';

const ScreenRoot = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ScreenDemo />} />
            </Routes>
        </Router>
    )
}

export default ScreenRoot