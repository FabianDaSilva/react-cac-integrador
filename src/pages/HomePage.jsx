import { Navigate } from "react-router";

import { Banner, Nav, Row } from "../components";
import { Request } from "../services";

const HomePage = () => {

  const loggedIn = sessionStorage.getItem("user");
  
  return (
    loggedIn
    ? <>
      <Nav />
      <Banner />
      <Row fetchUrl={Request.fetchTrending} title="Treding Now" />
      <Row fetchUrl={Request.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={Request.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={Request.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={Request.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={Request.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={Request.fetchDocumentaries} title="Documentaries" />
    </>
    : <Navigate to='/signin'/>
  );
};

export default HomePage;
