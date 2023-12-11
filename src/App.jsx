import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "./components/common/Header";
import Search from "./components/search/Search";
import Home from "./components/home/Home";
import Video from "./components/video/Video";
import styled from "styled-components";
import "./css/reset.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <StyledWrap>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <StyledContent>
                      <Outlet />
                    </StyledContent>
                  </>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="video/:videoId" element={<Video />} />
              </Route>
            </Routes>
          </Router>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </StyledWrap>
    </>
  );
}

export default App;

const StyledWrap = styled.main`
  display: block;
  max-width: 1240px;
  margin: 0 auto;
`;

const StyledContent = styled.div`
  padding: 20px 0 50px;
`;
