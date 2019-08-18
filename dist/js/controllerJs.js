
/*
add code
*/

$(document).ready(function(){
    showUser();
    $(document).on('click', '#btncustadd', function(){
        if ($('#custId').val()=="" || $('#custName').val()=="" || $('#custAddress').val()=="" || $('#custEmail').val()=="" || $('#custCity').val()==""|| $('#custBirthday').val()=="" || $('#custNic').val()=="" || $('#custSalary').val()=="" )  {
            alert('Please input data first');
        }
        else{
            $custId=$('#custId').val();
            $custName=$('#custName').val();
            $custAddress=$('#custAddress').val();
            $custEmail=$('#custEmail').val();
            $custCity=$('#custCity').val();
            $custBirthday=$('#custBirthday').val();
            $custNic=$('#custNic').val();
            $custSalary=$('#custSalary').val();
            $.ajax({
                type: "POST",
                url: "SaveCustomer.php",
                data: {
                    custId: $custId,
                    custName: $custName,
                    custAddress: $custAddress,
                    custEmail: $custEmail,
                    custCity: $custCity,
                    custBirthday: $custBirthday,
                    custNic: $custNic,
                    custSalary: $custSalary,
                    add: 1,
                },
                success: function(){
                    showUser();
                }
            });
        }
    });
    //Delete
    $(document).on('click', '.delete', function(){
        $custId=$(this).val();
        $.ajax({
            type: "POST",
            url: "customerdelete.php",
            data: {
                custId: $custId,
                del: 1,
            },
            success: function(){
                showUser();
            }
        });
    });
    //Update
    $(document).on('click', '.updateuser', function(){
        $custId=$(this).val();
        $('#edit'+$uid).modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $cname=$('#cname'+$uid).val();
        $caddress=$('#caddress'+$uid).val();
        $cmail=$('#cmail'+$uid).val();
        $ccity=$('#ccity'+$uid).val();
        $cbirthday=$('#cbirthday'+$uid).val();
        $cnic=$('#cnic'+$uid).val();
        $csalary=$('#csalary'+$uid).val();
        $.ajax({
            type: "POST",
            url: "updatecustomer.php",
            data: {
                custId: $uid,
                custName: $cname,
                custAddress: $caddress,
                custEmail: $cmail,
                custCity: $ccity,
                custBirthday: $cbirthday,
                custNic: $cnic,
                custSalary: $csalary,
                edit: 1,
            },
            success: function(){
                showUser();
            }
        });
    });

});

//Showing our Table
function showUser(){
    $.ajax({
        url: 'show_customer.php',
        type: 'POST',
        async: false,
        data:{
            show: 1
        },
        success: function(response){
            $('#userTable').html(response);
        }
    });
}