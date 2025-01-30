import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"
function Layout(){
    return(
        <>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout