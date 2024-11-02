import { rc } from './ocfw.js'

export let func = {
    pushUrl(href) {
        history.pushState({}, '', href);
        window.dispatchEvent(new Event('popstate'));
        rc.updateUI()
    },
    routerLink(parent, ele, params) {

        let pageId = ele.id

        if (ele.children.length) {
            // init once
            [...ele.children].forEach(ch => {
                ch.addEventListener('click', () => {
                    func.routerLink(null, ch, null)
                })
            })
            // set routerLink
            let sharpAfter = location.href.split('/#/')[1]
            let idx = [...ele.children].findIndex(e => e.id == sharpAfter)
            ele = ele.children[idx == -1 ? 0 : idx]
            pageId = ele.id
            func.routerLink(null, document.getElementById(pageId), null)
            let currentHref = location.href
            window.addEventListener('popstate', () => {
                if (currentHref != location.href) {
                    currentHref = location.href
                    let pageId = location.href.split('/#/')[1]
                    func.routerLink(null, document.getElementById(pageId), null)
                }
            });
            return
        }

        let activeParent = ele.parentElement;
        [...activeParent.children].forEach((link, i) => {
            link.classList.remove(activeParent.dataset.active)
            if (link == ele) {
                link.classList.add(activeParent.dataset.active)
            }
        })

        if (ele.id.indexOf('http') > -1) {
            window.open(ele.id)
            return
        }

        let router = document.getElementById('router')
        router.innerHTML = rc.html[pageId]
        let path = (location.host == 'highq77.github.io' ? location.host + '/open-cute-framework' : location.host);
        let url = location.protocol + '//' + path + '/#/' + pageId
        func.pushUrl(url)
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