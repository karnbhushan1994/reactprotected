import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientHome from "./components/client/ClientHome";
import DashboardHome from "./components/admin/DashboardHome";
import WebsiteBuilder from "./components/admin/WebsiteBuilder/WebsiteBuilder";
import Headers from "./components/admin/Headers/Headers";
import Header1 from "./components/admin/Headers/Header1";
import Header2 from "./components/admin/Headers/Header2";
import Header3 from "./components/admin/Headers/Header3";
import Header4 from "./components/admin/Headers/Header4";
import AllPages from "./components/admin/Pages/AllPages";
import PageAdd from "./components/admin/Pages/PageAdd";
import Login from "./components/admin/LoginSignup/Login";
import SignUp from "./components/admin/LoginSignup/SignUp";
import Page404 from "./components/admin/Page404";
import AdminMain from "./components/admin/AdminMain";
import IsLogin from "./components/protected/IsLogin";
import IsLogout from "./components/protected/IsLogout";

export default function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<ClientHome />} />

              <Route path="signup" element={<SignUp />} />

              <Route path="admin" element={<IsLogout Component={Login} />} />
              
              <Route path="adminmain" element={<IsLogin Component={AdminMain} />}>
                <Route path="dashboard" element={<DashboardHome />} />
                <Route path="websitebuilder" element={<WebsiteBuilder />} />
                <Route path="headers" element={<Headers />} />
                <Route path="header-1" element={<Header1 />} />
                <Route path="header-2" element={<Header2 />} />
                <Route path="header-3" element={<Header3 />} />
                <Route path="header-4" element={<Header4 />} />
                <Route path="allpages" element={<AllPages />} />
                <Route path="pageadd" element={<PageAdd />} />
              </Route>

              <Route path="*" element={<Page404 />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}
