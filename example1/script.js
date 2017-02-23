

$(document).ready(function() {
    console.log('example1 ready!');

    var viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "../openseadragon-2.2.1/images/",
        tileSources: "../art/00094701.dzi"
    });

});
