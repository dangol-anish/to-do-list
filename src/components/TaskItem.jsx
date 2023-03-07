import React from "react";
import styles from "./TaskItem.module.css";

//library imports
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

const TaskItem = ({ task }) => {
  //state
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
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
      </li>
    </div>
  );
};

export default TaskItem;
