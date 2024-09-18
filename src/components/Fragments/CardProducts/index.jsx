import Button from "../../Elements/Button";

const CardProducts = (props) => {
    const {children} = props
  return (
      <div className="cursor-pointer w-80 mb-20 bg-slate-200 p-4">
        {children}
      </div>
  );
};

const Header = (props) => {
    const {image} = props
  return (
    <div>
    <img className="w-80 h-80" src={image} alt="" />
    </div>
  );
};

const Body = (props) => {
    const {children,title} = props
  return (
    <div className="">
        <h1 className=" font-bold mt-4 text-xl">{title}</h1>
        <p className="h-20">{children}</p>
    </div>
  );
};

const Footer = (props) => {
    const {price} = props
  return (
    <div className="flex justify-between items-center mt-2">
    <p className="font-bold">{price}</p>
    <Button>Buy</Button>
  </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
