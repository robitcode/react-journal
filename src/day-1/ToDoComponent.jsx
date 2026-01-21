import { useState } from "react";

export default function ToDoComponent() {

    const [tasks, setTasks] = useState([
        { 'id': 1, 'text': 'Revise React Hooks', 'completed': true },
        { 'id': 2, 'text': 'Master Tailwind v4', 'completed': false }
    ]);

    const [inputValue, setInputValue] = useState('');

    // Add Task
    const addTask = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) return;
        const newTask = {
            'id': Date.now(),
            'text': inputValue,
            'completed': false
        };

        setTasks([...tasks, newTask]);
        setInputValue("");
    }

    // Update: Toggle completion
    function toggleTask(id) {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    // Delete: Remove task
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id != id));
    }

    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col items-center py-20 px-4">
            <div className="w-fill max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-zinc-100">

                <h1 className="text-2xl font-black text-zinc-900 mb-6 flex items-center gap-2">
                    <span className="bg-blue-600 text-white p-1 rounded-lg text-lg"></span>
                    My Tasks
                </h1>

                {/* Input Form */}
                <form onSubmit={addTask} className="flex gap-2 mb-8">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Add a new task"
                        className="flex-1 bg-zinc-100 border-none rounded-xl px-4 py-3
                    text-zinc-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"/>

                    <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-blue
                    active:scale-95 transition-all">
                        +
                    </button>
                </form>

                <p className="mt-8 mb-8 text-center text-sm text-zinc-400 font-medium">
                    {tasks.filter(t => !t.completed).length} task remaining
                </p>

                {/* Task List */}
                <div className="space-y-3">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="group flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border
                        border-transparent hover:border-zinc-200 transition-all"
                        >

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => toggleTask(task.id)}
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transtion-all
                                    ${task.completed ? 'bg-green-500 border-green-500' : 'border-zinc-300'}`}>
                                    {task.completed && <span className="text-white text-xs">✓</span>}
                                </button>

                                {/* Dyanmic Text Class */}
                                <span className={`text-zinc-700 font-medium transition-all 
                                    ${task.completed ? 'line-through text-zinc-400' : ''}`}>
                                    {task.text}
                                </span>

                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="text-zinc-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all font-bold ">
                                    ✕
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
