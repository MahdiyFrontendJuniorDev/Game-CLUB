import { useContext, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import LoginRoute from "../pages/Login";
import { AuthContext } from "../utilities/authContext";
import { GameContext } from "./../utilities/gameContext";

function Navbars() {
  const { gameCart } = useContext(GameContext);
  const { currentUser, Logout } = useContext(AuthContext);
  let navigate = useNavigate();
  const myRef = useRef(null);

  const onLogout = () => {
    Logout();
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container className="flex items-center p-10">
        <Navbar.Brand className="text-3xl font-bold" href="#home ">
          Games
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto space-x-5">
            <Link
              className="bg-slate-600 px-5 py-2 rounded-xl text-xl text-white font-bold"
              to="/"
            >
              Home
            </Link>
            <Link
              className="bg-slate-600 px-5 py-2 rounded-xl text-xl text-white font-bold"
              to="/newgame"
            >
              Add new game
            </Link>
            <button
              ref={myRef}
              onClick={onLogout}
              className="bg-red-500 px-5 py-2 rounded-xl"
            >
              Log Out
            </button>
            <Link
              className="bg-green-500 px-5 py-2 rounded-xl text-xl text-white font-bold"
              to={"/login"}
              element={<LoginRoute />}
            >
              Login
            </Link>
            <Link to={"/cart"}>
              <div className="relative">
                <AiOutlineShoppingCart className="h-10 w-10 text-slate-700 cursor-pointer duration-200 active:scale-95" />
                <span
                  style={{ display: gameCart.length > 0 ? "block" : "none" }}
                  class="inline-flex items-center absolute top-[-5px] right-2 left-6 justify-center px-3 pr-4 py-1  text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
                >
                  {gameCart.length}
                </span>
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
