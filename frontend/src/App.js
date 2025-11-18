import { useState, useEffect } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/allTasks')
        .then(r => r.json())
        .then(data => setTasks(data))
        .catch(e => console.error(e));
  }, []);

  const add = () => {
    if (name.trim()) {
      const task = {
        name: name,
        className: className,
        dueDate: dueDate,
        status: 'Not Started'
      };

      fetch('http://localhost:8080/addTask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })
          .then(r => r.json())
          .then(newTask => {
            setTasks([...tasks, newTask]);
            setName('');
            setClassName('');
            setDueDate('');
          })
          .catch(e => console.error(e));
    }
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:8080/deleteTask/${id}`, {
      method: 'DELETE'
    })
        .then(() => {
          setTasks(tasks.filter(t => t._id !== id));
        })
        .catch(e => console.error(e));
  };

  return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-4">School Assignments</h1>

          <div className="grid gap-2 mb-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Assignment name..."
                className="border rounded px-3 py-2"
            />
            <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="Class name..."
                className="border rounded px-3 py-2"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border rounded px-3 py-2"
            />
            <button onClick={add} className="bg-green-500 text-white px-4 py-2 rounded">
              Add Task
            </button>
          </div>

          <div className="space-y-3">
            {tasks.length === 0 ? (
                <div className="text-gray-500 text-center py-4">No tasks yet. Add one above!</div>
            ) : (
                tasks.map(t => (
                    <div key={t._id} className="p-4 border-2 rounded-lg shadow-sm bg-white relative">
                      <button className="absolute top-2 right-2 text-blue-500 text-sm hover:text-blue-700">
                        Edit
                      </button>
                      <div className="font-bold text-lg mb-2">{t.name || 'No name'}</div>
                      <div className="text-sm text-gray-600 mb-1">Class: {t.className || 'N/A'}</div>
                      <div className="text-sm text-gray-600 mb-1">Due: {t.dueDate || 'No date'}</div>
                      <div className="text-sm font-medium mb-2">Status: {t.status || 'Unknown'}</div>
                      <button
                          onClick={() => deleteTask(t._id)}
                          className="absolute bottom-2 right-2 text-red-500 text-sm hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                ))
            )}
          </div>
        </div>
      </div>
  );
}