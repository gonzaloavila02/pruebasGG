import './App.css';
import {PrimerComponente} from "./example_components/PrimerComponente";
import {SegundoComponente} from "./example_components/SegundoComponente";
import {MainHeader} from "./headerComponents/MainHeader";
import {FooterMain} from "./footerComponents/FooterMain";

function App() {
  return (
      <div className="App">
          <header className="headerStyle">
              <MainHeader/>
          </header>
          <div id="main">
              <PrimerComponente/>
              <SegundoComponente/>
          </div>
          <div className="container">
              <FooterMain/>
          </div>
      </div>
  );
}

export default App;
