export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
      {soldout ? (
        <li>
          {emoji} {name} ${price} ❌
        </li>
      ) : (
        <li>
          {emoji} {name} ${price} ✅
        </li>
      )}
    </>
  );
}
