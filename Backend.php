<?php
require_once "octave-daemon/include/Octave_lib.php";
echo "<pre>";
echo shell_exec('ls -la');
echo "</pre>";

$octave = new Octave(false);
//$octave->run("A=5");
//$octave->run("save('a.txt','A')");
//echo "Result=" . $octave->query("A");

//$octave = shell_exec("octave-cli");
////shell_exec("a=5; save a.txt a;");
//$octave->run("a=5; save a.txt a;");
//echo $octave;
?>