import CardProducts from "../../Fragments/CardProducts";

const Products = [
  {
    id: 1,
    image: "./images/Card-1.png",
    title: "Meja",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore placeat,",
    price: "Rp.1000",},
  {
    id: 2,
    image: "./images/Card-1.png",
    title: "Kursi",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore placeat,lorem, ipsum dolor sit amet consectetur.",
    price: "Rp.2000",},
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center ">
      <div className=" flex flex-col max-w-[1440px]">
        <div className="text-center mt-14">
          <h1 className="text-3xl font-bold">Browse The Range</h1>
          <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, id saepe vitae deleniti</p>
        </div>
        <div className="grid grid-cols-4 mt-10 gap-14">
          {Products.map((product) => (
            <CardProducts key={product.id}>
            <CardProducts.Header image={product.image}></CardProducts.Header>
            <CardProducts.Body title={product.title}>
            {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price}></CardProducts.Footer>
          </CardProducts>
          ))}
        </div>
      </div>
      </div>
        
    );
};

export default ProductsPage;