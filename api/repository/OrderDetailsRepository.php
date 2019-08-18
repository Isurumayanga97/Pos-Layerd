<?php

require_once __DIR__.'/../dto/OrderDetails.php';

interface OrderDetailsRepository
{
    public function addOD(OrderDetails $od):bool ;
    public function deleteOD($oid):bool ;
    public function updateOD($od):bool ;
    public function searchOD($oid):Customer;
    public function getAllOD():array ;
    public function setConnection(mysqli $connection);

}