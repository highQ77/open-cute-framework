import { rc } from './ocfw.js'

export let func = {
    simpleBtn(parent, ele, params) {
        alert('simpleBtn:' + params.join(','))
    },
    alertBoxClose(parent, ele, params) {
        parent.remove()
    },
    alertBox(parent, ele, params) {
        let [msg] = params
        rc.appendTpl(`<template class="alert_dialog" data-params="['${msg}']"></template>`)
    },
    confirmBoxClose(parent, ele, [params]) {
        let bool = eval(params)
        bool && alert('select ok')
        parent.remove()
    },
    confirmBox(parent, ele, params) {
        let [msg] = params
        rc.appendTpl(`<template class="confirm_dialog" data-params="['${msg}']"></template>`)
    },
    runCode(parent, ele, params) {
        let [codeAreaID, codeResultID] = params
        let codeArea = document.getElementById(codeAreaID)
        let codeResult = document.getElementById(codeResultID)
        codeResult.innerHTML = codeArea.value
        rc.updateUI()
    },
    showClassInPage(parent, ele, params) { // 顯示 page 裡面所有用到的 class
        let all = '';
        [...document.getElementsByTagName('*')].forEach(e => {
            all += ' ' + e.className + ' '
        })
        all = all.split(' ').map(e => e.trim(e))
            .filter(e => e != "")
            .filter((value, index, array) => array.indexOf(value) === index)
            .sort()
        func.alertBox(parent, ele, [all.map(i => i + '<br>').join('')])
    }
}