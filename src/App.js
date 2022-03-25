import './App.css';
import {TopPart} from './components/TopPart'
// import {Cards} from './components/Cards'
import {DetailsMap} from './components/DetailsMap'

function App() {
  return (
    <div className="App">
       <TopPart heading="React App Architecture" text="For large commercial projects" />
       {/* <Cards /> */}
       <DetailsMap />
    </div>
  );
}

export default App;
