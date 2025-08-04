export default function Message() {
  function handleClick() {
    console.log("this is handle click");
  }
  return (
    <div>
      <button onClick={handleClick}>Click in here</button>
    </div>
  );
}
