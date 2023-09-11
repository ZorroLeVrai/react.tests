export default function DisplayCounter({ counter }) {
  return (
    <div data-testid="count" className="badge bg-primary fs-5">
      {counter}
    </div>
  );
}
