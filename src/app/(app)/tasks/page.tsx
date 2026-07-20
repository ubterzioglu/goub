import { tasks } from "@/lib/mock-data";

export default function TasksPage() {
  return (
    <section className="content-panel">
      <div className="panel-header">
        <div>
          <span className="section-kicker">Task generation</span>
          <h1>Tasks</h1>
        </div>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <strong>{task.title}</strong>
            <p className="muted">
              {task.owner} · {task.status} · {task.dueDate}
            </p>
            <p className="muted">{task.source}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
