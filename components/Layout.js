import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
    return ( 
        <div className="main-container">
            <NavBar />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;