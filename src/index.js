import './style'
// import _ from 'lodash'

// function component() {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['hello', 'webpack', ' '])
//     var btn = document.createElement('btn')
//     btn.innerHTML = 'click me'
//     element.appendChild(btn)
//     return element
// }


// document.body.appendChild(component())


function component () {
    return import(/* webpackChunkName: 'lodash' */ 'lodash').then(_ => {
        const element = document.createElement('div')
        element.innerHTML = _.join(['hello', 'webpack', ' '])
        return element
    }).catch(err => console.error(111, err))
}

setTimeout(() => {
    component().then(ele => document.body.appendChild(ele))
}, 2000)