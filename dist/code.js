(function () {
    'use strict';

    const globalPorps = {
        app: {
            width: 360,
            height: 560,
        },
    };

    // console.log(figma.currentPage.selection)
    figma.showUI(__html__, {
        width: globalPorps.app.width,
        height: globalPorps.app.height,
    });

})();
