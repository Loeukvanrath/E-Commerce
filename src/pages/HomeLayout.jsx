import { Header } from "../components";
import {Navbar,Filters} from "../components";
import { Outlet} from 'react-router-dom';

const HomeLayout = () =>{
    return (
        <>
          <Header/>
          <Navbar/>
          <section className='align-element py-20'>
            {/* Render Child Components */}
            <Outlet/>
          </section>
        </>
    )
}
export default HomeLayout;