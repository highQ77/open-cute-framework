export let carousel = {
    html(params) {
        return `
            <div class="oc-area">
                <div class="oc-pos-rel">
                    <div class="oc-h-640 oc-wp-100 oc-hidden oc-pos-rel">
                        <div class="carouselContent oc-pos-abs oc-h-640 oc-wp-100 oc-pointer-event-none" style="transition:left 1s;">
                            [slot]
                        </div>
                    </div>
                    <div class="oc-pos-abs oc-wp-100 oc-pos-t-0">
                        <div class="oc-area oc-area-v">
                            <div class="oc-area oc-wp-100 oc-h-640">
                                <div class="oc-left oc-middle"><div class="carouselLeft oc-color-txt-white oc-op-50 oc-color-bg-black oc-p-24 oc-m-8 oc-r-16 oc-fs-24 oc-cursor">❮</div></div>
                                <div class="oc-right oc-middle"><div class="carouselRight oc-color-txt-white oc-op-50 oc-color-bg-black oc-p-24 oc-m-8 oc-r-16 oc-fs-24 oc-cursor">❯</div></div>
                            </div>
                            <div class="carouselDots oc-pos-abs oc-center oc-bottom oc-wp-100 oc-h-640 oc-pb-32 oc-pointer-event-none">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    js(ele, params) {
        let height = params
        ele.innerHTML = ele.innerHTML.replace(/oc\-h\-640/ig, 'oc-h-' + height)

        let carouselContent = ele.getElementsByClassName('carouselContent')[0]
        let carouselDots = ele.getElementsByClassName('carouselDots')[0]
        let carouselLeft = ele.getElementsByClassName('carouselLeft')[0]
        let carouselRight = ele.getElementsByClassName('carouselRight')[0]

        let len = carouselContent.children.length;
        Array(len).fill(0).forEach(i => carouselDots.innerHTML += `<div class="oc-w-16 oc-h-16 oc-r-80 oc-m-8 oc-color-bg-white oc-pointer-event-all oc-cursor oc-op-80"></div>`)
        let dotStyle = carouselDots.children[0].className;
        [...carouselDots.children].reverse().forEach((c, idx) => {
            c.onclick = () => {
                index = idx;
                ani(index)
            }
        })
        let index = len - 1
        ani(index);
        [...carouselContent.children].forEach((c, idx) => {
            c.style.left = `${idx * 100}%`
            c.className += ' oc-h-' + height
        });
        carouselRight.onclick = () => {
            index--
            if (index == -1) index = len - 1
            ani(index)
        }
        carouselLeft.onclick = () => {
            index++
            if (index == len) index = 0
            ani(index)
        }
        return
        function ani(idx) {
            carouselContent.style.left = `${-100 * (len - idx - 1)}%`;
            [...carouselDots.children].forEach(c => c.className = dotStyle)
            carouselDots.children[len - idx - 1].className = dotStyle + ' ' + 'oc-ol-4';
        }
    }
}