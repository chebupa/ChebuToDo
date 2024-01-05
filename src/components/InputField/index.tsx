import styles from './style.module.scss'

import { observer } from "mobx-react-lite"
import inputFieldStore from "../../stores/input-field-store"


export const InputField = observer(() => {
  const { setInputValue } = inputFieldStore

  return (
    <input
      className={ styles.InputField }
      onChange={ (e) => setInputValue(e.target.value) }
    />
  )
})
