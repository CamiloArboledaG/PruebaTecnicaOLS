import Sesion from "./components/Sesion";
import Cuerpo from "./components/Cuerpo";
import Barra from "./components/Barra";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import EndBar from "./components/EndBar";

//hacemos uso de Material UI, React Router DOM.

function App() {

  return (
    //Se usan Router Switch y Route para crear las rutas y poder de que los componentes sean más dinámicos
    <Router>
      <div className="App">
        <Switch>
          <Route path="/usuarios">
            {/* Barra es todo el contenido de la página, endbar es el crédito al final de página que muestra los créditos de olsoftware */}
            <Barra />
            <EndBar/>
          </Route>
          <Route path="/">
            {/* Sesion se basa en la imagen de fondo y tiene como hijo al cuerpo que se basa en los textos y el componente para poder
            iniciar sesión, esto lo hago es para dejar la imagen que se encuentra en sesion como un fondo de pantalla. */}
            <Sesion>
              <Cuerpo></Cuerpo>
            </Sesion>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
