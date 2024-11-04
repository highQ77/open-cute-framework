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

        let routerView = document.getElementById('router_' + ele.id);

        // bind event for children
        [...ele.children].forEach(ch => {
            ch.addEventListener('click', () => go(ch.dataset.to))
        })

        // first call
        let ch = ele.children[0]
        requestAnimationFrame(() => go(ch.dataset.to))

        // onpopstate event
        // ch.dataset.to.split('/').length == 1 &&
        window.addEventListener('popstate', function (event) {

            let pageId = location.href.split('/#/')[1]

            // open new tab
            if (pageId.indexOf('http') > -1) {
                window.open(pageId)
                return
            }

            // active style
            [...ele.children].forEach(link => {
                link.classList.remove(ele.dataset.active)
                if (link.dataset.to == pageId) {
                    let content = rc.html[pageId]
                    routerView.innerHTML = content
                    rc.updateUI()
                    this.requestAnimationFrame(() => link.classList.add(ele.dataset.active))
                }
            })
        });

        function go(pageId) {
            let path = (location.host == 'highq77.github.io' ? location.host + '/open-cute-framework' : location.host);
            let url = location.protocol + '//' + path + '/#/' + pageId
            history.pushState({}, '', url);
            window.dispatchEvent(new Event('popstate'));
        }

    }
}