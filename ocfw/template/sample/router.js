import { rc } from "../../ocfw.js"

export let router = {
    html() {
        return `
            <nav>
                [slot]
            </nav>
        `
    },
    js(ele, params) {

        // bind event for children
        [...ele.children].forEach(ch => {
            ch.addEventListener('click', () => linkTo(ch.dataset.to))
        })

        // first call
        let ch = getCurrentChild()
        requestAnimationFrame(() => linkTo(ch.dataset.to))

        // onpopstate event
        window.onpopstate = function (event) {
            let pageId = location.href.split('/#/')[1]
            linkTo(pageId, true);
        };

        let routerView = document.getElementById('router_' + ele.id)
        return

        // get element by location.href
        function getCurrentChild() {
            let pageId = location.href.split('/#/')[1]
            let idx = [...ele.children].findIndex(e => e.dataset.to == pageId)
            return ele.children[idx == -1 ? 0 : idx]
        }

        function linkTo(pageId, params) {

            // open new tab
            if (pageId.indexOf('http') > -1) {
                window.open(pageId)
                return
            }

            // set router
            routerView.innerHTML = rc.html[pageId] + '';
            rc.updateUI();

            // active style
            [...ele.children].forEach((link, i) => {
                link.classList.remove(ele.dataset.active)
                if (link == getCurrentChild()) {
                    link.classList.add(ele.dataset.active)
                }
            })

            // trigger popstate
            if (!params) {
                let path = (location.host == 'highq77.github.io' ? location.host + '/open-cute-framework' : location.host);
                let url = location.protocol + '//' + path + '/#/' + pageId
                history.pushState({}, '', url);
                window.dispatchEvent(new Event('popstate'));
            }
        }
    }
}