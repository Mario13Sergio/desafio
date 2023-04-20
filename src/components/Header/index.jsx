import { Container } from "./style";
import { useState } from "react";
import { Menu } from "../Menu"
import { Link } from "react-router-dom";




export  function Header(){
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenuIcon = () => setMenuActive(!menuActive);
return(
<>
    <Container>
    <div>
        
        <div className="button">            
            <nav>
                <ul>
                    <Link to = "/"><li>Home</li></Link>
                    <Link to = "/Sinasc"><li>Sinasc</li></Link>
                    <Link to = "/Sim"><li>Sim</li></Link>
                </ul> 
            </nav> 
        </div>
       
        
            <div className="logoMenu">
                <div>
                    <h1>VIGILÂNCIA EPIDEMIOLÓGICA</h1>
                    <h3>DADOS EPIDEMIOLÓGICOS</h3>
                </div>
            </div>
    </div>
    </Container>
        <div onClick={toggleMenuIcon}>
            { menuActive && <Menu/>}
        </div>
</>
  
    
   )
}