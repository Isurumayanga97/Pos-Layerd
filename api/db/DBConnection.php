<?php

class DBConnection
{
    private $host="localhost";
    private $username="root";
    private $password="1234";
    private $port="3306";
    private $dbName="Phplayerdnew";

    private $connection;

    /**
     * DBConnection constructor.
     */
    public function __construct()
    {
        $this->connection = new mysqli($this->host,$this->username,$this->password,$this->dbName, $this->port);
        if ($this->connection->connect_error){
            echo $this->connection->connect_error;
            die();
        }
    }


    public function getConnection(){
        return $this->connection;
    }
}