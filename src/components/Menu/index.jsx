import {Link} from "react-router-dom";
import { Container } from "./style";

export const Menu = () => {
    return(
        <Container>
            <div>
                <nav>
                    <ul>
                        <Link to = "/"><li>Home</li> </Link>
                        <Link to = "/Sinasc"><li>Sinasc</li> </Link>
                        <Link to = "/Sim"><li>Sim</li> </Link>
                    </ul>
                </nav>
            </div>

        
        </Container>

    
  
    )
 };

