export let toggle = {
    html(params) {
        const [name, value] = params
        return `
            <div class="oc-pos-rel">
                <div class="oc-pos-abs oc-w-56 oc-h-24 oc-middle">
                    <div class="toggleControl oc-pos-abs oc-mx-4 oc-w-16 oc-h-16 oc-r-16 oc-color-bg-black" style="transition: left .5s;"></div>
                </div>
                <div class="toggleBG oc-cursor oc-bd-2 oc-color-bd-black oc-p-12 oc-r-80 oc-box oc-w-48 oc-h-24 oc-center oc-middle oc-box-shadow" style="transition: background-color .5s;">
                    <input type="checkbox" class="toggleHidden oc-h-24 oc-cursor oc-wp-100 oc-op-0" name="${name}" value="${value}" />
                </div>
            </div>
        `
    },
    js(ele) {
        let t = ele.getElementsByClassName('toggleControl')[0]
        let cb = ele.getElementsByClassName('toggleHidden')[0]
        let bg = ele.getElementsByClassName('toggleBG')[0]
        cb.onclick = () => {
            t.style.left = cb.checked ? "24px" : "0px";
            bg.style.backgroundColor = cb.checked ? "yellowgreen" : "gray";
        }
        cb.onclick()
    }
}