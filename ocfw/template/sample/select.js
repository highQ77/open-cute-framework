export let select = {
    html(params) {
        return `
            <div>
                <template class="button">
                    <div class="oc-area oc-pos-abs oc-w-120">
                        <div class="oc-w-60 oc-px-8 oc-center">please select</div>
                    </div>
                    <div class="oc-area oc-pos-abs oc-w-120">
                        <div class="oc-w-60 oc-px-8 oc-right">▼</div>
                    </div>
                    <select class="oc-wp-100 oc-op-0 oc-cursor" onchange="this.parentElement.children[0].children[0].innerText=this.value">
                        <option>please select</option>
                        ${params.map(i => `<option>${i}</option>`).join('')}
                    </select>    
                </template>
            </div>
        `
    },
}