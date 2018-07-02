<html>
    <head>
        <title>Loop Tests</title>
    </head>
    <body>
        <h1>Array loop</h1>
        <?php
            $a = [];

            for ($i = 0; $i < 10; $i++) {
                $a[] = $i;
            }
            print_r($a)
        ?>

        <ul>
            <?php
                foreach([1, 2, 3, 4, 5] as $x) {
                    echo "<li>" . $x . "</li>";
                }
            ?>
        </ul>
    </body>
</html>