import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

const AppRoutes = () => {

    return (
    <div>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path ="/auth" element={<HomePage/>} />
        </Routes>
    </div>
    )
}

export default AppRoutes;