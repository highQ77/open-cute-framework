export let ocfw_normalize = `

/* design by william77 */
html,
body {
    box-sizing: border-box;
}

html *,
html *:before,
html *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui;
    font-size: 14px;
    color: #646258 !important;
    background: #e8e8e8;
}

input {
    accent-color: #979179;
}


/* https://codepen.io/P1N2O/pen/pyBNzX */
.animate-bg {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* intro page */
textarea {
    background-color: #222725;
    color: #CCC;
    font-size: 14px;
    border-radius: 8px;
}

`