export let page_ui_index = `
 <main style="min-height: calc(100vh - 48px);">
    <!-- title info -->
    <div class="oc-area oc-color-bg-primary2">
        <div class="oc-my-56 oc-p-8 oc-area-limit">
            <h1 class="oc-fs-30">Open Cute Framework <b class="oc-fs-13 oc-my-8">開源實驗框架</b>
            </h1>

            <div class="oc-area-limit">
                <ol class="oc-p-24">
                    <li>React / Vue / Angular 以外的新選擇</li>
                    <li>適合開發開源的專案、學生專案、網站原型、行銷網站、非機敏性高的網站使用</li>
                    <li>快速開發不用編譯直接預覽 (推薦使用 VSCode Live Server)</li>
                    <li>組件化系統，組建可分享減少反覆造輪</li>
                    <li>CSS RWD 設計除了 layout 以外，其他屬性也可以配置 RWD 效果，譬如不同斷點不同字級顯示</li>
                    <li>有 Router 機制</li>
                    <li>Author William77</li>
                </ol>
            </div>

            <style>
                .activeStyle {
                    outline: 4px solid yellow;
                }
            </style>
            <template class="router" data-class="oc-right" data-init="routerLink()" data-active="activeStyle">
                <template id="page_ui_intro" class="button"
                    data-class="oc-color-bg-primary4 oc-color-txt-white oc-mr-4"
                    data-hover="oc-bd-4 oc-color-bd-orange">home</template>
                <template id="page_ui_design" class="button"
                    data-class="oc-color-bg-primary4 oc-color-txt-white oc-mr-4"
                    data-hover="oc-bd-4 oc-color-bd-orange">design</template>
                <template id="page_ui_playground" class="button"
                    data-class="oc-color-bg-primary4 oc-color-txt-white oc-mr-4"
                    data-hover="oc-bd-4 oc-color-bd-orange">playground</template>
                <template id="https://github.com/highQ77/open-cute-framework" class="button"
                    data-class="oc-color-bg-primary4 oc-color-txt-white"
                    data-hover="oc-bd-4 oc-color-bd-orange">github</template>
            </template>
        </div>
    </div>

    <template class="color_splitter"></template>

    <div id="router"></div>

</main>

<footer class="oc-area oc-color-bg-black oc-mt-32">
    <div class="oc-color-txt-white oc-h-48 oc-center oc-middle">Open Cute Framework. 2024. Design by William77</div>
</footer>
`