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
        //Query for all todos on the table
        $query = "SELECT * FROM $this->table";

        //Prepare PDO statement
        $stmt = $this->conn->prepare($query);

        //Execute PDO
        $stmt->execute();

        //Make result an array
        $todos = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $todos;
    }

    //Create todo
    public function create()
    {
        //Query to create todo
        $query = "INSERT INTO $this->table SET text = :text";

        //Prepare statement
        $stmt = $this->conn->prepare($query);

        //Clead data
        $this->text = htmlspecialchars(strip_tags($this->text));

        //Bind data
        $stmt->bindParam(":text", $this->text);

        //Execute PDO
        $stmt->execute();
    }

}