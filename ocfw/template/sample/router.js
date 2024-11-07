import { rc } from "../../index.js"

// [step1] ipmort htmls
import { features } from "../../page/feature.js";
import { index } from "../../page/index.js"
import { intro } from "../../page/intro.js";
import { test } from "../../page/test.js";
import { test2 } from "../../page/test2.js";
import { testA } from "../../page/testA.js";
import { testB } from "../../page/testB.js";
import { tutorial } from "../../page/tutorial.js";
// .... add import here

// [step2] register router page 
// 'index': routerReplace(index, 0),
// 1.'index' -> router path
// 2. routerReplace -> replace content
// 3. (index, 0) -> html page instance, 0 is level
const html = {
    'index': routerReplace(index, 0),
    'intro': routerReplace(intro, 1),
    'tutorial': routerReplace(tutorial, 1),
    'features': routerReplace(features, 1),
    'intro/test': routerReplace(test, 2),
    'intro/test2': routerReplace(test2, 2),
    'intro/test2/testA': routerReplace(testA, 3),
    'intro/test2/testB': routerReplace(testB, 3),
    // .... register router here
}

// ---------- do not change code bellow

// initialize router
requestAnimationFrame(() => rc.initRouter(html.index))

// replace router content
function routerReplace(html, level) {

    // replace
    html = html
        .replace('[routerView]', `<div id="rv_${level}"></div>`)
        .replace('class="router"', ` id="${level}" class="router" `)

    // let data-params value support object type
    let objs = [...html.matchAll(/data\-params+=".+?"/ig)].map(([i]) => i.replace('data-params=\"', '').replace('\"', '')).filter(i => i[0] == '{')
    objs.forEach(i => html = html.replace(new RegExp(i, 'ig'), '___' + btoa(i)))

    return html
}

export let router = {
    html() {
        return `
            <nav>
                [slot]
            </nav>
        `
    },
    js(ele) {

        let routerView = document.getElementById('rv_' + ele.id);
        routerView.popstate = popstate

        // all page id
        window.alllink = window.alllink || [];
        [...ele.children].forEach(ch => {
            if (ch.dataset.to.indexOf('http') == -1)
                window.alllink.push(ch.dataset.to)
            window.alllink = window.alllink.filter((value, index, array) => array.indexOf(value) === index)
                .filter(v => v.indexOf('/') > -1)
        });

        // bind event for children
        [...ele.children].forEach(ch => ch.onclick = () => go(ch.dataset.to))

        // first call
        popstate()

        // popstate
        window.addEventListener('popstate', popstate)

        // repeat
        let repeat = '_'

        // onpopstate event
        function popstate() {
            let pageId = location.href.split('/#/')[1]

            // http://localhost:5500 => no router url
            if (!pageId) {
                pageId = ele.children[0].dataset.to
            }

            // open new tab
            if (pageId.indexOf('http') > -1) {
                window.open(pageId)
                return
            }

            // render page
            let rv = document.getElementById(routerView.id)

            if (rv) {
                let segs = pageId.split('/')
                let id = ''
                for (let i = 0; i < segs.length; i++) {
                    id += '/' + segs.shift()
                    updateView(id.slice(1))
                    i--;
                }
                let idx = alllink.findIndex(i => i.indexOf(pageId + '/') > -1);
                if (idx > -1) { updateView(alllink[idx]) }
            }

            // 父 router 切換時子 router 需要刪除 popstate
            let subRouter = document.getElementById('rv_' + (parseInt(routerView.id.split('_')[1]) + 1))
            if (subRouter) {
                window.removeEventListener('popstate', subRouter.popstate)
                subRouter.popstate = null
            }
        }

        // go to page
        function go(pageId) {
            let path = (location.host == 'highq77.github.io' ? location.host + '/open-cute-framework' : location.host);
            let url = location.protocol + '//' + path + '/#/' + pageId
            history.pushState({}, '', url);
            window.dispatchEvent(new Event('popstate'));
        }

        function updateView(pageId) {
            // active style
            [...ele.children].forEach((link, i, arr) => {
                link.classList.remove(ele.dataset.active)
                if (link.dataset.to == pageId) {
                    routerView.innerHTML = html[pageId]
                    rc.updateUI(routerView)
                    requestAnimationFrame(() => link.classList.add(ele.dataset.active))
                }
            })
        }

    }
}
