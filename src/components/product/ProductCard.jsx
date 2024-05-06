import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ img_src, product_name, product_price }) {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart({ img_src, product_name, product_price });
    alert("Added to cart.... Click on cart to checkout");
  };
  return (
    <Card className="w-56 bg-[#bebebe] flex flex-col justify-between p-2 rounded-lg">
      <CardHeader shadow={false} floated={false} className=" h-36 rounded-lg">
        <img
          src={img_src}
          alt="card-image"
          className="h-full w-full object-cover rounded-md"
        />
      </CardHeader>
      <CardBody className="h-28 flex flex-col justify-start items-start">
        <div className="h-full w-full mt-2 flex flex-col items-center justify-around text-center">
          <Typography color="blue-gray" className="font-medium">
            {product_name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            Rs. {product_price}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#222831] p-2 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
