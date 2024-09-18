const Navlogo = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center gap-1 p-5">
      <a href="">
        <img src="./images/Logo.png" alt="" />
      </a>
      <h1 className="text-3xl font-bold">{children}</h1>
    </div>
  );
};

export default Navlogo;
