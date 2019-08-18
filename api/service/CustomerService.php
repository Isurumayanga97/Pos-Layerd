<?php

?>
<?php
    require_once __DIR__.'/../dto/Customer.php';
    require_once __DIR__.'/../bo/impl/CustomerBOImpl.php';


    $operation = $_POST['type'];

    $customerBO = new CustomerBOImpl();

    switch ($operation){
        case "add" :
            $customerID = $_POST['cid'];
            $customerName = $_POST['name'];
            $customerAddress = $_POST['address'];
            $customerSalary = $_POST['salary'];
            $tempObj = new Customer($customerID,$customerName,$customerAddress,$customerSalary);
            $res = $customerBO->addCustomer($tempObj);
            if ($res){
                echo "Customer Added";
            }else{
                echo "Customer not added";
            }
            break;
        case "delete" :
            $customerID = $_POST['cid'];
            $res = $customerBO->deleteCustomer($customerID);
            if ($res){
                echo "Customer Deleted";
            }else{
                echo "Customer not Deleted";
            }
            break;
        case "update" :
            $customerID = $_POST['cid'];
            $customerName = $_POST['name'];
            $customerAddress = $_POST['address'];
            $customerSalary = $_POST['salary'];
            $tempObj = new Customer($customerID,$customerName,$customerAddress,$customerSalary);
            $res = $customerBO->updateCustomer($tempObj);
            if ($res){
                echo "Customer Updated";
            }else{
                echo "Customer not Updated";
            }
            break;
        case "getall" :
            $res = json_encode($customerBO->getAllCustomer());
            echo $res;
            break;
        case "search" :
            $customerID = $_POST['cid'];
            $res = $customerBO->searchCustomer($customerID);
            return json_encode($res);
            break;
    }