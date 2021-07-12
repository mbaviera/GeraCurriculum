import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Inicial from "./src/components/Inicial";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        hideNavBar={true}
        key="inicial"
        component={Inicial}
        title=""
        initial={true} 
      /> 
    </Scene>
  </Router>
);
export default Routes;