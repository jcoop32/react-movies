import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (
    <nav>
      <Link to="/">Moive List</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actor List</Link>
      <p>Hello, {user}</p>
    </nav>
  );
}
