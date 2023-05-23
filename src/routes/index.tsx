import { Route, Routes } from "react-router";
import { DefaultLayout } from "../layout/App";
import { Home } from "../pages/Home";


export function Router() {
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}