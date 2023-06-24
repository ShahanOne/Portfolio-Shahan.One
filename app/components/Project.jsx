import Link from 'next/link';

function Project(props) {
  const bg1 = props.bg;
  const backgrounds = {
    ip: 'bg-ip hover:bg-ip2',
    sp: 'bg-sp hover:bg-sp2',
    nx: 'bg-nx hover:bg-nx2',
    vp: 'bg-vp hover:bg-vp2',
    olx: 'bg-olx hover:bg-olx2',
    finance: 'bg-finance hover:bg-finance2',
    weather: 'bg-weather hover:bg-weather2',
    split: 'bg-split',
  };

  return (
    <div
      className={`${backgrounds[bg1]} hover:scale-105 delay-200 duration-300 project bg-cover rounded-xl pt-20`}
    >
      <div className="rounded-xl py-8 px-2 bg-gradient-to-t from-emerald-900 hover:from-emerald-800">
        <div className="text-xs hover:-translate-y-2 py-4 ease-in-out duration-300">
          <p>{props.title}</p>
          <br />
          <p className="">{props.info}</p>
          <Link href={props.link}>
            <button className="backdrop-blur-sm my-2 bg-gradient-to-r from-indigo-600 py-1 px-2 rounded-xl shadow-xl">
              visit 🔗
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
