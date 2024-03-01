import { NavLink, useLoaderData } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

const MainNavigation = () => {
  const token = useLoaderData();

  console.log(token);

  return (
    <>
      {/*Top Top header */}
      <section className="top-txt">
        <div className="head container">
          <div className="head-txt">
            <p>
              Livraison rapide avec possibilité de retourn en 3 jours. Satisfait
              ou satisfait !
            </p>
          </div>

          {!token && (
            <div className="sing_in_up">
              <NavLink to="/login">ME CONNECTER</NavLink>
              <NavLink to="/register">M'INSCRIRE</NavLink>
            </div>
          )}
          {token && (
            <div className="sing_in_up">
              <NavLink
                to="/login"
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <IoLogOutOutline style={{ fontSize: "25px" }} />
                <span> ME DECONNECTER</span>
              </NavLink>
            </div>
          )}
        </div>
      </section>

      {/*Fin Top header */}

      <nav className="navbar">
        <div className="navbar-container">
          <input type="checkbox" id="checkbox" />

          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <ul className="menu-items">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/products">Nos produits</NavLink>
            </li>
            <li>
              <a href="/">Mon profile</a>
            </li>
            <li>
              <a href="/">Panier</a>
            </li>
          </ul>

          <div className="logo"></div>

          <div className="flex items-center gap-1">
            <input
              placeholder="rechercher..."
              className="search-topbar-input"
            />
            <button
              className="btn-search"
              style={{
                color: "white",
              }}
            >
              Rechercher
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
