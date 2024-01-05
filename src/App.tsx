import './App.css'

import { InputField } from './components/InputField'
import { Button } from './components/Button'
import { ToDoList } from './components/ToDoList'
import { AppHeader } from './components/AppHeader'
import { FlexColumn } from './components/flexes/FlexColumn'


export default function App() {
  return (
    <>
      <AppHeader text='ToDo list'/>

      <FlexColumn gap={ 0.5 }>
        <InputField />
        <Button />
      </FlexColumn>
      
      <ToDoList />
    </>
  )
}
