// js import
import { config } from './ocfw.config.js'
import { template } from './ocfw.templates.js'
import { func } from './ocfw.func.js'
import { page_ui_intro } from './page/page_ui_intro.js'
import { page_ui_design } from './page/page_ui_design.js'
import { page_ui_playground } from './page/page_ui_playground.js'

// css import
let styleStr = `
    @import url(./ocfw/ocfw-normalize.css);
    @import url(./ocfw/ocfw-layout.css);
    @import url(./ocfw/ocfw-misc.css);
    @import url(./ocfw/bootstrap-icons/font/bootstrap-icons.min.css);

    :root {
        /* the gutter of rows and columns */
        --oc-layout-gutter: ${config.layout_gutter}px;
        /* the width of oc-area element */
        --oc-area-limit: ${config.area_limit}px;
        /* the height of oc-area child elements */
        --oc-area-children-default-height: ${config.area_children_default_height}px;
    }
`
// ================================================================================================================================== //

// different breakpoints settings
let loopTimes = 0
let bpKeys = Object.keys(config.breakpoints)
let colorKeys = Object.keys(config.colors)
let ocstr = ''
bpKeys.forEach((bp, idx) => {
    let bpmin = config.breakpoints[bp].min;
    let bpmax = config.breakpoints[bp].max;

    /* ********************************** responsive design ************************************** */
    let columns = config.page_columns

    let str = `@media(min-width: ${bpmin}px) and (max-width: ${bpmax}px) {`

    // rwd
    for (let i = columns; i > 0; i--) {
        let cellW = '';
        if (i == columns) {
            cellW += `--oc-cell-width: 100%;`
        } else {
            cellW += `--oc-cell-width: calc(${100 / columns * i}% - var(--oc-layout-gutter) + var(--gutter-fix));`
        }
        str += `.oc-area>.${bp}--oc-${i} {${cellW}}`
    }

    // breakpoints info
    if (config.show_breakpoints_info)
        str += `body::before {content:'${bp.toLocaleUpperCase()}-${bpmin}~${bpmax}';position:fixed;bottom:0px;background:rgba(0,0,0,.5);color:white;padding:8px}`

    /* ********************************** layout ************************************** */
    // layout vertical
    str += `.${bp}--oc-area-v {flex-direction: column;}`
    str += `.${bp}--oc-area-v>* {width: 100% !important;}`
    if (bpKeys.length - 1 == idx) {
        ocstr += `.oc-area-v {flex-direction: column;}`
        ocstr += `.oc-area-v>* {width: 100% !important;}`
    }

    /* ********************************** html element spacing ************************************** */
    let spacing_level = config.spacing_level
    let width_percentage = config.width_percentage

    // width-class ex: sm--oc-w-25 (%) / oc-w-20 (%) / oc-w-auto
    for (let i = 0; i < width_percentage.length; i++) {
        let percentage = width_percentage[i]
        if (percentage == 'auto') {
            str += `.${bp}--oc-wp-${percentage} {width:${percentage} !important;}`
            str += `.${bp}--oc-min-wp-${percentage} {min-width:${percentage} !important;}`
            str += `.${bp}--oc-max-wp--${percentage} {max-width:${percentage} !important;}`
            if (bpKeys.length - 1 == idx) {
                ocstr += `.oc-wp-${percentage} {width:${percentage} !important;}`
                ocstr += `.oc-min-wp-${percentage} {min-width:${percentage} !important;}`
                ocstr += `.oc-max-wp-${percentage} {max-width:${percentage} !important;}`
            }
        } else {
            str += `.${bp}--oc-wp-${percentage} {width:${percentage}% !important;}`
            str += `.${bp}--oc-min-wp-${percentage} {min-width:${percentage}% !important;}`
            str += `.${bp}--oc-max-wp-${percentage} {max-width:${percentage}% !important;}`
            if (bpKeys.length - 1 == idx) {
                ocstr += `.oc-wp-${percentage} {width:${percentage}% !important;}`
                ocstr += `.oc-min-wp-${percentage} {min-width:${percentage}% !important;}`
                ocstr += `.oc-max-wp-${percentage} {max-width:${percentage}% !important;}`
            }
        }
    }
    for (let i = 0; i < spacing_level.length; i++) {
        let spacing = spacing_level[i]
        str += `.${bp}--oc-w-${spacing} {width:${spacing}px !important;}`
        str += `.${bp}--oc-min-w-${spacing} {min-width:${spacing}px !important;}`
        str += `.${bp}--oc-max-w-${spacing} {max-width:${spacing}px !important;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-w-${spacing} {width:${spacing}px !important;}`
            ocstr += `.oc-min-w-${spacing} {min-width:${spacing}px !important;}`
            ocstr += `.oc-max-w-${spacing} {max-width:${spacing}px !important;}`
        }
    }

    // height-class ex: sm--oc-h-72 / oc-h-8 (px)
    for (let i = 0; i < spacing_level.length; i++) {
        let spacing = spacing_level[i]
        str += `.${bp}--oc-h-${spacing} {height:${spacing}px;}`
        str += `.${bp}--oc-min-h-${spacing} {min-height:${spacing}px;}`
        str += `.${bp}--oc-max-h-${spacing} {max-height:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-h-${spacing} {height:${spacing}px;}`
            ocstr += `.oc-min-h-${spacing} {min-height:${spacing}px;}`
            ocstr += `.oc-max-h-${spacing} {max-height:${spacing}px;}`
        }
    }

    // line height-class ex: sm--oc-lh-72 / oc-lh-8 (px)
    for (let i = 0; i < spacing_level.length; i++) {
        let spacing = spacing_level[i]
        str += `.${bp}--oc-lh-${spacing} {line-height:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-lh-${spacing} {line-height:${spacing}px;}`
        }
    }

    // margin-class ex: lg--oc-m-56 / oc-m-8 (px)
    for (let i = 0; i < spacing_level.length; i++) {
        let spacing = spacing_level[i]
        str += `.${bp}--oc-m-${spacing} {margin:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-m-${spacing} {margin:${spacing}px;}`
        }
        str += `.${bp}--oc-mx-${spacing} {margin:0 ${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-mx-${spacing} {margin:0 ${spacing}px;}`
        }
        str += `.${bp}--oc-my-${spacing} {margin:${spacing}px 0;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-my-${spacing} {margin:${spacing}px 0;}`
        }
        str += `.${bp}--oc-ml-${spacing} {margin-left:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-ml-${spacing} {margin-left:${spacing}px;}`
        }
        str += `.${bp}--oc-mt-${spacing} {margin-top:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-mt-${spacing} {margin-top:${spacing}px;}`
        }
        str += `.${bp}--oc-mr-${spacing} {margin-right:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-mr-${spacing} {margin-right:${spacing}px;}`
        }
        str += `.${bp}--oc-mb-${spacing} {margin-bottom:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-mb-${spacing} {margin-bottom:${spacing}px;}`
        }
    }

    // padding-class ex: lg--oc-p-56 / oc-p-8 (px)
    for (let i = 0; i < spacing_level.length; i++) {
        let spacing = spacing_level[i]
        str += `.${bp}--oc-p-${spacing} {padding:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-p-${spacing} {padding:${spacing}px;}`
        }
        str += `.${bp}--oc-px-${spacing} {padding:0 ${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-px-${spacing} {padding:0 ${spacing}px;}`
        }
        str += `.${bp}--oc-py-${spacing} {padding:${spacing}px 0;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-py-${spacing} {padding:${spacing}px 0;}`
        }
        str += `.${bp}--oc-pl-${spacing} {padding-left:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-pl-${spacing} {padding-left:${spacing}px;}`
        }
        str += `.${bp}--oc-pt-${spacing} {padding-top:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-pt-${spacing} {padding-top:${spacing}px;}`
        }
        str += `.${bp}--oc-pr-${spacing} {padding-right:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-pr-${spacing} {padding-right:${spacing}px;}`
        }
        str += `.${bp}--oc-pb-${spacing} {padding-bottom:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-pb-${spacing} {padding-bottom:${spacing}px;}`
        }
    }

    // border-class ex: sm--oc-bd-72 / oc-bd-8 (px)
    for (let i = 0; i < spacing_level.length; i++) {
        let spacing = spacing_level[i]
        str += `.${bp}--oc-bd-${spacing} {border:${spacing}px solid black;}`
        str += `.${bp}--oc-bdl-${spacing} {border-left:${spacing}px solid black;}`
        str += `.${bp}--oc-bdt-${spacing} {border-top:${spacing}px solid black;}`
        str += `.${bp}--oc-bdr-${spacing} {border-right:${spacing}px solid black;}`
        str += `.${bp}--oc-bdb-${spacing} {border-bottom:${spacing}px solid black;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-bd-${spacing} {border:${spacing}px solid black;}`
            ocstr += `.oc-bdl-${spacing} {border-left:${spacing}px solid black;}`
            ocstr += `.oc-bdt-${spacing} {border-top:${spacing}px solid black;}`
            ocstr += `.oc-bdr-${spacing} {border-right:${spacing}px solid black;}`
            ocstr += `.oc-bdb-${spacing} {border-bottom:${spacing}px solid black;}`
        }
    }

    // outline-class ex: sm--oc-ol-72 / oc-ol-8 (px)
    for (let i = 0; i < spacing_level.length; i++) {
        let spacing = spacing_level[i]
        str += `.${bp}--oc-ol-${spacing} {outline:${spacing}px solid black;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-ol-${spacing} {outline:${spacing}px solid black;}`
        }
    }

    // border radius-class ex: sm--oc-r-72 / oc-r-8 (px)
    for (let i = 0; i < spacing_level.length; i++) {
        let spacing = spacing_level[i]
        str += `.${bp}--oc-r-${spacing} {border-radius:${spacing}px;}`
        str += `.${bp}--oc-rtl-${spacing} {border-top-left-radius:${spacing}px;}`
        str += `.${bp}--oc-rtr-${spacing} {border-top-right-radius:${spacing}px;}`
        str += `.${bp}--oc-rbl-${spacing} {border-bottom-left-radius:${spacing}px;}`
        str += `.${bp}--oc-rbr-${spacing} {border-bottom-right-radius:${spacing}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-r-${spacing} {border-radius:${spacing}px;}`
            ocstr += `.oc-rtl-${spacing} {border-top-left-radius:${spacing}px;}`
            ocstr += `.oc-rtr-${spacing} {border-top-right-radius:${spacing}px;}`
            ocstr += `.oc-rbl-${spacing} {border-bottom-left-radius:${spacing}px;}`
            ocstr += `.oc-rbr-${spacing} {border-bottom-right-radius:${spacing}px;}`
        }
    }

    /* ************************************** font ************************************** */

    // font size
    let font_size = config.font_size
    for (let i = 0; i < font_size.length; i++) {
        let fs = font_size[i]
        str += `.${bp}--oc-fs-${fs} {font-size:${fs}px;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-fs-${fs} {font-size:${fs}px; !important}`
        }
    }

    //  h1 - h6
    let font_heading = config.font_heading
    let hkeys = Object.keys(font_heading)
    for (let i = 0; i < hkeys.length; i++) {
        let h = hkeys[i]
        if (bpKeys.length - 1 == idx) {
            ocstr += `${h} {font-size:${font_heading[h]}px; !important}`
        }
    }

    /* ************************************** colors ************************************** */

    colorKeys.forEach(c => {
        let color = config.colors[c]

        // background
        str += `.${bp}--oc-color-bg-${c} {background-color:${color} !important;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-color-bg-${c} {background-color:${color} !important;}`
        }

        // text color
        str += `.${bp}--oc-color-txt-${c} {color:${color} !important;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-color-txt-${c} {color:${color} !important;}`
        }

        // border color
        str += `.${bp}--oc-color-bd-${c} {border-color:${color} !important;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-color-bd-${c} {border-color:${color} !important;}`
        }

        // outline color
        str += `.${bp}--oc-color-ol-${c} {outline-color:${color} !important;}`
        if (bpKeys.length - 1 == idx) {
            ocstr += `.oc-color-ol-${c} {outline-color:${color} !important;}`
        }
    })


    str += '}'
    styleStr += str;
    loopTimes++;
})



