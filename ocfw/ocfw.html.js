import { page_ui_features } from "./page/page_ui_features.js";
import { page_ui_index } from "./page/page_ui_index.js";
import { page_ui_intro } from "./page/page_ui_intro.js";
import { page_ui_playground } from "./page/page_ui_playground.js";
import { page_ui_test } from "./page/page_ui_test.js";
import { page_ui_test2 } from "./page/page_ui_test2.js";

function routerReplace(html, path) {
    html = html
        .replace('[routerView]', `<div id="router_${path}"></div>`)
        .replace('class="router"', ` id="${path}" class="router" `)
    return html
}

export const html = {
    'page_ui_index': routerReplace(page_ui_index, '_'),
    'page_ui_intro': routerReplace(page_ui_intro, 'page_ui_index'),
    'page_ui_features': routerReplace(page_ui_features, 'page_ui_index'),
    'page_ui_playground': routerReplace(page_ui_playground, 'page_ui_index'),
    'page_ui_intro/page_ui_test': routerReplace(page_ui_test, 'page_ui_intro'),
    'page_ui_intro/page_ui_test2': routerReplace(page_ui_test2, 'page_ui_intro'),
}

