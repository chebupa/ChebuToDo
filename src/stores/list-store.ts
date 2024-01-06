import { makeAutoObservable } from "mobx"


class listStore {
    list: string[] = []
    count: number = -1

    constructor() {
        makeAutoObservable(this)
    }

    addToDo = (value: string) => {
        this.list.push(value)
        console.log(this.list)
        this.count++
        console.log(this.count)
    }
    removeToDo = (index: number) => {
        this.list.splice(index, 1)
    }
}


export default new listStore
