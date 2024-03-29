<?php

require_once __DIR__.'/../dto/Order.php';
require_once __DIR__.'/../dto/OrderDetails.php';

interface PlaceOrderBO
{
    public function placeOrder(Order $order,$arr):bool ;
    public function getAllOrders():array ;
}