styleStr += ocstr
const style = document.createElement('style')
style.textContent = styleStr
document.body.append(style)
config.debug && document.body.classList.add('oc-debug')


// ================================================================================================================================== //

/* ************************************** template engine ************************************** */

function tplprocess(tplDoc, parentElement) {
    tplDoc.forEach((tpl, idx) => {
        let ele = template[tpl.className]
        // slot
        let slot = tpl.innerHTML
        // pass params
        let params = tpl.dataset.params ? eval(tpl.dataset.params) : null
        // dummy for content
        let dummy = document.createElement('div')
        tpl.id = tpl.id || `${Date.now()}_tpl_id_${idx}_${Math.random()}`
        dummy.innerHTML = ele.html(params)
        // add id
        dummy.children[0].setAttribute('id', tpl.id)
        // add class
        tpl.dataset.class && (dummy.children[0].className += ' ' + tpl.dataset.class)
        // add hover
        let ogClass = ''
        let hoverClass = ''
        if (tpl.dataset.hover) {
            ogClass = dummy.children[0].className
            hoverClass = dummy.children[0].className + ' ' + tpl.dataset.hover
        }
        // add slot
        dummy.children[0].innerHTML = slot || dummy.children[0].innerHTML
        // replace element
        tpl.outerHTML = dummy.innerHTML
        dummy.remove()

        let resultElement = document.getElementById(tpl.id)
        parentElement = parentElement || resultElement;

        // hover event
        if (tpl.dataset.hover) {
            resultElement.onmouseenter = () => { resultElement.className = hoverClass }
            resultElement.onmouseleave = () => { resultElement.className = ogClass }
        }

        // add event
        [...tpl.attributes].forEach(attr => {
            if (attr.name.indexOf('on') > -1) {
                let attrname = attr.value.split('(')[0]
                let params = eval(attr.value.split('(')[1].split(')')[0].split(',').filter(i => i != '')).map(i => {
                    if (eval(i) instanceof Object) return eval(i)
                    return isNaN(parseFloat(i)) ? i.replace(/\'/ig, '') : parseFloat(i)
                })
                let event = () => eval(func[attrname](parentElement, resultElement, params))
                resultElement.removeEventListener(attr.name.slice(2), event)
                resultElement.addEventListener(attr.name.slice(2), event)
                // resultElement.setAttribute(attr.name, attr.value)
            }
        })
        // nest child process
        tplprocess([...resultElement.getElementsByTagName('template')], resultElement)
    })
}

function updateUI() {
    tplprocess([...document.getElementsByTagName('template')])
}

function dynamicTpl(html) {
    let div = document.createElement('div')
    document.body.append(div)
    div.outerHTML = html
    updateUI()
}


// fix textarea height
let winResize = () => {
    ;[...document.getElementsByTagName('textarea')].forEach(tt => {
        let s = tt.value.trimEnd().indexOf('<')
        let t = tt.value.split('\n').map(item => item.slice(s)).filter(item => item != '')
        tt.style.height = 0
        tt.style.height = tt.scrollHeight + 'px'
        tt.value = t.join('\n')
        tt.style.overflow = 'hidden'
    })
}
// winResize()
// window.addEventListener('resize', winResize)
window.addEventListener('DOMContentLoaded', winResize)
window.addEventListener('load', winResize)


let r = document.getElementById('router')
r.innerHTML = page_ui_intro
updateUI()

export let rc = {
    winResize,
    updateUI,
    dynamicTpl,
    page_ui_intro,
    page_ui_design,
    page_ui_playground,
}