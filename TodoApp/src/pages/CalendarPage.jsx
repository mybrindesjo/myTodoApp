import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const dateKey = date.toDateString();
    setTasks((prevTasks) => ({
      ...prevTasks,
      [dateKey]: [...(prevTasks[dateKey] || []), newTask],
    }));
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    const dateKey = date.toDateString();
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks[dateKey]];
      updatedTasks.splice(index, 1);
      return { ...prevTasks, [dateKey]: updatedTasks };
    });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📆 Min Kalender</h1>
      <Calendar onChange={setDate} value={date} className="mb-4" />
      
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Uppgifter för {date.toDateString()}</h2>
        <ul>
          {(tasks[date.toDateString()] || []).map((task, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-200 p-2 my-1 rounded">
              {task}
              <button onClick={() => handleDeleteTask(index)} className="text-red-500">❌</button>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Lägg till uppgift"
            className="border p-2 flex-grow rounded"
          />
          <button onClick={handleAddTask} className="ml-2 bg-blue-500 text-white p-2 rounded">➕</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
