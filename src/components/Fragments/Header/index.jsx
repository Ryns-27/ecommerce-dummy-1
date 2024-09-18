import Button from "../../Elements/Button";
const Header = () => {
  return (
    <div className="h-[718px] max-w-[1440px] flex justify-center flex-col">
      <img
        className="max-w-[1440px] -z-10 absolute left-1/2 -translate-x-1/2"
        src="./images/bg-Header.png"
        alt=""
      />
      <div className="flex justify-end relative top-10 -right-28">
        <div className="w-[643px] h-[443px] bg-[#FFF3E3] items-start flex flex-col justify-center px-12">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">New Arrival</h2>
            <h1 className="text-5xl font-bold text-[#B88E2F]">
              Discover Our <br /> New Collection
            </h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              quo natus eligendi,
            </p>
          </div>
          <Button width="w-40" height="h-16" mt="mt-10">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
