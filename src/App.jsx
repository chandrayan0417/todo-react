import Create from "./components/Create";
import Read from "./components/Read";
import { useState } from "react";
function App() {
  const [todo, settodo] = useState([]);

  return (
    <div className=" p-10 w-screen h-screen flex bg-[#211951] text-[#F0F3FF]">
      <Create todo={todo} settodo={settodo} />
      <Read todo={todo} settodo={settodo}/>
    </div>
  );
}

export default App;
