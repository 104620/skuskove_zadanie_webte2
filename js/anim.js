const width = 400;                  // Width of the canvas
const height = 300;                 // Height of the canvas

// Draw
const draw = SVG()
    .addTo("#animDiv")
    .size(width + 60, height)
    .viewbox(0, 0, width + 60, height)

let canvas = draw.group();

let lines1 = [];
let lines2 = [];

drawCanvas(canvas);
drawMovable(canvas);

// Draw default state
function drawCanvas(canvas){

    // Lines
    canvas.polyline('10, 10 10, 255 450, 255').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('444, 249 450, 255 444, 261').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('50, 250 50, 260').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('90, 250 90, 260').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('130, 250 130, 260').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('170, 250 170, 260').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('210, 250 210, 260').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('250, 250 250, 260').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('290, 250 290, 260').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('330, 250 330, 260').fill('none').stroke({color: 'black', width: 2});
    canvas.polyline('370, 250 370, 260').fill('none').stroke({color: 'black', width: 2});

    // Text
    canvas.text("1").move(45, 285).font({size: 20});
    canvas.text("2").move(85, 285).font({size: 20});
    canvas.text("3").move(125, 285).font({size: 20});
    canvas.text("4").move(165, 285).font({size: 20});
    canvas.text("5").move(205, 285).font({size: 20});
    canvas.text("6").move(245, 285).font({size: 20});
    canvas.text("7").move(285, 285).font({size: 20});
    canvas.text("8").move(325, 285).font({size: 20});
    canvas.text("9").move(365, 285).font({size: 20});
    canvas.text("[m]").move(410, 275).font({size: 20});
}

function drawMovable(canvas){

    // Upper line
    canvas.polyline('10, 80 250, 80').fill('none').stroke({color: 'black', width: 2});

    // Lower line
    lines1.push(canvas.polyline('10, 120 20, 100').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('20, 100 30, 120').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('30, 120 40, 100').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('40, 100 50, 120').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('50, 120 60, 100').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('60, 100 70, 120').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('70, 120 80, 100').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('80, 100 90, 120').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('90, 120 100, 100').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('100, 100 110, 120').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('110, 120 120, 100').fill('none').stroke({color: 'black', width: 2}));
    lines1.push(canvas.polyline('120, 100 130, 120').fill('none').stroke({color: 'black', width: 2}));

    lines2.push(canvas.polyline('170, 120 180, 100').fill('none').stroke({color: 'black', width: 2}));
    lines2.push(canvas.polyline('180, 100 190, 120').fill('none').stroke({color: 'black', width: 2}));
    lines2.push(canvas.polyline('190, 120 200, 100').fill('none').stroke({color: 'black', width: 2}));
    lines2.push(canvas.polyline('200, 100 210, 120').fill('none').stroke({color: 'black', width: 2}));
    lines2.push(canvas.polyline('210, 120 220, 100').fill('none').stroke({color: 'black', width: 2}));
    lines2.push(canvas.polyline('220, 100 230, 120').fill('none').stroke({color: 'black', width: 2}));
    lines2.push(canvas.polyline('230, 120 240, 100').fill('none').stroke({color: 'black', width: 2}));
    lines2.push(canvas.polyline('240, 100 250, 120').fill('none').stroke({color: 'black', width: 2}));

    // Masses
    canvas.rect(40, 60)
        .move(130, 70)
        .fill("#5a52c9")
        .stroke({ width: 2, color: 'black' })
    canvas.rect(40, 60)
        .move(250, 70)
        .fill("#cc2a2a")
        .stroke({ width: 2, color: 'black' })
    canvas.text("m1").move(140, 110).font({size: 20}).fill("white");
    canvas.text("m2").move(260, 110).font({size: 20}).fill("white");
}