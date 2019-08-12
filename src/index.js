// import _ from 'lodash'
import * as math from './math'
import './style'

function component() {
    return import(/* webpackChunkName "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div')
        element.innerHTML = [
            'hello webpack!',
            '5 cubed is equal to' + math.cube(4)
        ].join('\n\n')
        return element
    }).catch(() => console.error('xixixi'))
}

component().then(component => {
    document.body.appendChild(component)
})
