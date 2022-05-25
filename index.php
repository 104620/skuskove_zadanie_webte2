<?php

$servername = "localhost";
$username = "xhrcan";
$password = "SQsBCnIEq5Vnxum";
$dbname = "final";

if(isset($_POST['k1']) && isset($_POST['k2']) && isset($_POST['b1']) &&
    isset($_POST['b2']) && isset($_POST['m1']) && isset($_POST['m2'])){

    $currentDate = date('Y-m-d H:i:s', time());

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("INSERT INTO info (date, k1, k2, m1, m2, b1, b2, was_successful)
                            VALUES(\"" . $currentDate . "\", \"". $_POST['k1'] ."\", \"" . $_POST['k2'] . "\",
                            \"". $_POST['m1'] ."\", \"". $_POST['m2'] ."\", \"". $_POST['b1'] ."\",
                            \"". $_POST['b2'] ."\", true)");
        $stmt->execute();

    } catch (PDOException $e) {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("INSERT INTO info (date, was_successful, error)
                        VALUES(\"" . $currentDate . "\", false, \"" . $e->getMessage() . "\")");
        $stmt->execute();
    } finally {
        $conn = null;
    }
}

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
    <script src="js/svg.min.js" defer></script>
    <script src="js/script.js" defer></script>
    <script src="js/anim.js" defer></script>
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
    <h1 id="h1">.</h1>
    <form class="marginBottom" action="index.php" method="post">

        <div class="grid">
            <div>
                <label class="label" for="m1">m1: </label>
                <input id="m1" name="m1" type="number">
            </div>
            <div>
                <label class="label" for="m2">m2: </label>
                <input id="m2" name="m2" type="number">
            </div>
        </div>
        <div class="grid">
            <div>
                <label class="label" for="k1">k1: </label>
                <input id="k1" name="k1" type="number">
            </div>
            <div>
                <label class="label" for="k2">k2: </label>
                <input id="k2" name="k2" type="number">
            </div>
        </div>
        <div class="grid">
            <div>
                <label class="label" for="b1">B1: </label>
                <input id="b1" name="b1" type="number">
            </div>
            <div>
                <label class="label" for="b2">B2: </label>
                <input id="b2" name="b2" type="number">
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
            <div id="animDiv"></div>
            <div id="graphDiv"></div>
        </div>
    </form>
    <p>&copy; Ivan Cicka, Jan Hrćan, Jovan Kiš, Paljko Urbanek</p>
</div>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</body>
</html>