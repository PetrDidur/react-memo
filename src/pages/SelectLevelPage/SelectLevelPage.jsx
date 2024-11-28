import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";

export function SelectLevelPage() {
  const [isErrorLimitedMode, setIsErrorLimitedMode] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <div className={styles.option}>
          <label>
            Режим с ограниченными ошибками
            <input
              type="checkbox"
              checked={isErrorLimitedMode}
              onChange={e => setIsErrorLimitedMode(e.target.checked)}
              className={styles.checkbox}
            ></input>
          </label>
        </div>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/3?errorLimitedMode=${isErrorLimitedMode}`}>
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/6?errorLimitedMode=${isErrorLimitedMode}`}>
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={`/game/9?errorLimitedMode=${isErrorLimitedMode}`}>
              3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
