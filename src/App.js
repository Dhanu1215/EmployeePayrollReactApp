import './App.css';
import Payrolldashboard from './components/dashboared/payrolldashboard';

import Payrollform from './components/payrollForm/payrollForm';

function App() {

  //To display message 
  return (
    <div className="App">
        <Payrollform/>
        <Payrolldashboard/>
    </div>
  );
}

export default App;
