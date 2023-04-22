import { NavLink, Outlet } from 'react-router-dom'
import "./RootLayout.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function RootLayout() {
    return (
        <div className='root-layout'>

            <header>




                <Navbar variant="light">
                    <Container>
                        <Navbar.Brand>
                            <blockquote class="text-2xl font-semibold italic text-center text-slate-900">

                                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                                    <span class="relative text-white">YumYum</span>

                                </span>

                                <br />

                            </blockquote>
                        </Navbar.Brand>
                        <Nav className="me-auto" id='nav'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='About'>About Us</Nav.Link>
                            <Nav.Link href='/Contact'>Contact</Nav.Link>


                            .     {/* <NavLink href="#features">Features</NavLink>
                            <NavLink href="#pricing">Pricing</NavLink> */}
                        </Nav>
                    </Container>
                </Navbar>

            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}