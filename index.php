<html>
<head>
    <title>Index to Notes</title>

    <link rel="stylesheet" type="text/css" href="basic.css" />
</head>
<body>
<h1>Links to Notes</h1>

<ol>
    <li><a href="mdf.php?doc=birds">Bird Log</a>
    <li><a href="mdf.php?doc=curses">Curses Notes</a>
    <li><a href="mdf.php?doc=parks">Parks &amp; Recreation Notes</a>
    <li><a href="mdf.php?doc=book">Other notes</a>
</ol>

<h1>Games</h1>

<ol>
    <li><a href="intersect.php">Intersection Game</a>
</ol>

<h1>PHP tests</h1>

<ul>
    <li><a href="php_info.php">PHP Info</a>
    <li><a href="php_test2.php">Test 2</a>
    <li><a href="php_formtest.html">Form test</a>
    <li><a href="php_looptests.php">Loop tests</a>
</ul>

<table>
<tr><?php
for ($i = 1; $i <= 5; $i += 1) { ?>
<td><?= $i?></td>
<?php } ?></tr>
</table>
</body>
</html>
