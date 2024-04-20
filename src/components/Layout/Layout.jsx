import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(props) {
    return (
        <div>
            <Header title={props.title} logo={props.logo}/>
            <Outlet />
            <Footer />
        </div>
    );
}
export default Layout;