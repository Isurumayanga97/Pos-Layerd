<?php

require_once __DIR__.'/../dto/Customer.php';

interface CustomerBO
{
    public function addCustomer(Customer $customer):bool ;
    public function deleteCustomer($customerID):bool ;
    public function updateCustomer($customerID):bool ;
    public function searchCustomer($customerID):Customer;
    public function getAllCustomer():array ;
}