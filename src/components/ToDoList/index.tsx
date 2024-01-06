import styles from './style.module.scss'

import { observer } from "mobx-react-lite"
import listStore from "../../stores/list-store"


export const ToDoList = observer(() => {
  const { list, removeToDo } = listStore

  return (
    <ul className={ styles.ToDoList }>
      {
        list.map((todo, key) => <li key={ key }>
          <div className={ styles.wrapper }>
            <button onClick={ () => removeToDo(key) }> X </button>
          </div>
          <p> { todo } </p>
        </li>)
      }
    </ul>
  )
})
