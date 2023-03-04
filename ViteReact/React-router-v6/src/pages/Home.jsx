import { Link, Outlet } from "react-router-dom";
import  StyledNavbar  from "../components/StyledNavbar";
const Home = () => {
  return (

    <section className='section'>
      <h2>home page</h2>
      <Link to={'/about'} className='btn'>About</Link>
    </section>
  );
};
export default Home;