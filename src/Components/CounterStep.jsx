import { STEP_ACTION } from "./CounterDevice";

export default function CounterStep({ step, dispatch }) {
  const handleChange = (e) => {
    const newStep = Number(e.target.value);
    const action = { type: STEP_ACTION.SET_VALUE, payload: newStep };
    dispatch(action);
  };

  return (
    <>
      <p>
        <label htmlFor="inputStep">Step: </label>
        <input
          id="inputStep"
          type="number"
          value={step}
          onChange={handleChange}
        ></input>
      </p>
    </>
  );
}
