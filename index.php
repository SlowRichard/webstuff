<html>
<head>
    <title>Index to Notes</title>

    <link rel="stylesheet" type="text/css" href="basic.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
<h1>Links to Notes</h1>

<ol>
    <li><a class="highlight" href="mdf.php?doc=birds">Bird Log</a>
    <li><a href="mdf.php?doc=curses">Curses Notes</a>
    <li><a href="mdf.php?doc=parks">Parks &amp; Recreation Notes</a>
    <li><a href="mdf.php?doc=book">Other notes</a>
</ol>

<h1>Games</h1>

<ol>
    <li><a href="intersect.php">Intersection Game</a>
</ol>

<h1>PHP Tests</h1>

<ul>
    <li><a href="php_info.php">PHP Info</a>
    <li><a href="php_test2.php">Test 2</a>
    <li><a href="php_formtest.html">Form test</a>
    <li><a href="php_looptests.php">Loop tests</a>
    <li><a href="#">Road to Nowhere</a>
</ul>

<h1>HTML Tests</h1>

<ul>
    <li><a href="ui_test.html">Windows tests</a>
</ul>

<table>
<tr><?php
for ($i = 1; $i <= 5; $i += 1) { ?>
<td><?= $i?></td>
<?php } ?></tr>
</table>
</body>
</html>
