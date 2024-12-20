export let ocfw_layout = `

/* design by william77 */

/* ********************************** variable settings - start ************************************** */
body.oc-debug .oc-area>* {
    /* debug mode */
    /* you can use oc-debug class to show the bounding box of html element */
    background-color: rgba(0, 0, 0, .07);
    border: 1px solid rgba(0, 0, 0, .1);
}

/* ********************************** variable settings - end ************************************** */

/* ********************************** box settings - start ************************************** */
.oc-box {
    display: inline-flex !important;
}

/* ********************************** box settings - end ************************************** */

/* ********************************** layout settings - start ************************************** */

.oc-area {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: var(--oc-layout-gutter);
    row-gap: var(--oc-layout-gutter);
    justify-content: flex-start;
}

.oc-area>* {
    min-height: var(--oc-area-children-default-height);
    flex-direction: row;
    --oc-cell-width: auto;
    flex-basis: var(--oc-cell-width);
    flex-grow: 1;
    flex-shrink: 1;
    max-width: var(--oc-cell-width);
}

.oc-area-limit {
    /* oc-area-limit */
    /* set oc-area width limitation in pixel */
    padding: 0 calc((100% - var(--oc-area-limit)) / 2) !important;
}

/* ********************************** layout settings - end ************************************** */

/* ********************************** alignment - start ************************************** */
.oc-left {
    display: flex;
    justify-content: flex-start;
}

.oc-center {
    display: flex;
    justify-content: center;
}

.oc-right {
    display: flex;
    justify-content: flex-end;
}

.oc-top {
    display: flex;
    align-items: flex-start;
}

.oc-middle {
    display: flex;
    align-items: center;
}

.oc-bottom {
    display: flex;
    align-items: flex-end;
}

/* ********************************** alignment - end ************************************** */


/* ********************************** semi-manual columns distribution - start ************************************** */

.oc-area-split-2>* {
    width: calc((100% - var(--oc-layout-gutter) * 1) / 2) !important;
    flex-grow: 0;
}

.oc-area-split-3>* {
    width: calc((100% - var(--oc-layout-gutter) * 2) / 3) !important;
    flex-grow: 0;
}

.oc-area-split-4>* {
    width: calc((100% - var(--oc-layout-gutter) * 3) / 4) !important;
    flex-grow: 0;
}

.oc-area-split-5>* {
    width: calc((100% - var(--oc-layout-gutter) * 4) / 5) !important;
    flex-grow: 0;
}

.oc-area-split-6>* {
    width: calc((100% - var(--oc-layout-gutter) * 5) / 6) !important;
    flex-grow: 0;
}

.oc-area-split-7>* {
    width: calc((100% - var(--oc-layout-gutter) * 6) / 7) !important;
    flex-grow: 0;
}

.oc-area-split-8>* {
    width: calc((100% - var(--oc-layout-gutter) * 7) / 8) !important;
    flex-grow: 0;
}

.oc-area-split-9>* {
    width: calc((100% - var(--oc-layout-gutter) * 8) / 9) !important;
    flex-grow: 0;
}

.oc-area-split-10>* {
    width: calc((100% - var(--oc-layout-gutter) * 9) / 10) !important;
    flex-grow: 0;
}

.oc-area-split-11>* {
    width: calc((100% - var(--oc-layout-gutter) * 10) / 11) !important;
    flex-grow: 0;
}

.oc-area-split-12>* {
    width: calc((100% - var(--oc-layout-gutter) * 11) / 12) !important;
    flex-grow: 0;
}

/* ********************************** semi-manual columns distribution - end ************************************** */


/* ********************************** manual columns distribution - start ************************************** */

.oc-area>.oc-12 {
    --oc-cell-width: calc(100.000%);
}

.oc-area>.oc-11 {
    --oc-cell-width: calc(91.666% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-10 {
    --oc-cell-width: calc(83.333% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-9 {
    --oc-cell-width: calc(75.000% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-8 {
    --oc-cell-width: calc(66.666% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-7 {
    --oc-cell-width: calc(58.333% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-6 {
    --oc-cell-width: calc(50.000% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-5 {
    --oc-cell-width: calc(41.666% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-4 {
    --oc-cell-width: calc(33.333% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-3 {
    --oc-cell-width: calc(25.000% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-2 {
    --oc-cell-width: calc(16.666% - var(--oc-layout-gutter) + var(--gutter-fix));
}

.oc-area>.oc-1 {
    --oc-cell-width: calc(8.333% - var(--oc-layout-gutter) + var(--gutter-fix));
}


/* gutter fix calculation */

.oc-area>*:first-child:nth-last-child(1) {
    /* -or- li:only-child { */
    width: 100%;
}

.oc-area>*:first-child:nth-last-child(2),
.oc-area>*:first-child:nth-last-child(2)~* {
    width: calc((100% - var(--oc-layout-gutter) * 1) / 2);
    --gutter-fix: var(--oc-layout-gutter) / 2;
}

.oc-area>*:first-child:nth-last-child(3),
.oc-area>*:first-child:nth-last-child(3)~* {
    width: calc((100% - var(--oc-layout-gutter) * 2) / 3);
    --gutter-fix: var(--oc-layout-gutter) / 3;
}

.oc-area>*:first-child:nth-last-child(4),
.oc-area>*:first-child:nth-last-child(4)~* {
    width: calc((100% - var(--oc-layout-gutter) * 3) / 4);
    --gutter-fix: var(--oc-layout-gutter) / 4;
}

.oc-area>*:first-child:nth-last-child(5),
.oc-area>*:first-child:nth-last-child(5)~* {
    width: calc((100% - var(--oc-layout-gutter) * 4) / 5);
    --gutter-fix: var(--oc-layout-gutter) / 5;
}

.oc-area>*:first-child:nth-last-child(6),
.oc-area>*:first-child:nth-last-child(6)~* {
    width: calc((100% - var(--oc-layout-gutter) * 5) / 6);
    --gutter-fix: var(--oc-layout-gutter) / 6;
}

.oc-area>*:first-child:nth-last-child(7),
.oc-area>*:first-child:nth-last-child(7)~* {
    width: calc((100% - var(--oc-layout-gutter) * 6) / 7);
    --gutter-fix: var(--oc-layout-gutter) / 7;
}

.oc-area>*:first-child:nth-last-child(8),
.oc-area>*:first-child:nth-last-child(8)~* {
    width: calc((100% - var(--oc-layout-gutter) * 7) / 8);
    --gutter-fix: var(--oc-layout-gutter) / 8;
}

.oc-area>*:first-child:nth-last-child(9),
.oc-area>*:first-child:nth-last-child(9)~* {
    width: calc((100% - var(--oc-layout-gutter) * 8) / 9);
    --gutter-fix: var(--oc-layout-gutter) / 9;
}

.oc-area>*:first-child:nth-last-child(10),
.oc-area>*:first-child:nth-last-child(10)~* {
    width: calc((100% - var(--oc-layout-gutter) * 9) / 10);
    --gutter-fix: var(--oc-layout-gutter) / 10;
}

.oc-area>*:first-child:nth-last-child(11),
.oc-area>*:first-child:nth-last-child(11)~* {
    width: calc((100% - var(--oc-layout-gutter) * 10) / 11);
    --gutter-fix: var(--oc-layout-gutter) / 11;
}

.oc-area>*:first-child:nth-last-child(12),
.oc-area>*:first-child:nth-last-child(12)~* {
    width: calc((100% - var(--oc-layout-gutter) * 11) / 12);
    --gutter-fix: var(--oc-layout-gutter) / 12;
}

/* ********************************** manual columns distribution - end ************************************** */
`