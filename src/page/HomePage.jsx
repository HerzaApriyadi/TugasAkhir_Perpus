import DashboardComponents from "../Components/DashboardComponents";
import NavbarComponents from "../Components/NavbarComponents";
import SidebarComponents from "../Components/SidebarComponents";
import { Container } from "react-bootstrap";
function HomePage() {
    return ( 
        <div>
            <DashboardComponents/>
            <SidebarComponents/>
            <NavbarComponents/>
            <div>
            <Container>
            <h1 className="pt-5">Selamat datang di perpustakaan</h1>
            </Container>
            </div>
        </div>
     );
}

export default HomePage;