<?php

?>

<!-- Dizajn trochu inspirovany pracou pana Mateja Rabeka -->
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="./fei.png">
    <link rel="stylesheet" href="./css/style.css">
    <script src="js/script.js" defer></script>
    <title>FinalCountdown</title>
</head>

<body>

<div id="nav">
    <div class="flag">
        <abbr title="Slovenčina" id="sk" onclick="slovak()"></abbr>
        <abbr title="English" id="us" onclick="english()"></abbr>
    </div>
</div>

<br><br>

<div class="container">
    <h1>Animácia dynamického systému „tlmič automobil“</h1>
    <form class="marginBottom" action="index.php" method="post">

        <div class="grid">
            <div>
                <label class="label" for="k1">k1</label>
                <input id="k1" type="number">
            </div>
            <div>
                <label class="label" for="k2">k2</label>
                <input id="k2" type="number">
            </div>
            <div>
                <label class="label" for="k3">k3</label>
                <input id="k3" type="number">
            </div>
        </div>
        <div class="grid">
            <div>
                <label class="label" for="f1">F1</label>
                <input id="f1" type="number">
            </div>
            <div>
                <label class="label" for="f2">F2</label>
                <input id="f2" type="number">
            </div>
        </div>
        <div class="grid">
            <div>
                <label class="label" for="m1">m1</label>
                <input id="m1" type="number">
            </div>
            <div>
                <label class="label" for="m2">m2</label>
                <input id="m2" type="number">
            </div>
        </div>
        <br>

        <div class="marginBottom">
            <input type="checkbox" id="graph" name="graph" value="Graf">
            <label for="graph" id="graphLabel"></label><br>
            <input type="checkbox" id="anim" name="anim" value="Animation">
            <label for="anim" id="animLabel"></label><br>
        </div>

        <button type="submit" class="marginBottom" id="button"></button>

        <div id="div">
            <div id="graphDiv"></div>
            <div id="animDiv"></div>
        </div>
    </form>
    <p>&copy; Ivan Cicka, Jan Hrćan, Jovan Kiš, Paljko Urbanek</p>
</div>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</body>
</html>