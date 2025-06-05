export default function Button({ type, text, onClick = () => {} }) {
  return (
    <button onClick={onClick} type={type}>
      {text}
    </button>
  );
}
