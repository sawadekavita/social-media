import './App.css';
import  {createBrowserRouter,RouterProvider,Route,Outlet} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar/RightBar';
import Profile from './pages/Profile/Profile';
import { dark } from '@mui/material/styles/createPalette';


function App() {
const Layout=()=>{
 <div className='theme-dark'></div>
  return(
    <div>
      <Navbar />
      <div style={{display:"flex"}}>
        <LeftBar  />
        <div style={{flex:6,paddingLeft:"40px"}}>
        <Outlet />

        </div>
        <RightBar />
      </div>
    </div>
  )
}
      
const router = createBrowserRouter ([
  {
    path : "/",
    element:<Layout />,
    children:[
      {
        path : "/",
        element:<Home />
      },
      {
        path : "/Profile/:id",
        element:<Profile  />
      },
    ]
  },
  
])

  return (
    <div className="App">

<RouterProvider router={router}/>


    </div>
  );
}

export default App;
