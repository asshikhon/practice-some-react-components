import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill, } from 'react-icons/ri';
import { IoIosClose } from "react-icons/io";
const Navbar = () => {
const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/products', name: 'Products', id: 3 },
        { path: '/profile', name: 'Profile', id: 4 },
        { path: '/admin', name: 'Admin', id: 5 },
      ];
      


    return (
        <nav className="p-6 mb-24">
<div className=" md:hidden" onClick={() => setOpen(!open)}>
    {
        open === true ?
        <IoIosClose className="text-3xl"></IoIosClose> :
         <RiMenu2Fill className="text-2xl"></RiMenu2Fill>
    }



</div>
<ul className={`md:flex absolute w-full text-center justify-center bg-gray-400 pt-6 rounded-xl
${open ? 'top-16' : '-top-96 md:-top-0'} duration-1000`}>
{
    routes.map(route => <Link  key={route.id} route={route}></Link>)
}

</ul>

        </nav>
    );
};

export default Navbar;