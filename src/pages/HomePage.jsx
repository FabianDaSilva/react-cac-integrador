import { Banner, Nav, Row } from "../components";
import { Request } from "../services";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Row fetchUrl={Request.fetchTrending} title="TRENDING NOW" />
      <Row fetchUrl={Request.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={Request.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={Request.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={Request.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={Request.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={Request.fetchDocumentaries} title="Documentaries" />
    </>
  );
};

export default HomePage;
