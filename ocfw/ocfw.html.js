import { features } from "./page/feature.js";
import { index } from "./page/index.js";
import { intro } from "./page/intro.js";
import { playground } from "./page/playground.js";
import { test } from "./page/test.js";
import { test2 } from "./page/test2.js";

function routerReplace(html, path) {
    html = html
        .replace('[routerView]', `<div id="routerView_${path}"></div>`)
        .replace('class="router"', ` id="${path}" class="router" `)
    return html
}

export const html = {
    'index': routerReplace(index, '_'),
    'intro': routerReplace(intro, 'index'),
    'features': routerReplace(features, 'index'),
    'playground': routerReplace(playground, 'index'),
    'intro/test': routerReplace(test, 'intro'),
    'intro/test2': routerReplace(test2, 'intro'),
}

