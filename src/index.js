import * as math from './math'
import './style'
import $ from 'jquery'

function component() {
    var element = document.createElement('div')
    var btn = document.createElement('button')
    btn.innerHTML = 'click me!'
    // element.innerHTML = _.join(['hello', 'webpack', ' '])
    element.appendChild(btn)
    btn.onclick = () => import(/* webpackChunkName: 'lodash' */ 'lodash').then(_ => {
        console.log(111, _)
    })
    return element
}

console.log(111, $)

console.log(jQuery)

document.body.appendChild(component())