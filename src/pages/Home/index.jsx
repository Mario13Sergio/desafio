import { Container } from './style.js';
import { Link } from 'react-router-dom';

export function Home() {
return (
        <Container>
        <div>  

        <header className='header'>
        <div className="logoMenu">
            <h1>VIGILÂNCIA EPIDEMIOLÓGICA</h1>
            <h3>DADOS EPIDEMIOLÓGICOS</h3>
        </div>

            <div>
                <nav>
                    <ul>
                        <button><Link to = "/"><li>HOME</li> </Link>
                        </button>
                        <button>
                        <Link to = "/Sinasc"><li>SINASC</li> </Link>
                        </button>
                        <button>
                        <Link to = "/Sim"><li>SIM</li> </Link>
                        </button>
                    </ul>
                </nav>
                
                
            
            </div>
        </header>        
            <h1>HOME</h1>
            <img src="https://images.pexels.com/photos/325690/pexels-photo-325690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam unde placeat facere, non delectus dicta temporibus architecto aliquid aperiam sapiente vel quo accusamus porro facilis harum illo neque esse nemo?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, pariatur? Distinctio, odio culpa? Temporibus voluptas doloremque ea reprehenderit dolores odio voluptates a, labore corporis hic consectetur. Ut quidem nesciunt repudiandae.
            </p>
                            
                    
                

            
        </div>
        </Container>
        
               
   
    )
}

