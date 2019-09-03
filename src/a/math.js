import _ from 'lodash'

export function square (x) {
    return x * x
}

export function cube (x) {
    return x * x * x
}

export class Person {
    constructor ({ name, age, sex }) {
        this.className = 'Person'
        this.name = name
        this.age = age
        this.sex = sex
    }
    getName () {
        return this.name
    }
}
