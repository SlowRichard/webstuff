<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="basic.css" />
    <script src="markdown-it.js"></script>
    <script>
        function init_md() {
            var md = window.markdownit();



            var md_doc = '<?php echo $_REQUEST['doc'] . '.md' ?>' +
                '?' + Math.floor(Math.random()*1e10);

            if (md_doc != '.md') {
                var request = new XMLHttpRequest();

                request.onreadystatechange = function() {
                    if (this.readyState == this.DONE) {
                        var mn_div = document.getElementById('mn');
                        mn_div.innerHTML = md.render(this.responseText);
                    }
                }
                request.open('GET', md_doc, true);
                request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                request.send(null);
            }
        }
    </script>
</head>
<body onload="init_md()">
    <div id="mn"></div>
    <a href="index.php">Back</a>
</body>
</html>