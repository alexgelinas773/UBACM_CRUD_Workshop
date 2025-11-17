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
        Name: name,
        Class: className,
        DueDate: dueDate,
        Status: 'Incomplete'
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
            <button onClick={add} className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Task
            </button>
          </div>

          <div className="space-y-2">
            {tasks.map(t => (
                <div key={t._id} className="p-3 border rounded">
                  <div className="font-bold">{t.Name}</div>
                  <div className="text-sm text-gray-600">Class: {t.Class}</div>
                  <div className="text-sm text-gray-600">Due: {t.DueDate}</div>
                  <div className="text-sm">Status: {t.Status}</div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}