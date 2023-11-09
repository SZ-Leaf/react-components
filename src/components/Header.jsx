import { Link } from "react-router-dom";

function Header(){
   const isUserLogged = true;
   const itemInCart = 2;
   const userLogged = {
      firstname : 'Pauline',
      lastname : 'Rémi',
      job : 'Formation web dev'
   };
   return (
      <header>

         <nav>

            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/Profile'>Profile</Link></li>
               <li><Link to='/Contact'>Contact</Link></li>
            </ul>

         </nav>

      </header>
   )
}
export default Header;