<?php class Todo
{
    //DB
    private $conn;
    private $table = "todoapp";

    //Todo propeties
    public $id;
    public $status;
    public $text;

    //Constructor
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //Get all todos
    public function read()
    {

    }

}