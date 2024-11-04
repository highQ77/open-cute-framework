export let album_card = {
    html(params) {
        return `
            <div class="oc-area-v xs--oc-12 sm--oc-6 oc-mt-24 oc-box-shadow oc-r-8 oc-color-bg-white">
                <div class="oc-rtl-8 oc-rtr-8 oc-h-160 oc-fs-24 oc-color-bg-black oc-color-txt-white oc-center oc-middle">
                    ${params}
                </div>
                <div class="oc-rbl-8 oc-rbr-8 oc-p-16">
                    [slot]
                </div>
            </div>
        `
    },
}