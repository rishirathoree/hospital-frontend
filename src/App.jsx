import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import UnapprovedProfessionals from './Pages/UnapprovedProfessionals'
import UnapprovedPatients from './Pages/UnapprovedPatients'
import Professionals from './Pages/Professionals'
import Patients from './Pages/Patients'
import AddNew from './AddNew'
import Hospital from './Pages/Hospital'
import Notification from './Pages/Notification'
import Account from './Account'
import LoginPage from './Pages/LoginPage'
import ForgotPassword from './Pages/ForgotPassword'
import Otpverification from './Pages/Otp-verification'



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<UnapprovedProfessionals />} />
      <Route path="/Unapproved-Professional" element={<UnapprovedProfessionals />} />
      <Route path="/Unapproved-Patient" element={<UnapprovedPatients />} />
      <Route path="/Professionals" element={<Professionals />} />
      <Route path="/Patients" element={<Patients />} />
      <Route path="/Add-New" element={<AddNew />} />
      <Route path="/Hospitals" element={<Hospital />} />
      <Route path="/Hospitals" element={<Hospital />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/my-account" element={<Account />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<Otpverification />} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
