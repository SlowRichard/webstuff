<html>
<head>
	<title>Intersection Game</title>
	
	<link href="https://fonts.googleapis.com/css?family=Comfortaa|Shadows+Into+Light" rel="stylesheet">
	<link href="intersect.css" rel="stylesheet">

	<script src="intersect.js"></script>
</head>
<body onload="init()">
	<h1>Intersection Game</h1>
	<canvas id="intersect" width="600" height="600"></canvas>
	
	<table class="scores">
		<tr>
			<th>your score</th><th>your best</th>
		</tr>
		<tr>
			<td id="curscore"></td><td id="highscore"></td>
		</tr>
	</table>
	
	<p id="debug"></p>
	
	<p>(an attempt to recreate <a href="http://blibblob.weebly.com/lewpen-dodge.html">this</a> in HTML5)</p>
</body>
</html>
