import { makeAutoObservable } from "mobx"


class inputFieldStore {
    inputValue: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    setInputValue = (inputFieldValue: string) => {
        this.inputValue = inputFieldValue
    }
}


export default new inputFieldStore