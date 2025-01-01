import SearchContact from "./contact/SearchContact";

const Navbar = () =>
{
    return(
<nav className="navbar navbar-light bg-light justify-content-around">
  <a className="navbar-brand">مدیریت مخاطبین</a>
  <SearchContact />
</nav>
      );
}

export  default Navbar;