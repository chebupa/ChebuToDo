import styles from './style.module.scss'

import { observer } from "mobx-react-lite"
import listStore from "../../stores/list-store"
import inputFieldStore from "../../stores/input-field-store"


export const Button = observer(() => {
  const { addToDo } = listStore
  const { inputValue } = inputFieldStore

  const handleClick = () => {
    if (inputValue) addToDo(inputValue)
    else console.log('Empty todo')
  }

  return (
    <button
      className={ styles.Button }
      onClick={ () => handleClick() }
    > Add </button>
  )
})
