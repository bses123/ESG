import Logo from './Components/Logo'
import { Route,Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Stocks from './Components/Emptable';
import Emptable from './Components/Emptable';
import Emptable1 from './Components/Emptable1';
import EmpPwdTable from './Components/EmpPwdTable';
import WordPwdTable from './Components/WorPwdTable';
import RepWomTable from './Components/RepWomTable';
import Principle from './Components/Principle';
import PenAndFine from './Components/PenAndFine';
import SettleTable from './Components/SettleTable'
import CompTable from './Components/CompTable'
import ImpriTable from './Components/ImpriTable'
import PunTable from './Components/PunTable'
function App() {
  

  return (
    <>
      <Logo/>
      <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<><Emptable /><Emptable1 /><EmpPwdTable/><WordPwdTable/><RepWomTable/></>} />
      <Route path="/principle1"  element={<><Principle/><PenAndFine/><SettleTable/><CompTable/><ImpriTable/><PunTable/></>} />
    </Routes>
    </div>
    </>
  )
}

export default App
