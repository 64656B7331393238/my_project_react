import Fruit from './Fruit';

export default function Fruits() {
  //   const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
  const fruits = [
    {
      name: 'Apple',
      price: 10,
      emoji: '🍎',
      soldout: false,
    },
    {
      name: 'Banana',
      price: 15,
      emoji: '🍌',
      soldout: true,
    },
    {
      name: 'Orange',
      price: 20,
      emoji: '🍊',
      soldout: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>
          //     {fruit.emoji} {fruit.name} ${fruit.price}
          //   </li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
