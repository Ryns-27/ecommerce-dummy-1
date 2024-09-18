const Navicon = () => {
  return (
    <div className="flex items-center p-5">
      <ul className="flex gap-8">
        <li>
          <a href="">
            <img src="./images/Navbar/account.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/Navbar/search.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/Navbar/heart.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/Navbar/cart.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navicon;
