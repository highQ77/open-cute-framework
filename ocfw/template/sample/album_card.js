export let album_card = {
    html() {
        return `
            <div class="oc-area-v xs--oc-12 sm--oc-6 oc-mt-24">
                <div class="oc-rtl-8 oc-rtr-8 oc-h-160 oc-fs-18 oc-color-bg-black oc-color-txt-white oc-center oc-middle">
                    Thumbnail
                </div>
                <div class="oc-rbl-8 oc-rbr-8 oc-color-bg-white oc-p-16">
                    <div class="oc-fs-16 oc-pb-24">
                        This is a wider card with
                        supporting text below
                        as
                        a natural
                        lead-in
                        to additional content. This content is a little bit longer.
                    </div>
                    <div class="oc-right">
                        <template class="button" data-class="oc-color-bg-primary4 oc-color-txt-white">Go</template>
                    </div>
                </div>
            </div>
        `
    },
}