import { rc } from "../../ocfw.js"

export let router = {
    html() {
        return `
            <nav>
                [slot]
            </nav>
        `
    },
    js(ele) {

        let routerView = document.getElementById('router_' + ele.id);

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
        requestAnimationFrame(popstate)

        // popstate
        window.addEventListener('popstate', popstate)

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
                let idx = segs[0]

                // set default link 
                let result = window.alllink.filter(v => v.indexOf(idx) > -1)[0]
                if (result && result.indexOf(pageId) > -1) {
                    segs = result.split('/')
                }

                // recursive rendering                
                let allIds = []
                let ids = [...segs];
                for (let i = 1; i <= segs.length; i++) {
                    allIds.push(ids.slice(0, i).join('/'))
                }
                allIds.forEach(id => updateView(id))
            }
            else window.removeEventListener('popstate', popstate)
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
            [...ele.children].forEach(link => {
                link.classList.remove(ele.dataset.active)
                if (link.dataset.to == pageId) {
                    // console.log('active', pageId)
                    routerView.innerHTML = rc.html[pageId]
                    rc.updateUI()
                    requestAnimationFrame(() => link.classList.add(ele.dataset.active))
                }
            })
        }

    }
}