import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { LayoutContaienr } from "./styles"

export const DefaultLayout = () => {
    return (
        <LayoutContaienr>
            <Header />
            <Outlet />
        </LayoutContaienr>
    )
}
