<html>
<head>
	<title>Index to Notes</title>

	<link rel="stylesheet" type="text/css" href="basic.css" />
</head>
<body>
<h1>Links to Notes</h1>

<ol>
<li><a href="curses.html">Curses Notes</a>
<li><a href="parks.html">Parks &amp; Recreation Notes</a>
<li><a href="intersect.php">Intersection Game</a>
</ol>

<h1>PHP tests</h1>

<ul>
	<li><a href="php_info.php">PHP Info</a>
	<li><a href="php_test2.php">Test 2</a>
	<li><a href="php_formtest.html">Form test</a>
</ul>

<table>
<?php for($i = 1; $i <= 10; $i += 1) {?>
<tr><td><?= $i?></td></tr>
<?php } ?>
</table>
</body>
</html>
