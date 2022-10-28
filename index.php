<?php
require_once "config/heroku_db_local.php";
require_once "classes/todo.php";

//Istantiate DB & connet
$database = new Database();
$db = $database->connect();

//New todo object
$newTodo = new Todo($db);

var_dump($newTodo->read());
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- displays site properly based on user's device -->

    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />

    <title>Frontend Mentor | Todo app</title>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <div id="todoHero" class="todoHero"></div>
    <main>
        <div class="title">
            <div>T O D O</div>
            <div><img id="moon" src="./images/icon-moon.svg" alt="Moon icon" /></div>
        </div>
        <div class="newTodo">
            <form id="todoForm" action="">
                <input type="checkbox" />
                <input id="newTodoValue" type="text" placeholder="Create a new todo..." />
            </form>
        </div>
        <div id="todoList" class="todoList">
            <form id="todoContainer" action="">
                <?php
foreach ($newTodo->read() as $key => $value) {

}
?>
            </form>
            <div class="todoLeft">
                <div><span id="todoCounter"></span> items left</div>
                <div id="desktopFilters" class="desktopFilters">
                    <div id="all" class="filters activeFilter">All</div>
                    <div id="active" class="filters">Active</div>
                    <div id="completed" class="filters">Completed</div>
                </div>
                <div id="clearCompleted" class="completed">Clear Completed</div>
            </div>
        </div>
        <div id="mobileFilters" class="todoFilter">
            <div id="mobileAll" class="mobileFilters activeFilter">All</div>
            <div id="mobileActive" class="mobileFilters">Active</div>
            <div id="mobileCompleted" class="mobileFilters">Completed</div>
        </div>
    </main>
    <footer class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a
            href="#">Carlos J. Ramirez</a>.
    </footer>
    <script type="text/javascript" src="script.js"></script>
</body>

</html>