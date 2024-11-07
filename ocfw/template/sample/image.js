export let image = {
    html() {
        return `
            <div>[slot]</div>
        `
    },
    js(ele, params) {
        if (params) {
            ele.style.width = params.width + 'px';
            ele.style.height = params.height + 'px';
        }
    }
}