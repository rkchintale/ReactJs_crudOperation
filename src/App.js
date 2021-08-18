import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import GetAllEmployee from './component/GetAllEmployee';
import AddEmployee from './component/AddEmployee';
import { BrowserRouter as Router, Route, Switch,Link,NavLink} from 'react-router-dom';
import Notfound from './component/Notfound';
import EditEmp from './component/EditEmp';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Switch>
          <Route exact component={Home} path="/"/>
          <Route exact component={GetAllEmployee} path="/AllEmp"/>
          <Route exact component={AddEmployee} path="/AddEmp"/>
          <Route exact component={EditEmp} path="/editemp/:id"/>
          <Route exact component={Notfound} path=""/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;