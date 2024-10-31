import { rc } from './ocfw.js'

let href = location.href

export let func = {
    routerLink(parent, ele, [params]) {
        let pageId = params.split('/').pop().split('.')[0]

        let router = document.getElementById('router')
        router.innerHTML = ''

        let r = document.getElementById('router')
        r.innerHTML = rc[pageId]
        // router.setAttribute('html', params)

        let url = href + '/#/' + pageId
        location.href = url;
        [...ele.parentElement.children].forEach(link => {
            if (link == ele) {
                link.style.setProperty('outline', '4px solid yellow')
            } else {
                link.style.setProperty('outline', '')
            }
        })
        rc.updateUI()
    },
    link(parent, ele, [params]) {
        window.open(params);
        [...ele.parentElement.children].forEach(link => {
            if (link == ele) {
                link.style.setProperty('outline', '4px solid yellow')
            } else {
                link.style.setProperty('outline', '')
            }
        })
    },
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
    }
}