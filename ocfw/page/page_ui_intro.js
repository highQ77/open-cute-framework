export let page_ui_intro = `
<div id="responsive" class="oc-area-limit">

    <!-- subject -->
    <div class="oc-pt-64 oc-fs-18">
        𖣐 Flex-Based Responsive Layout System
    </div>
    <div class="oc-py-24"></div>

    <!-- ex1 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example1 - auto distribution / 自動分配</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-py-8 = padding-top 8px + padding-bottom 8px </div>
        <div class="oc-fs-11"> oc-area = main grid container </div>
        <div class="oc-fs-11"> oc-bd-1 = 1px solid black border </div>
    </div>
    <div class="oc-py-8 oc-area">
        <div class="oc-bd-1">1/3</div>
        <div class="oc-bd-1">1/3</div>
        <div class="oc-bd-1">1/3</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-bd-1">1/3</div>
                <div class="oc-bd-1">1/3</div>
                <div class="oc-bd-1">1/3</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex2 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example2 - semi-manual distribution / 半自動分配</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-area-split-4 = split 4 columns </div>
    </div>
    <div class="oc-py-8 oc-area oc-area-split-4">
        <div class="oc-bd-1">1/10</div>
        <div class="oc-bd-1">2/10</div>
        <div class="oc-bd-1">3/10</div>
        <div class="oc-bd-1">4/10</div>
        <div class="oc-bd-1">5/10</div>
        <div class="oc-bd-1">6/10</div>
        <div class="oc-bd-1">7/10</div>
        <div class="oc-bd-1">8/10</div>
        <div class="oc-bd-1">9/10</div>
        <div class="oc-bd-1">10/10</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area oc-area-split-4">
                <div class="oc-bd-1">1/10</div>
                <div class="oc-bd-1">2/10</div>
                <div class="oc-bd-1">3/10</div>
                <div class="oc-bd-1">4/10</div>
                <div class="oc-bd-1">5/10</div>
                <div class="oc-bd-1">6/10</div>
                <div class="oc-bd-1">7/10</div>
                <div class="oc-bd-1">8/10</div>
                <div class="oc-bd-1">9/10</div>
                <div class="oc-bd-1">10/10</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex3 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example3 - custom distribution / 自定義分配</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-1 = 1/12 area</div>
        <div class="oc-fs-11"> oc-10 = 10/12 area</div>
    </div>
    <div class="oc-py-8 oc-area">
        <div class="oc-bd-1 oc-1">1/3</div>
        <div class="oc-bd-1 oc-10">2/3</div>
        <div class="oc-bd-1 oc-1">3/3</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-bd-1 oc-1">1/3</div>
                <div class="oc-bd-1 oc-10">2/3</div>
                <div class="oc-bd-1 oc-1">3/3</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex4 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example4 - 12 columns / 12欄分配設計</div>
    <div class="oc-py-8 oc-area">
        <div class="oc-bd-1">1/12</div>
        <div class="oc-bd-1">2/12</div>
        <div class="oc-bd-1">3/12</div>
        <div class="oc-bd-1">4/12</div>
        <div class="oc-bd-1">5/12</div>
        <div class="oc-bd-1">6/12</div>
        <div class="oc-bd-1">7/12</div>
        <div class="oc-bd-1">8/12</div>
        <div class="oc-bd-1">9/12</div>
        <div class="oc-bd-1">10/12</div>
        <div class="oc-bd-1">11/12</div>
        <div class="oc-bd-1">12/12</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-bd-1">1/12</div>
                <div class="oc-bd-1">2/12</div>
                <div class="oc-bd-1">3/12</div>
                <div class="oc-bd-1">4/12</div>
                <div class="oc-bd-1">5/12</div>
                <div class="oc-bd-1">6/12</div>
                <div class="oc-bd-1">7/12</div>
                <div class="oc-bd-1">8/12</div>
                <div class="oc-bd-1">9/12</div>
                <div class="oc-bd-1">10/12</div>
                <div class="oc-bd-1">11/12</div>
                <div class="oc-bd-1">12/12</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex5 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example5 - rwd settings / 響應式設計</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> sm--oc-12 = 12/12 area in sm mode</div>
        <div class="oc-fs-11"> md--oc-6 = 6/12 area in md mode</div>
        <div class="oc-fs-11"> lg--oc-4 = 4/12 area in lg mode</div>
    </div>
    <div class="oc-py-8 oc-area">
        <div class="oc-bd-1 xs--oc-12 sm--oc-3 md--oc-6 lg--oc-4">xs--oc-12 sm--oc-3 md--oc-6 lg--oc-4</div>
        <div class="oc-bd-1 xs--oc-12 sm--oc-3 md--oc-3 lg--oc-4">xs--oc-12 sm--oc-3 md--oc-3 lg--oc-4</div>
        <div class="oc-bd-1 xs--oc-12 sm--oc-6 md--oc-3 lg--oc-4">xs--oc-12 sm--oc-6 md--oc-3 lg--oc-4</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-bd-1 xs--oc-12 sm--oc-3 md--oc-6 lg--oc-4">xs--oc-12 sm--oc-3 md--oc-6 lg--oc-4</div>
                <div class="oc-bd-1 xs--oc-12 sm--oc-3 md--oc-3 lg--oc-4">xs--oc-12 sm--oc-3 md--oc-3 lg--oc-4</div>
                <div class="oc-bd-1 xs--oc-12 sm--oc-6 md--oc-3 lg--oc-4">xs--oc-12 sm--oc-6 md--oc-3 lg--oc-4</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex6 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example6 - alignment / 對齊</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-h-160 = height 160px </div>
    </div>
    <div class="oc-py-8 oc-area oc-h-160">
        <div class="oc-bd-1 oc-center">oc-center</div>
        <div class="oc-bd-1 oc-right">oc-right</div>
        <div class="oc-bd-1 oc-middle">oc-middle</div>
        <div class="oc-bd-1 oc-center oc-middle">oc-center oc-middle</div>
        <div class="oc-bd-1 oc-bottom">oc-bottom</div>
        <div class="oc-bd-1 oc-bottom oc-center">oc-bottom oc-center</div>
        <div class="oc-bd-1 oc-bottom oc-right">oc-bottom oc-right</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area oc-h-160">
                <div class="oc-bd-1 oc-center">oc-center</div>
                <div class="oc-bd-1 oc-right">oc-right</div>
                <div class="oc-bd-1 oc-middle">oc-middle</div>
                <div class="oc-bd-1 oc-center oc-middle">oc-center oc-middle</div>
                <div class="oc-bd-1 oc-bottom">oc-bottom</div>
                <div class="oc-bd-1 oc-bottom oc-center">oc-bottom oc-center</div>
                <div class="oc-bd-1 oc-bottom oc-right">oc-bottom oc-right</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex7 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example7 - custom width % / 自定義欄寬 %</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-max-w-20 = max-width 20%</div>
        <div class="oc-fs-11"> oc-w-auto = width auto</div>
    </div>
    <div class="oc-py-8 oc-area">
        <div class="oc-bd-1 oc-max-w-20">20%</div>
        <div class="oc-bd-1 oc-w-auto">auto</div>
        <div class="oc-bd-1 oc-max-w-20">20%</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-bd-1 oc-max-w-20">20%</div>
                <div class="oc-bd-1 oc-w-auto">auto</div>
                <div class="oc-bd-1 oc-max-w-20">20%</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex8 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example8 - custom width px / 自定義欄寬 px</div>
    <div class="oc-py-8 oc-area">
        <div class="oc-bd-1" style="max-width: 200px;">200px</div>
        <div class="oc-bd-1 oc-w-auto">auto</div>
        <div class="oc-bd-1" style="max-width: 200px;">200px</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-bd-1" style="max-width: 200px;">200px</div>
                <div class="oc-bd-1 oc-w-auto">auto</div>
                <div class="oc-bd-1" style="max-width: 200px;">200px</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex9 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example9 - nest structure / 巢狀結構</div>
    <div class="oc-py-8 oc-area">
        <div class="oc-area oc-bd-1 oc-6">
            <div class="oc-bd-1 oc-4">oc-4</div>
            <div class="oc-bd-1 oc-4">oc-4</div>
            <div class="oc-bd-1 oc-4">oc-4</div>
        </div>
        <div class="oc-bd-1 oc-6">oc-6</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-area oc-bd-1 oc-6">
                    <div class="oc-bd-1 oc-4">oc-4</div>
                    <div class="oc-bd-1 oc-4">oc-4</div>
                    <div class="oc-bd-1 oc-4">oc-4</div>
                </div>
                <div class="oc-bd-1 oc-6">oc-6</div>
            </div>
         </textarea>
    <div class="oc-py-24"></div>

    <!-- ex10 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example10 - rwd class / 響應式類別</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> sm--oc-fs-30 = font-size 30px in sm mode</div>
        <div class="oc-fs-11"> md--oc-fs-24 = font-size 24px in md mode</div>
        <div class="oc-fs-11"> lg--oc-fs-20 = font-size 20px in lg mode</div>
        <div class="oc-fs-11"> oc-fs-18 = font-size 18px</div>
    </div>
    <div class="oc-py-8 oc-area">
        <div class="oc-bd-1 sm--oc-fs-30 md--oc-fs-24 lg--oc-fs-20">sm--oc-fs-30 md--oc-fs-24 lg--oc-fs-20</div>
        <div class="oc-bd-1">text</div>
        <div class="oc-bd-1 oc-fs-18">oc-fs-18</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-bd-1 sm--oc-fs-30 md--oc-fs-24 lg--oc-fs-20">sm--oc-fs-30 md--oc-fs-24 lg--oc-fs-20</div>
                <div class="oc-bd-1">text</div>
                <div class="oc-bd-1 oc-fs-18">oc-fs-18</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex10 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example11 - rwd layout change / 響應式佈局排列改變</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-area-v = vertical arrangement</div>
    </div>
    <div class="oc-py-8 oc-area  xs--oc-area-v sm--oc-area-v">
        <div class="oc-bd-1">1/3</div>
        <div class="oc-bd-1">2/3</div>
        <div class="oc-bd-1">3/3</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area  xs--oc-area-v sm--oc-area-v">
                <div class="oc-bd-1">1/3</div>
                <div class="oc-bd-1">2/3</div>
                <div class="oc-bd-1">3/3</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

</div>

<template class="color_splitter"></template>

<div id="color" class="oc-area-limit">
    <!-- subject -->
    <div class="oc-pt-64 oc-fs-18">
        𖣐 Color Definition
    </div>
    <div class="oc-py-24"></div>

    <!-- ex1 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example1 - text color, background color, border & outline color/
        文字顏色,
        背景顏色, 框線顏色</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-color-txt-orange = text color is orange </div>
        <div class="oc-fs-11"> oc-color-bg-black = background color is black </div>
        <div class="oc-fs-11"> oc-bd-1 = border width is 1px </div>
        <div class="oc-fs-11"> oc-color-bd-orange = border color is orange </div>
        <div class="oc-fs-11"> oc-ol-4 = outline width is 4px </div>
        <div class="oc-fs-11"> oc-color-ol-black = outline color is black </div>
    </div>
    <div class="oc-py-8 oc-area">
        <div class="oc-color-txt-orange oc-color-bg-black oc-bd-1 oc-color-bd-orange oc-ol-4 oc-color-ol-black">
            oc-color-txt-orange oc-color-bg-black oc-bd-1 oc-color-bd-orange oc-ol-4 oc-color-ol-black
        </div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-color-txt-orange oc-color-bg-black oc-bd-1 oc-color-bd-orange oc-ol-4 oc-color-ol-black">
                    oc-color-txt-orange oc-color-bg-black oc-bd-1 oc-color-bd-orange oc-ol-4 oc-color-ol-black
                </div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>
</div>

<template class="color_splitter"></template>

<div id="spacing" class="oc-area-limit">
    <!-- subject -->
    <div class="oc-pt-64 oc-fs-18">
        𖣐 Spacing Definition
    </div>
    <div class="oc-py-24"></div>

    <!-- ex1 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example1 - padding
    </div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-{p|px|py|pl|pt|pr|pb}-spacing. ex:oc-p-8. 8px paddings</div>
    </div>
    <div class="oc-py-8 oc-area">
        <div class="oc-p-8 oc-bd-1 oc-color-bg-orange">
            <div class="oc-bd-1">oc-p-8</div>
        </div>
        <div class="oc-p-16 oc-bd-1 oc-color-bg-orange">
            <div class="oc-bd-1">oc-p-16</div>
        </div>
        <div class="oc-p-24 oc-bd-1 oc-color-bg-orange">
            <div class="oc-bd-1">oc-p-24</div>
        </div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-p-8 oc-bd-1 oc-color-bg-orange">
                    <div class="oc-bd-1">oc-p-8</div>
                </div>
                <div class="oc-p-16 oc-bd-1 oc-color-bg-orange">
                    <div class="oc-bd-1">oc-p-16</div>
                </div>
                <div class="oc-p-24 oc-bd-1 oc-color-bg-orange">
                    <div class="oc-bd-1">oc-p-24</div>
                </div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex2 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example2 - margin </div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-{m|mx|my|ml|mt|mr|mb}-spacing. ex:oc-mr-8. 8px margin right padding</div>
    </div>
    <div class="oc-py-8 oc-area">
        <div class="oc-bd-1 oc-py-8">
            <div class="oc-ml-2 oc-bd-1 oc-color-bg-orange oc-w-64">oc-ml-2</div>
        </div>
        <div class="oc-bd-1 oc-py-8">
            <div class="oc-ml-16 oc-bd-1 oc-color-bg-orange oc-w-64">oc-ml-16</div>
        </div>
        <div class="oc-bd-1 oc-py-8">
            <div class="oc-ml-40 oc-bd-1 oc-color-bg-orange oc-w-64">oc-ml-40</div>
        </div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8 oc-area">
                <div class="oc-bd-1 oc-py-8">
                    <div class="oc-ml-2 oc-bd-1 oc-color-bg-orange oc-w-64">oc-ml-2</div>
                </div>
                <div class="oc-bd-1 oc-py-8">
                    <div class="oc-ml-16 oc-bd-1 oc-color-bg-orange oc-w-64">oc-ml-16</div>
                </div>
                <div class="oc-bd-1 oc-py-8">
                    <div class="oc-ml-40 oc-bd-1 oc-color-bg-orange oc-w-64">oc-ml-40</div>
                </div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex3 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example3 - border & outline</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-{bd|bdl|bdt|bdr|bdb}-spacing. ex: oc-bd-2. 2px solid black border</div>
        <div class="oc-fs-11"> oc-ol-spacing. ex: oc-ol-2. 2px solid black outline</div>
    </div>
    <div class="oc-py-16 oc-area">
        <div class="oc-bd-1 oc-middle oc-p-4 oc-ol-8 oc-color-ol-orange">oc-bd-1 oc-ol-8</div>
        <div class="oc-bd-4 oc-middle oc-p-4 oc-ol-4 oc-color-ol-orange">oc-bd-4 oc-ol-4</div>
        <div class="oc-bd-8 oc-middle oc-p-4 oc-ol-1 oc-color-ol-orange">oc-bd-8 oc-ol-1</div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-16 oc-area">
                <div class="oc-bd-1 oc-middle oc-p-4 oc-ol-8 oc-color-ol-orange">oc-bd-1 oc-ol-8</div>
                <div class="oc-bd-4 oc-middle oc-p-4 oc-ol-4 oc-color-ol-orange">oc-bd-4 oc-ol-4</div>
                <div class="oc-bd-8 oc-middle oc-p-4 oc-ol-1 oc-color-ol-orange">oc-bd-8 oc-ol-1</div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex4 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example4 - width & height</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-w-spacing. width</div>
        <div class="oc-fs-11"> oc-h-spacing. height</div>
    </div>
    <div class="oc-py-16 oc-area oc-h-160">
        <div class="oc-bd-1 oc-p-4">
            <div class="oc-color-bg-orange oc-box oc-w-64 oc-h-64">oc-w-64 oc-h-64</div>
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle">
            <div class="oc-color-bg-orange oc-box oc-w-64 oc-h-64">oc-w-64 oc-h-64</div>
        </div>
        <div class="oc-bd-1 oc-p-4 oc-bottom oc-right">
            <div class="oc-color-bg-orange oc-box oc-w-64 oc-h-64">oc-w-64 oc-h-64</div>
        </div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-pb-16 oc-area oc-h-160">
                <div class="oc-bd-1 oc-p-4">
                    <div class="oc-color-bg-orange oc-box oc-w-64 oc-h-64">oc-w-64 oc-h-64</div>
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle">
                    <div class="oc-color-bg-orange oc-box oc-w-64 oc-h-64">oc-w-64 oc-h-64</div>
                </div>
                <div class="oc-bd-1 oc-p-4 oc-bottom oc-right">
                    <div class="oc-color-bg-orange oc-box oc-w-64 oc-h-64">oc-w-64 oc-h-64</div>
                </div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex5 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example5 - border radius</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-r-spacing. radius value(px)</div>
    </div>
    <div class="oc-py-16 oc-area oc-h-160">
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-2">
            oc-r-2
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-8">
            oc-r-8
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-16">
            oc-r-16
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-32">
            oc-r-32
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-80">
            oc-r-80
        </div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-16 oc-area oc-h-160">
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-2">
                    oc-r-2
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-8">
                    oc-r-8
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-16">
                    oc-r-16
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-32">
                    oc-r-32
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-r-80">
                    oc-r-80
                </div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex6 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example6 - 4 border radius corners</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> oc-{rtl|rtr|rbl|rbr}-spacing. radius value(px)</div>
    </div>
    <div class="oc-py-16 oc-area oc-h-160">
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rtl-16">
            oc-rtl-16
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rtr-16">
            oc-rtr-16
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rbl-16">
            oc-rbl-16
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rbr-16">
            oc-rbr-16
        </div>
        <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rtl-16 oc-rbr-16">
            oc-rtl-16 oc-rbr-16
        </div>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-16 oc-area oc-h-160">
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rtl-16">
                    oc-rtl-16
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rtr-16">
                    oc-rtr-16
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rbl-16">
                    oc-rbl-16
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rbr-16">
                    oc-rbr-16
                </div>
                <div class="oc-bd-1 oc-p-4 oc-center oc-middle oc-rtl-16 oc-rbr-16">
                    oc-rtl-16 oc-rbr-16
                </div>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

</div>

<template class="color_splitter"></template>

<div id="ui" class="oc-area-limit">
    <!-- subject -->
    <div class="oc-pt-64 oc-fs-18">
        𖣐 Essential UI Component Definition
    </div>
    <div class="oc-py-24"></div>

    <!-- ex1 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example1 - button</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> button = template button </div>
        <div class="oc-fs-11"> data-class = additional classes </div>
        <div class="oc-fs-11"> data-hover = hover classes </div>
    </div>
    <div class="oc-py-8">
        <template class="button" onclick="simpleBtn(1,window,window.atob)"
            data-hover="oc-bd-4 oc-color-bd-orange">primpary1</template>
        <template class="button" onclick="simpleBtn(2)" data-class="oc-color-bg-primary2">primpary2</template>
        <template class="button" data-class="oc-color-bg-primary3 oc-color-txt-white">primpary3</template>
        <template class="button" data-class="oc-color-bg-primary4 oc-color-txt-white">primpary4</template>
        <template class="button" data-class="oc-color-bg-primary5 oc-color-txt-white">primpary5</template>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8">
                <template class="button" onclick="simpleBtn(1,window,window.atob)"
            data-hover="oc-bd-4 oc-color-bd-orange">primpary1</template>
                <template class="button" onclick="simpleBtn(2)" data-class="oc-color-bg-primary2">primpary2</template>
                <template class="button" data-class="oc-color-bg-primary3 oc-color-txt-white">primpary3</template>
                <template class="button" data-class="oc-color-bg-primary4 oc-color-txt-white">primpary4</template>
                <template class="button" data-class="oc-color-bg-primary5 oc-color-txt-white">primpary5</template>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex2 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example2 - radio buttons</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> data-paramns = custom array to pass into template content </div>
    </div>
    <div class="oc-py-8">
        <template class="radio_buttons"
            data-params="['options', ['option1','option2','option3'], ['display text 1','display text 2','display text 3']]"></template>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8">
                <template class="radio_buttons"
                    data-params="['options', ['option1','option2','option3'], ['display text 1','display text 2','display text 3']]"></template>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex3 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example3 - checkbox buttons</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> data-paramns = custom array to pass into template content </div>
    </div>
    <div class="oc-py-8">
        <template class="checkbox_buttons"
            data-params="['checkbox', ['checkbox1','checkbox2','checkbox3'], ['checkbox 1','checkbox 2','checkbox 3']]"></template>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8">
                <template class="checkbox_buttons"
                    data-params="['checkbox', ['checkbox1','checkbox2','checkbox3'], ['checkbox 1','checkbox 2','checkbox 3']]"></template>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex4 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example4 - alert dialog</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> 1.define button as below</div>
        <div class="oc-fs-11"> 2.define alertBox function in ocfw.func.js</div>
        <div class="oc-fs-11"> 3.design alert dialog html in alert_dialog.js</div>
    </div>
    <div class="oc-py-8">
        <template class="button" onclick="alertBox('cool test 1')">alert-box-1</template>
        <template class="button"
            onclick="alertBox('cool test 2 cool test 2 cool test 2 cool test 2 cool test 2 cool test 2')">alert-box-2</template>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8">
                <template class="button" onclick="alertBox('cool test 1')">alert-box-1</template>
                <template class="button"
                    onclick="alertBox('cool test 2 cool test 2 cool test 2 cool test 2 cool test 2 cool test 2')">alert-box-2</template>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex5 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example5 - comfirm dialog</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11"> 1.define button as below</div>
        <div class="oc-fs-11"> 2.define confirmBox function in ocfw.func.js</div>
        <div class="oc-fs-11"> 3.design confirm dialog html in confirm_dialog.js</div>
    </div>
    <div class="oc-py-8">
        <template class="button" onclick="confirmBox('cool test A - comfirm box')">comfirm-box-1</template>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
            <div class="oc-py-8">
                <template class="button" onclick="confirmBox('cool test A - comfirm box')">comfirm-box-1</template>
            </div>
        </textarea>
    <div class="oc-py-24"></div>

    <!-- ex6 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example6 - select</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11">select</div>
    </div>
    <div class="oc-py-8">
        <template class="select" data-params="['運動 execise','吃飯 eat','睡覺 sleep']"></template>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
        <div class="oc-py-8">
            <template class="select" data-params="['運動 execise','吃飯 eat','睡覺 sleep']"></template>
        </div>
    </textarea>
    <div class="oc-py-24"></div>

    <!-- ex7 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example7 - image</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        <div class="oc-fs-11">data-src = image source</div>
        <div class="oc-fs-11">data-size = image bakcground-size style </div>
    </div>
    <div class="oc-area oc-py-8">
        <template class="image" data-src="./img/test.png" data-class="oc-h-160" data-size="auto">
            <div class="oc-p-8 oc-color-bg-black oc-color-txt-white oc-op-50">Auto</div>
        </template>
        <template class="image" data-src="./img/test.png" data-class="oc-h-160" data-size="cover">
            <div class="oc-p-8 oc-color-bg-black oc-color-txt-white oc-op-50">Cover</div>
        </template>
        <template class="image" data-src="./img/test.png" data-class="oc-h-160" data-size="contain">
            <div class="oc-p-8 oc-color-bg-black oc-color-txt-white oc-op-50">Contain</div>
        </template>
        <template class="image" data-src="./img/test.png" data-class="oc-h-160" data-size="full">
            <div class="oc-p-8 oc-color-bg-black oc-color-txt-white oc-op-50">Full</div>
        </template>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
        <div class="oc-area oc-py-8">
            <template class="image" data-src="./img/test.png" data-class="oc-h-160" data-size="auto">
                <div class="oc-p-8 oc-color-bg-black oc-color-txt-white oc-op-50">Auto</div>
            </template>
            <template class="image" data-src="./img/test.png" data-class="oc-h-160" data-size="cover">
                <div class="oc-p-8 oc-color-bg-black oc-color-txt-white oc-op-50">Cover</div>
            </template>
            <template class="image" data-src="./img/test.png" data-class="oc-h-160" data-size="contain">
                <div class="oc-p-8 oc-color-bg-black oc-color-txt-white oc-op-50">Contain</div>
            </template>
            <template class="image" data-src="./img/test.png" data-class="oc-h-160" data-size="full">
                <div class="oc-p-8 oc-color-bg-black oc-color-txt-white oc-op-50">Full</div>
            </template>
        </div>
    </textarea>
    <div class="oc-py-24"></div>

</div>

<template class="color_splitter"></template>

<div id="advui" class="oc-area-limit">
    <!-- subject -->
    <div class="oc-pt-64 oc-fs-18">
        𖣐 Advanced UI Component Definition
    </div>
    <div class="oc-py-24"></div>

    <!-- ex1 -->
    <div class="oc-fs-12 oc-bdl-4 oc-pl-4"> example1 - slider</div>
    <div class="oc-bdl-1 oc-pl-4 oc-p-8">
        advanced component
    </div>
    <div class="oc-py-8">
        <template class="slider" data-params="[['slide01','sayhi02','run03'],['./img/test.png','./img/test2.png','./img/test3.png']]"></template>
    </div>
    <textarea class="oc-wp-100 oc-p-8">
        <template class="slider" data-params="[['slide01','sayhi02','run03'],['./img/test.png','./img/test2.png','./img/test3.png']]"></template>
    </textarea>
    <div class="oc-py-24"></div>

</div>
`