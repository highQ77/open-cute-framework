export let alert_dialog = {
    html(params) {
        let [msg] = params
        return `
            <div class="oc-cover oc-z-index-dialog oc-center oc-middle">
                <div class="oc-area oc-color-bg-white oc-w-320 oc-area-v oc-r-8 oc-color-bg-secondary5 oc-center">
                    <div class="oc-color-bg-black oc-rtl-8 oc-rtr-8 oc-p-4 oc-center oc-color-txt-white">Alert</div>
                    <div class="oc-rbl-8 oc-rbr-8 oc-p-16 oc-center">${msg}</div>
                    <div class="oc-center oc-my-8">
                        <template class="button" data-class="oc-color-bg-primary5 oc-color-txt-white" onclick="alertBoxClose()">OK</template>
                    </div>
                </div>
            </div>
        `;
    },
}