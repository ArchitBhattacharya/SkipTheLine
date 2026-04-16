import { createOrder } from "../services/api";

function OrderButton(): JSX.Element {
  const handleOrder = async (): Promise<void> => {
    const data = await createOrder("Burger");
    console.log(data);
    alert("Order placed!");
  };

  return (
    <button onClick={handleOrder}>
      Order Burger
    </button>
  );
}

export default OrderButton;