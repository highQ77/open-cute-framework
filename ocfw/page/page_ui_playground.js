export let page_ui_playground = `
<div class="oc-px-24">
    <div class="oc-area-limit">
        <div class="oc-area oc-py-24">
            <div>
                <template class="button" onclick="runCode('codearea','coderesult')"
                    data-class="oc-color-bg-primary4 oc-color-txt-white" data-hover="oc-bd-4 oc-color-bd-orange">Run code</template>
            </div>
        </div>
        <div class="oc-area">
            <textarea id="codearea" class="oc-p-4 oc-color-bg-primary4 oc-color-txt-white oc-h-320 oc-min-h-320">
                <template class="button" data-class="oc-color-bg-primary4 oc-color-txt-white oc-mr-4" data-hover="oc-bd-4 oc-color-bd-orange" onclick="alertBox('Wow')">Hello</template>
            </textarea>
            <div id="coderesult" class="oc-p-4 oc-bd-1">
                result is here
            </div>
        </div>
    </div>
</div>
`