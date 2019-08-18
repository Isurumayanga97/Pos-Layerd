$(function () {
    $('#btnadd').on('click',function () {
        var fname,lname,addrs,cemail,ccity,bday,nic,tel;
        fname=$("#cfname").val();
        lname=$("#clname").val();
        addrs=$("#caddress").val();
        cemail=$("#cmail").val();
        ccity=$("#ccity").val();
        bday=$("#cbirthday").val();
        nic=$("#cnic").val();
        tel=$("#ctel").val();


        var edit = "<a class='editedu' href='#'><i class=\"far fa-edit fa-2x\"></i></a>";
        var del = "<a class='deleteedu' href='#'><i class=\"fas fa-trash-alt fa-2x\" style='color: red'></i></a>";

        if (fname=="" || lname=="" || addrs=="" || cemail=="" || ccity=="" || bday=="" || nic=="" || tel==""){
            alert("Please fill field");
        } else {
            var table="<tr><td>"+fname+"</td><td>"+lname+"</td><td>"+addrs+"</td><td>"+cemail+"</td><td>"+ccity+"</td><td>"+bday+"</td><td>"+nic+"</td><td>"+tel+"</td><td>"+edit+"</td><td>"+del+"</td></tr>";
            $("#custtable").append(table);
        }
        fname=$("#cfname").val("");
        lname=$("#clname").val("");
        addrs=$("#caddress").val("");
        cemail=$("#cmail").val("");
        ccity=$("#ccity").val("");
        bday=$("#cbirthday").val("");
        nic=$("#cnic").val("");
        tel=$("#ctel").val("");
    });
});

$(function() {
    var  row, td;
    $("#custtable").on("click", ".editedu", function(e) {
        row = $(this).closest('tr');
        td = row.find("td");
        $('#cfname').val($(td[0]).html());
        $('#clname').val($(td[1]).html());
        $('#caddress').val($(td[2]).html());
        $('#cmail').val($(td[3]).html());
        $('#ccity').val($(td[4]).html());
        $('#cbirthday').val($(td[5]).html());
        $('#cnic').val($(td[6]).html());
        $('#ctel').val($(td[7]).html());
    });
});

$(function() {
    $("#custtable").on("click", ".deleteedu", function(e) {
        if (confirm("Are you sure want to delete")) {
            $(this).closest('tr').remove();
        } else {
            e.preventDefault();
        }
    });
});

$(function() {
    $('#btnrefresh').on('click', function() {
        fname=$("#cfname").val("");
        lname=$("#clname").val("");
        addrs=$("#caddress").val("");
        cemail=$("#cmail").val("");
        ccity=$("#ccity").val("");
        bday=$("#cbirthday").val("");
        nic=$("#cnic").val("");
        tel=$("#ctel").val("");
    });
});

////////////////////////////////Item-form//////////////////////////////////////////////////////////////////////////


$(function () {
    $('#btnitemadd').on('click',function () {
        var icode,iname,brand,packsize,qtyon,date;
        icode=$("#itemcode").val();
        iname=$("#itemname").val();
        brand=$("#brand").val();
        packsize=$("#packsize").val();
        qtyon=$("#qonhand").val();
        date=$("#date").val();

        var edit = "<a class='editedu' href='#'><i class=\"far fa-edit fa-2x\"></i></a>";
        var del = "<a class='deleteedu' href='#'><i class=\"fas fa-trash-alt fa-2x\" style='color: red'></i></a>";

        if (icode=="" || iname=="" || brand=="" || packsize=="" || qtyon=="" || date=="" ){
            alert("Please fill field");
        } else {
            var table="<tr><td>"+icode+"</td><td>"+iname+"</td><td>"+brand+"</td><td>"+packsize+"</td><td>"+qtyon+"</td><td>"+date+"</td><td>"+edit+"</td><td>"+del+"</td></tr>";
            $("#itemtable").append(table);
        }
        icode=$("#itemcode").val("");
        iname=$("#itemname").val("");
        brand=$("#brand").val("");
        packsize=$("#packsize").val("");
        qtyon=$("#qonhand").val("");
        date=$("#date").val("");
    });
});
$(function() {
    $("#itemtable").on("click", ".deleteedu", function(e) {
        if (confirm("Are you sure want to delete")) {
            $(this).closest('tr').remove();
        } else {
            e.preventDefault();
        }
    });
});

$(function() {
    var  row, td;
    $("#itemtable").on("click", ".editedu", function(e) {
        row = $(this).closest('tr');
        td = row.find("td");
        $('#itemcode').val($(td[0]).html());
        $('#itemname').val($(td[1]).html());
        $('#brand').val($(td[2]).html());
        $('#packsize').val($(td[3]).html());
        $('#qonhand').val($(td[4]).html());
        $('#date').val($(td[5]).html());
    });
});
$(function() {
    $('#btnrefresh').on('click', function() {
        icode=$("#itemcode").val("");
        iname=$("#itemname").val("");
        brand=$("#brand").val("");
        packsize=$("#packsize").val("");
        qtyon=$("#qonhand").val("");
        date=$("#date").val("");
    });
});

////////////////////////////////////////Order-Form/////////////////////////////////////////////////////////////////


$(function () {
    $('#btnorderadd').on('click',function () {
        var orderid,ordername,nomforder,storekeepname,date;
        orderid=$("#orderid").val();
        ordername=$("#ordername").val();
        nomforder=$("#numoforder").val();
        storekeepname=$("#storekeepname").val();
        date=$("#orderdate").val();

        var edit = "<a class='editedu' href='#'><i class=\"far fa-edit fa-2x\"></i></a>";
        var del = "<a class='deleteedu' href='#'><i class=\"fas fa-trash-alt fa-2x\" style='color: red'></i></a>";

        if (orderid=="" || ordername=="" || nomforder=="" || storekeepname=="" || date==""){
            alert("Please fill field");
        } else {
            var table="<tr><td>"+orderid+"</td><td>"+ordername+"</td><td>"+nomforder+"</td><td>"+storekeepname+"</td><td>"+date+"</td><td>"+edit+"</td><td>"+del+"</td></tr>";
            $("#orderfrom").append(table);
        }
        orderid=$("#orderid").val("");
        ordername=$("#ordername").val("");
        nomforder=$("#numoforder").val("");
        storekeepname=$("#storekeepname").val("");
        date=$("#orderdate").val("");
    });
});
$(function() {
    $("#orderfrom").on("click", ".deleteedu", function(e) {
        if (confirm("Are you sure want to delete")) {
            $(this).closest('tr').remove();
        } else {
            e.preventDefault();
        }
    });
});

$(function() {
    var  row, td;
    $("#orderfrom").on("click", ".editedu", function(e) {
        row = $(this).closest('tr');
        td = row.find("td");
        $('#orderid').val($(td[0]).html());
        $('#ordername').val($(td[1]).html());
        $('#numoforder').val($(td[2]).html());
        $('#storekeepname').val($(td[3]).html());
        $('#orderdate').val($(td[4]).html());
    });
});
$(function() {
    $('#btnrefresh').on('click', function() {
        orderid=$("#orderid").val("");
        ordername=$("#ordername").val("");
        nomforder=$("#numoforder").val("");
        storekeepname=$("#storekeepname").val("");
        date=$("#orderdate").val("");
    });
});

//////////////////////////////////////////////////To-day////////////////////////////////////////////////////////////////////
