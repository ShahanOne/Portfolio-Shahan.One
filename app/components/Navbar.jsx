import Link from 'next/link';

function Navbar(props) {
  return (
    <center>
      <nav
        className={`bg-gradient-to-r ${
          props.isDarkTheme
            ? 'from-slate-700 to-slate-800 text-white'
            : 'from-indigo-500 to-indigo-600 text-white'
        }  shadow-xl py-4 w-1/2 rounded-[0_0_25px_25px]`}
      >
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
      </nav>
    </center>
  );
}

export default Navbar;
