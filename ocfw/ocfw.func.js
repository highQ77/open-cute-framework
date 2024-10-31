import { rc } from './ocfw.js'

export let func = {
    routerLink(parent, ele, [params]) {

        let pageId = ele.id

        if (ele.children.length) {
            let idx = [...ele.children].findIndex(e => e.id == pageId)
            ele = ele.children[idx == -1 ? 0 : idx]
            pageId = ele.id
        }

        let active = ele.parentElement;
        [...active.children].forEach(link => {
            if (link == ele) {
                link.style.setProperty('outline', '4px solid yellow')
            } else {
                link.style.setProperty('outline', '')
            }
        })

        if (ele.id.indexOf('http') > -1) {
            window.open(ele.id)
            return
        }

        let router = document.getElementById('router')
        router.innerHTML = rc[pageId]
        let path = (location.host == 'highq77.github.io' ? location.host + '/open-cute-framework' : location.host);
        let url = location.protocol + '//' + path + '/#/' + pageId
        location.href = url;

        rc.updateUI()
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