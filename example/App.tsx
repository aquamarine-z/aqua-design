import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Drag} from "./pages/Drag/Drag";
import {Index} from "./pages/Index/Index";
import {Glass} from "./pages/Glass/Glass";
import {ModalDialog} from "./pages/ModalDialog/ModalDialog";


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path={"*"} element={<Index/>}/>
              <Route path={"/modal_dialog"} element={<ModalDialog/>}/>
              <Route path={"/glass"} element={<Glass/>}></Route>
              <Route path={"/drag"} element={<Drag/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
