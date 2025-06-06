import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import SearchBox from "./SearchBox/SearchBox";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />}>
            <Route path="search" element={<SearchBox />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
