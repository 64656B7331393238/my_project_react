import { useState } from 'react';

export default function Form() {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div>
      {input.firstName} - {input.lastName}
      <form>
        <input
          onChange={(e) => setInput({ ...input, firstName: e.target.value })}
          type="text"
          value={input.firstName}
        />

        <input
          onChange={(e) => setInput({ ...input, lastName: e.target.value })}
          type="text"
          value={input.lastName}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
