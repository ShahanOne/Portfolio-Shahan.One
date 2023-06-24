function Skill(props) {
  const color = props.color;
  const bgcolor = {
    red: 'bg-gradient-to-r from-red-500 to-red-600  ',
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600   ',
    green: 'bg-gradient-to-r from-green-500 to-green-600   ',
    yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-600   ',
    pink: 'bg-gradient-to-r from-pink-500 to-pink-600   ',
    orange: 'bg-gradient-to-r from-orange-500 to-orange-600   ',
    purple: 'bg-gradient-to-r from-purple-500 to-purple-600   ',
    cyan: 'bg-gradient-to-r from-cyan-500 to-cyan-600   ',
    violet: 'bg-gradient-to-r from-violet-500 to-violet-600   ',
    slate: 'bg-gradient-to-r from-slate-500 to-slate-600   ',
    sky: 'bg-gradient-to-r from-sky-500 to-sky-600   ',
    indigo: 'bg-gradient-to-r from-indigo-500 to-indigo-600   ',
    fuchsia: 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-600   ',
    gray: 'bg-gradient-to-r from-gray-500 to-gray-600   ',
    emerald: 'bg-gradient-to-r from-emerald-500 to-emerald-600   ',
  };
  const hoverColor = {
    red: 'hover:from-red-500 hover:to-red-700',
    blue: 'hover:from-blue-500 hover:to-blue-700',
    green: 'hover:from-green-500 hover:to-green-700',
    yellow: 'hover:from-yellow-500 hover:to-yellow-700',
    pink: 'hover:from-pink-500 hover:to-pink-700',
    orange: 'hover:from-orange-500 hover:to-orange-700',
    purple: 'hover:from-purple-500 hover:to-purple-700',
    cyan: 'hover:from-cyan-500 hover:to-cyan-700',
    violet: 'hover:from-violet-500 hover:to-violet-700',
    slate: 'hover:from-slate-500 hover:to-slate-700',
    sky: 'hover:from-sky-500 hover:to-sky-700',
    indigo: 'hover:from-indigo-500 hover:to-indigo-700',
    fuchsia: 'hover:from-fuchsia-500 hover:to-fuchsia-700',
    gray: 'hover:from-gray-500 hover:to-gray-700',
    emerald: 'hover:from-emerald-500 hover:to-emerald-700',
  };
  //   const bgcolor = `bg-${color}-600`;
  //   const hoverColor = `hover:bg-${color}-500`;
  return (
    <div
      className={`${bgcolor[color]} ${hoverColor[color]} active:animate-pulse hover:-translate-y-1 ease-in-out duration-200 text-xs md:text-base p-4 md:px-4 md:py-8 shadow-lg shadow-inherit rounded-full`}
    >
      {props.name}
    </div>
  );
}

export default Skill;
