export let slider = {
    html(params) {
        let [titles, srcs] = params
        titles.reverse()
        srcs.reverse()
        return `
            <div class="oc-area">
                <div class="oc-pos-rel">
                    <div class="oc-h-640 oc-wp-100 oc-overflow-hidden oc-pos-rel">
                        <div class="sliderContent oc-pos-abs oc-h-640 oc-wp-100 oc-pointer-event-none" style="transition:left 1s;">
                            ${titles.map((t, idx) => `
                                        <template class="image" data-src="${srcs[idx]}" data-class="oc-pos-abs oc-h-640 oc-wp-100 oc-center oc-middle" data-size="cover">
                                            <div class="oc-color-txt-white oc-fs-72">${t}</div>
                                        </template>`).join('')}
                        </div>
                    </div>
                    <div class="oc-pos-abs oc-wp-100 oc-pos-t-0">
                        <div class="oc-area oc-area-v">
                            <div class="oc-area oc-wp-100 oc-h-640">
                                <div class="oc-left oc-middle"><div class="sliderLeft oc-color-txt-white oc-op-50 oc-color-bg-black oc-p-24 oc-m-8 oc-r-16 oc-fs-24 oc-cursor">&lt;</div></div>
                                <div class="oc-right oc-middle"><div class="sliderRight oc-color-txt-white oc-op-50 oc-color-bg-black oc-p-24 oc-m-8 oc-r-16 oc-fs-24 oc-cursor">&gt;</div></div>
                            </div>
                            <div class="sliderDots oc-pos-abs oc-center oc-bottom oc-wp-100 oc-h-640 oc-pb-32 oc-pointer-event-none">
                                ${titles.map(t => `<div class="oc-w-16 oc-h-16 oc-r-80 oc-m-8 oc-color-bg-white oc-pointer-event-all oc-cursor"></div>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    js(ele) {
        let sliderContent = ele.getElementsByClassName('sliderContent')[0]
        let sliderDots = ele.getElementsByClassName('sliderDots')[0]
        let sliderLeft = ele.getElementsByClassName('sliderLeft')[0]
        let sliderRight = ele.getElementsByClassName('sliderRight')[0]
        let len = sliderDots.children.length;
        let dotStyle = sliderDots.children[0].className;
        [...sliderDots.children].reverse().forEach((c, idx) => {
            c.onclick = () => {
                index = idx;
                ani(index)
            }
        })
        let index = len - 1
        ani(index);
        [...sliderContent.children].reverse().forEach((c, idx) => c.style.left = `${idx * 100}%`);
        sliderRight.onclick = () => {
            index--
            if (index == -1) index = len - 1
            ani(index)
        }
        sliderLeft.onclick = () => {
            index++
            if (index == len) index = 0
            ani(index)
        }
        return
        function ani(idx) {
            sliderContent.style.left = `${-100 * (len - idx - 1)}%`;
            [...sliderDots.children].forEach(c => c.className = dotStyle)
            sliderDots.children[len - idx - 1].className = dotStyle + ' ' + 'oc-ol-4';
        }
    }
}