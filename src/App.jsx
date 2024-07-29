import {BrowserRouter , Routes, Route, Navigate} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <p>Home page</p>
          </Layout>
        } />
        <Route path="/search" element={
          <Layout>
            <p>Search page</p>
          </Layout>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
