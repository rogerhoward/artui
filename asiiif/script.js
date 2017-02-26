

$(document).ready(function() {
    console.log('asiiif example ready!');

    var viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "../openseadragon-2.2.1/images/",

        preserveViewport: true,
        visibilityRatio:    1,
        minZoomLevel:       1,
        defaultZoomLevel:   1,
        sequenceMode:       true,
        tileSources:   [{
          "@context": "http://iiif.io/api/image/2/context.json",
          "@id": "http://p6zx7yz5na.execute-api.us-east-1.amazonaws.com/dev/iiif/11381701.jpg",
          "height": 2875,
          "width": 4853,
          "profile": [ "http://iiif.io/api/image/2/level2.json" ],
          "protocol": "http://iiif.io/api/image",
          "tiles": [{
            "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
            "width": 256
          }]
        },
        ]
    });

	console.log('loaded');


});
