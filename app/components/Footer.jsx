function Footer(props) {
  return (
    <div
      className={`bg-gradient-to-r ${
        props.isDarkTheme
          ? 'from-slate-900 to-slate-950'
          : 'from-indigo-500 to-indigo-600'
      } "footer text-white text-center pt-12 pb-4`}
    >
      <p>{'</>'} by Shahan.One </p>
      <p>2023</p>
    </div>
  );
}

export default Footer;
