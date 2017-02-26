

$(document).ready(function() {
    console.log('example1 ready!');

	$.each( art.art, function( index, value ){
	    console.log(index, value);
	});

    var viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "../openseadragon-2.2.1/images/",
        tileSources: "../art/00094701.dzi"
    });

	viewer.scalebar({
		pixelsPerMeter: 9600,
        location: OpenSeadragon.ScalebarLocation.BOTTOM_LEFT,
        xOffset: 5,
        yOffset: 10,
        stayInsideImage: true,
        color: "rgb(150, 150, 150)",
        fontColor: "rgb(0,0,0)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        fontSize: "small",
        barThickness: 2
	});
	console.log('viewer.scalebar');


});
