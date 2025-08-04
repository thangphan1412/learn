import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", " Orange"];
  const fruits = [
    { name: "Apple", price: 100 },
    { name: "Orange", price: 100 },
    { name: "Banana", price: 100 },
    { name: "Mango", price: 100 },
  ];
  return (
    <div>
      <ul>
        {/* map là 1 ham co san trong javacrip, nó lặp qua từng phần tử trong mảng và trả về 1 mảng mới , mỗi phần từ được biến đổi
        theo logic bên trong */}
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>
          //     {fruit.name} :{fruit.price}{" "}
          //   </li>
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
