import Layout from './layout';
import Routers from './routers';
import './App.css';
import Providers from "../src/provider/index"
function App() {
  return (
    <div className="App">
      <Layout>
        <Providers >
          <Routers />
        </Providers>
      </Layout>
    </div>
  );
}

export default App;
