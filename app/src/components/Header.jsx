import '../Header.css'
function Header() {
  return (
    <header className="header">
      <div className="logo">My Budget</div>
      <nav className="navbar">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="logout">
        <a href="/logout">Logout</a>
      </div>
    </header>
  );
}

export default Header;