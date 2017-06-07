// $('.search-filter').on("click", function () {
//            var leftVal = $(".page").css("left");
//
//            if (leftVal == "-200px") {
//                $(".page").animate({
//                    "left": "0px"
//                }, 100);
//                $("#menu_filter_mobile").addClass("not_mobile").removeClass("show_filter_left");
//
//            } else {
//                $(".page").css("position", "relative").animate({
//                    "left": "-200px"
//                }, 300, function () {
//                    $("#menu_filter_mobile").removeClass("not_mobile").addClass("show_filter_left");
//                    // $('#s4-workspace').css({ "height": "auto" });
//                });
//
//            }
//            return false;
//        });
$('#home').on("click", function () {
    $('#home_section').css('display','block');
    $('#work_section').css('display','none');
});
$('#work').on("click", function () {
    $('#work_section').css('display','block');
    $('#home_section').css('display','none');
});
$('#year1').on("click", function () {
    $('#home_section').css('display','none');
    $('#work_section').css('display','block');
});

var i=1,j=1,s=1,d=1,m,n;
for(i =1; i<= 3; i++){
  $('#work_section').append('<div class="row margin_0">'+
                            '<div class="col-md-2 xs-p-0">'+
                            '</div>'+
                                '<div class="col-md-20 col-xs-24 xs-p-0 worksection_'+i+'"'+'>'+
                                '</div>'+
                            '<div class="col-md-2 xs-p-0">'+
                            '</div>'+
                            '</div>');
}
for(j =1; j<= i; j++){
    if(j!=1){s=s+3;}
     var child=$('.worksection_'+j);
    if(j==1){
        for(d =1; d<= 3; d++){
        child.append('<div id="r'+ d + 1 +'" class="col-md-8 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="r'+ d +'" src="" alt="" />'+
                      '</div>');
        }
    }
    else if(j==2){
        for(n =d; n<= 3+d-1; n++){
        child.append('<div id="r'+ n + 1 +'" class="col-md-8 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="r'+ n +'" src="" alt="" />'+
                      '</div>');
        }
    }
      else if(j==3){
        for(m=n; m<= 3+n-1; m++){
          if(m<8){
        child.append('<div id="r'+ m + 1 +'" class="col-md-8 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="r'+ m +'" src="" alt="" />'+
                      '</div>');
        }
        else{
        child.append('<div>'+'</div>');
        }
      }
    }
}
for(var k =1; k<=9; k++){
  if(k<8)
  {
    $("#r"+k).attr('src', 'images/image_'+k+'.JPG');
    $("#r"+k+1).append('<div class="overlay">'+
                                  ' <div class="text">'+
                                      '<i class="fa fa-shopping-cart fa-2x" id="add_'+ k +'">'+
                                      '</i>'+
                                      '<span class="xs-p-10">'+
                                      '</span>'+
                                      '<i class="fa fa-info-circle fa-2x" id="info_'+ k +'">'+
                                      '</i>'+
                                      // '<i class="arrow_right">'+
                                      // '</i>'+
                                '</div>'+
                        '</div>');
    }
  if(k>=8)
    {
    $("#r"+k).attr('src', 'images/drawing0.jpg');
    }
}
