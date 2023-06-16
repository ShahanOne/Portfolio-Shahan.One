import Link from 'next/link';
import navStyles from '../../styles/Nav.module.css';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg">
      <center>
        <ul className="">
          <li className="inline-block m-6 text-lg">
            <Link href="/">Home</Link>
          </li>
          <li className="inline-block m-6 text-lg">
            <Link href="#projects">Projects </Link>{' '}
          </li>
          <li className="inline-block m-6 text-lg">
            <Link href="/about">About</Link>{' '}
          </li>
          <li className="inline-block m-6 text-lg">
            <Link href="/contact">Contact </Link>{' '}
          </li>
        </ul>
      </center>
    </nav>
  );
}

export default Navbar;
