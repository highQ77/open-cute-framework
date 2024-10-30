import { includeHTML, dynamicTpl } from './ocfw.js'

export let func = {
    routerLink(parent, ele, [params]) {
        let router = document.getElementById('router')
        router.innerHTML = ''
        router.setAttribute('html', params)
        includeHTML()
        let pageId = params.split('/').pop().split('.')[0]
        let url = location.protocol + '//' + location.host + '/#/' + pageId
        location.href = url;
        [...ele.parentElement.children].forEach(link => {
            if (link == ele) {
                link.style.setProperty('outline', '4px solid yellow')
            } else {
                link.style.setProperty('outline', '')
            }
        })
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