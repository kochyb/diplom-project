const globalStyle = {
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        listStyleType: 'none'
    },
    body: {
        /* margin: 0;
        padding: 0; */
        minWidth: '320px',
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        webkitFontSmoothing: 'antialiased',
        mozOsxFontSmoothing: 'grayscale',
        background: "#000 url('./src/assets/mainbg.png') top center no-repeat"
    },
    code: {
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, Courier New"
    },
    '.container': {
        width: '83%',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        '&::-webkit-justifyContent': {
            justifyContent: 'space-evenly',
        }
    },
    '.warning': {
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'rgba(20, 20, 20, 0.7)',
        textAlign: 'center'
    },
    '.warning img': {
        width: '50%'
    },
};

export default globalStyle;
