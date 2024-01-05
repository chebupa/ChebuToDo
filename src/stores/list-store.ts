import { makeAutoObservable } from "mobx"


class listStore {
    list: string[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addToDo = (value: string) => {
        this.list.push(value)
    }
    removeToDo = (toDoId: number) => {
        this.list.splice(toDoId, 1)
    }
}


export default new listStore
