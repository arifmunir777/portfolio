import  './topbar.scss'
import { Person,Email } from '@material-ui/icons'
const TopBar = ({menuOpen,setMenuOpen}) => {
    console.log(menuOpen);
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
             <div className="left">
             <a href="#intro" className="logo">ARIF MUNIR.</a> 
             <div className="itemContainer">
              <Person className="icon"/>
              <span>+923308476060</span>
             </div>

             <div className="itemContainer">
              <Email className="icon"/>
              <span>aws@gmail.com</span>
             </div>
 
 
             </div>
             <div className="right">
                  <div className="humberBurger " onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                 </div>
             </div>
 
            </div>  
        </div>
    )
}

export default TopBar
