import _ from 'lodash'
import Vue from 'vue'
import helper from './helper'
import './style.css'
import './another-module'

import(/* webpackChunkName: "test" */'./test').then(res => {
    console.log(2, res)
})

var arr = [0, 1, 'a', false];

console.log(23, helper);

console.log(22, Vue);

console.log(arr.filter(Boolean));

var a = setTimeout(() => console.log(1), 4000)

console.log(23, a)