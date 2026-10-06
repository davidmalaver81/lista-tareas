import { useState } from "react";

interface AddTaskFormProps {
  onAddTask: (text: string) => void;
}

function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    onAddTask(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Agregar
      </button>
    </form>
  );
}

export default AddTaskForm;