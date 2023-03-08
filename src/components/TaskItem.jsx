import React from "react";
import styles from "./TaskItem.module.css";

//library imports
import { AiOutlineCheck, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  //state
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };

  return (
    <div>
      <li className={styles.task}>
        <div className={styles["task-group"]}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isChecked}
            onChange={handleCheckboxChange}
            name={task.name}
            id={task.id}
          />
          <label htmlFor={task.id} className={styles.label}>
            {task.name}
            <p className={styles.checkmark}>
              <AiOutlineCheck strokeWidth={2} width={24} height={24} />
            </p>
          </label>
        </div>
        <div className="custom">
          <button
            className="btn"
            aria-label={`Update ${task.name} Task`}
            onClick={() => enterEditMode(task)}
          >
            <AiOutlineEdit />
          </button>
          <button
            className={`btn ${styles.delete}`}
            aria-label={`Delete ${task.name} Task`}
            //arrow func bc if not whenever component mounted it would fire off without listening to click event
            onClick={() => deleteTask(task.id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </li>
    </div>
  );
};

export default TaskItem;
