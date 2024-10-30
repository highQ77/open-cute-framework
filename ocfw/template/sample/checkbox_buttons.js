export let checkbox_buttons = {
    html(params) {
        const [name, values, displays] = params
        return `
            <div class="oc-area oc-area-v">
                ${values.map((v, i) =>
            `<div class="oc-middle">
                        <input type="checkbox" class="oc-mr-8 oc-cursor" name="${name}" value="${values}" ${i == 0 ? 'checked' : ''} /> ${displays[i]}
                    </div>`).join('')
            }
            </div>
        `
    },
}