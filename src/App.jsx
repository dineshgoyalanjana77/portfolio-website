
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from './pages/Userlist';
import AddEdituser from './pages/AddEdituser';
import Mainlayout from './layout/Mainlayout';

function App() {
 

  return (
    <>
      
<BrowserRouter>

<Routes>
<Route element={<Mainlayout />}>
<Route path="/" element={<Userlist/>} />

<Route path="/add" element={<AddEdituser/>} />

<Route path="/edit/:id" element={<AddEdituser/>} />
</Route>
</Routes>
</BrowserRouter>

    </>
  )
}

export default App





