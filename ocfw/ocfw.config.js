// all css settings
export let config = {
    // html element with border and gray bg
    debug: false,
    // breakpoints tips at left bottom corner
    show_breakpoints_info: true,
    // layout gutter
    layout_gutter: 5,
    // area width limitation
    area_limit: 1200,
    // area children default height
    area_children_default_height: 8,
    // css import
    css_import: [
        './ocfw/ocfw-normalize.css',
        './ocfw/ocfw-layout.css',
        './ocfw/ocfw-misc.css',
        // './ocfw/bootstrap-icons/font/bootstrap-icons.min.css',
    ],
    // breakpoints settings
    breakpoints: {
        xs: { min: 0, max: 576 },
        sm: { min: 576, max: 768 },
        md: { min: 768, max: 992 },
        lg: { min: 992, max: 1200 },
        xl: { min: 1200, max: 1400 },
        xxl: { min: 1400, max: 9999 },
        // ... add your breakpoint here
    },
    // 12 grid system (do not change this value)
    page_columns: 12,
    // width percentage
    gap: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 'auto'],
    // all sapcing relate values (you can change it)
    spacing_level: [0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 120, 160, 240, 320, 640],
    // all font size relate values (you can change it)
    font_size: [10, 11, 12, 13, 14, 15, 16, 18, 20, 24, 30, 36, 48, 60, 72],
    // all heading font size relate values (you can change it)
    font_heading: {
        h1: 36,
        h2: 30,
        h3: 24,
        h4: 20,
        h5: 18,
        h6: 16,
    },
    // site colors
    colors: {
        white: 'white',
        black: 'black',
        red: 'red',
        orange: 'orange',
        yellow: 'yellow',
        green: 'green',
        blue: 'blue',
        purple: 'purple',
        // custom primary and secondary color
        primary1: '#F7F7F2',
        primary2: '#E4E6C3',
        primary3: '#899878',
        primary4: '#222725',
        primary5: '#121113',
        secondary1: '#111',
        secondary2: '#333',
        secondary3: '#666',
        secondary4: '#999',
        secondary5: '#CCC',
        other1: '#090446',
        other2: '#786F52',
        other3: '#FEB95F',
        other4: '#F71735',
        other5: '#C2095A',
    },
}

