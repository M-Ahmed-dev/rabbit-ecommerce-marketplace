import { RiDeleteBin3Line } from "react-icons/ri";

function CartContents() {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jean Pants",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.map((item, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-25 object-cover mr-4 rounded"
            />
            <div>
              <h3>{item.name}</h3>
              <p className="text-sm text-gray-500">
                size: {item.size} | color: {item.color}
              </p>
              <div className="flex gap-2 items-center mt-2">
                <button className="cursor-pointer rounded px-2 text-xl py-1 font-medium">
                  -
                </button>
                <span>{item.quantity}</span>
                <button className="cursor-pointer rounded px-2 text-xl py-1 font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {item.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 text-gray-600 mt-2 hover:text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContents;
