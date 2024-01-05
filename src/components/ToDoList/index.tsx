import styles from './style.module.scss'

import { observer } from "mobx-react-lite"
import listStore from "../../stores/list-store"


export const ToDoList = observer(() => {
  const { list, removeToDo } = listStore

  return (
    <ul className={ styles.ToDoList }>
      {
        list.map(todo => <li  key={ list.indexOf(todo) }>
          <input
            type='checkbox'
            onClick={ () => removeToDo(list.indexOf(todo)) }
          />
          <p> { todo } </p>
        </li>)
      }
    </ul>
  )
})
