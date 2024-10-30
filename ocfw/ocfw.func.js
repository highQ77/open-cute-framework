import { includeHTML, dynamicTpl } from './ocfw.js'

export let func = {
    routerLink(parent, ele, [params]) {
        let router = document.getElementById('router')
        router.innerHTML = ''
        router.setAttribute('html', params)
        includeHTML()
    },
    link(parent, ele, [params]) {
        window.open(params)
    },
    simpleBtn(parent, ele, params) {
        alert('simpleBtn:' + params.join(','))
    },
    alertBoxClose(parent, ele, params) {
        parent.remove()
    },
    alertBox(parent, ele, params) {
        let [msg] = params
        dynamicTpl(`<template class="alert_dialog" data-params="['${msg}']"></template>`)
    },
    confirmBoxClose(parent, ele, [params]) {
        let bool = eval(params)
        bool && alert('select ok')
        parent.remove()
    },
    confirmBox(parent, ele, params) {
        let [msg] = params
        dynamicTpl(`<template class="confirm_dialog" data-params="['${msg}']"></template>`)
    },
}