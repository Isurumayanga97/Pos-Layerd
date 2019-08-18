<?php

require_once __DIR__.'/../dto/Item.php';

interface ItemBO
{
    public function addItem(Item $item):bool ;
    public function deleteItem($itemID):bool ;
    public function updateItem($item):bool ;
    public function searchItem($itemID):array ;
    public function getAllItem():array ;
}