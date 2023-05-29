import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Search from './Components/Search';
import DataList from './Components/DataList';


function App() {
  return (
    <div className="App">
      <Search/>
      <DataList/>
    </div>
  );
}

export default App;

