import axios from "axios";
import { useEffect, useState } from "react";
import { coins } from "./constants";
import Pagination from "./smallProject/Pagination";
import HookUseState from "./allHooks/HookUseState";
import HookUseEffect from "./allHooks/HookUseEffect";

function App() {
  return (
    <>
      {/* <Pagination /> */}
      {/* <HookUseState /> */}
      <HookUseEffect />
    </>
  );
}

export default App;
