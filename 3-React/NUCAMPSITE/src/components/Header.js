import NucampLogo from '../app/assets/img/logo.png';
import {Navbar, NavbarBrand} from 'reactstrap';


//import {NucampLogo} from 'NUCAMPSITE\src\app\assets\img\logo.png';

const Header=()=>{
    return(<Navbar dark color='primary' sticky='top' expand='md'>
         <NavbarBrand href='/'>
             <img src={NucampLogo} alt='nucamp logo'/>
         </NavbarBrand>
 </Navbar>)
}

export default Header;

//Had an error with my importing Nucamp Logo until I changed it : https://stackoverflow.com/questions/65710691/why-cant-i-import-from-export-default-in-typescript