
/*
add code
*/

$(document).ready(function(){
    showUser();
    $(document).on('click', '#btnitemadd', function(){
        if ($('#itemcode').val()=="" || $('#itemname').val()=="" || $('#itembrand').val()=="" || $('#itempacksize').val()=="" || $('#itemqty').val()==""|| $('#itemdate').val()=="")  {
            alert('Please input data first');
        }
        else{
            $itemcode$('#itemcode').val();
            $itemname=$('#itemname').val();
            $itembrand=$('#itembrand').val();
            $itempacksize=$('#itempacksize').val();
            $itemqty=$('#itemqty').val();
            $itemdate=$('#itemdate').val();
            $.ajax({
                type: "POST",
                url: "SaveItem.php",
                data: {
                    itemcode: $itemcode,
                    itemname: $itemname,
                    itembrand: $itembrand,
                    itempacksize: $itempacksize,
                    itemqty: $itemqty,
                    itemdate: $itemdate,
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
        $itemcode=$(this).val();
        $.ajax({
            type: "POST",
            url: "itemdelete.php",
            data: {
                itemcode: $itemcode,
                del: 1,
            },
            success: function(){
                showUser();
            }
        });
    });
    //Update
    $(document).on('click', '.updateuser', function(){
        $itemcode=$(this).val();
        $('#edit'+$uid).modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $itemcode=$('#itemcode'+$uid).val();
        $itemname=$('#itemname'+$uid).val();
        $itembrand=$('#itembrand'+$uid).val();
        $itempacksize=$('#itempacksize'+$uid).val();
        $itemqty=$('#itemqty'+$uid).val();
        $itemdate=$('#itemdate'+$uid).val();
        $.ajax({
            type: "POST",
            url: "updateitem.php",
            data: {
                itemcode: $uid,
                itemname: $itemname,
                itembrand: $itembrand,
                itempacksize: $itempacksize,
                itemqty: $itemqty,
                itemdate: $itemdate,
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
        url: 'showitem.php',
        type: 'POST',
        async: false,
        data:{
            show: 1
        },
        success: function(response){
            $('#itemTable').html(response);
        }
    });
}