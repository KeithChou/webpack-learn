import './style.css'
import axois from 'axios'
import _ from 'lodash'
import { square } from './math'

function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['hello', 'test', ' '])
    var btn = document.createElement('btn')
    btn.innerHTML = 'click me';
    btn.onclick = () => {
        console.error(square(3))
    }
    element.appendChild(btn)
    return element
}

document.body.appendChild(component())

