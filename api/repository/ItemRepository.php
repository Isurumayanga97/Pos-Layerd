<?php

require_once __DIR__.'/../dto/Item.php';

interface ItemRepository
{
    public function addItem(Item $item):bool ;
    public function deleteItem($code):bool ;
    public function updateItem($item):bool ;
    public function searchItem($code):array ;
    public function getAllItem():array ;
    public function setConnection(mysqli $connection);

}