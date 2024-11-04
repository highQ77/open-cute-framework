export let page_ui_index = `
<main style="min-height: calc(100vh - 48px);">
    
    <!-- tools -->
    <div class="oc-px-56 oc-py-8 oc-color-bg-black oc-color-txt-white">
         <span>tools -></span>&nbsp;
        <template class="button" onclick="showClassInPage()" data-class="oc-bd-1 oc-color-bg-primary4 oc-color-txt-white oc-w-160" data-hover="oc-color-bd-yellow">page checker</template>
    </div>

    <!-- title info -->
    <div class="oc-py-120 animate-bg">
        <div class="oc-area oc-area-limit oc-middle">
            <div>
                <h1 class="oc-fs-30 oc-color-txt-white">Open Cute Framework <b class="oc-fs-13 oc-my-8">開源實驗框架</h1>
            </div>
            <div>
                <style>
                    .activeStyle {
                        outline: 2px solid yellow;
                    }
                </style>
                <template class="router" data-class="oc-right" data-active="activeStyle">
                    <template data-to="page_ui_features" class="button"
                        data-class="oc-color-bg-primary4 oc-color-txt-white oc-mx-4"
                        data-hover="oc-bd-4 oc-color-bd-orange">features</template>
                    <template data-to="page_ui_intro" class="button"
                        data-class="oc-color-bg-primary4 oc-color-txt-white oc-mx-4"
                        data-hover="oc-bd-4 oc-color-bd-orange">intro</template>
                    <!--<template data-to="page_ui_playground" class="button"
                        data-class="oc-color-bg-primary4 oc-color-txt-white oc-mx-4"
                        data-hover="oc-bd-4 oc-color-bd-orange">playground</template>-->
                    <template data-to="https://github.com/highQ77/open-cute-framework" class="button"
                        data-class="oc-color-bg-primary4 oc-color-txt-white oc-mx-4"
                        data-hover="oc-bd-4 oc-color-bd-orange">github</template>
                </template>
            </div>
        </div>
    </div>

    <div id="router"></div>

</main>

<footer class="oc-area oc-color-bg-black oc-mt-32">
    <div class="oc-color-txt-white oc-h-48 oc-center oc-middle">Open Cute Framework. 2024. Design by William77</div>
</footer>
`