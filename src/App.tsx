import Layout from './layout';
import Routers from './routers';
import './App.css';
import Providers from "../src/provider/index"
function App() {
  return (
    <div className="App">
        <Providers >
          <Routers />
        </Providers>
    </div>
  );
}

export default App;
