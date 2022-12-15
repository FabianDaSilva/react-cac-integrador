import { Banner, Nav, Row } from "../components";
import { useMovie } from "../hooks";

const HomePage = () => {
  const movie = useMovie("movie");

  return (
    <>
      <Nav />
      <Banner />
      <Row movie={movie} />
    </>
  );
};

export default HomePage;
