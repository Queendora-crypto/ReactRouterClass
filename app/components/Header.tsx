import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSpinner,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const ref = useRef<HTMLElement | null>(null);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", () => {
        if (scrollY > 100) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      });
    }
  }, []);

  return (
    <header
      ref={ref}
      className={sticky ? "top-0 z-50 w-full bg-white! fixed" : "bg-red-500/5"}
    >
      <div className={"navbar"}>
        <a href="#">
          <img src={"/favicon.ico"} alt={"Logo"} />
        </a>

        <nav>
          <a href="#">
            <span>Products</span>
          </a>
          <a href="#">
            <span>Categories</span>
          </a>
          <a href="#">
            <span>Trending</span>
          </a>

          <NavLink to={"/about-us"}>
            {({ isPending }) => (
              <>
                <span>About us</span>&nbsp;
                {isPending && (
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </span>
                )}
              </>
            )}
          </NavLink>

          <a href="#">
            <span>Support</span>
          </a>

          {/*LOGIN AND SIGNUP*/}

          <NavLink to={"/login"} className={"login"}>
            {({ isPending }) => (
              <>
                <span>Login</span>&nbsp;
                {isPending ? (
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </span>
                )}
              </>
            )}
          </NavLink>

          <NavLink to={"/signup"} className={"signup"}>
            {({ isPending }) => (
              <>
                <span>Signup</span>&nbsp;
                {isPending ? (
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </span>
                )}
              </>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
