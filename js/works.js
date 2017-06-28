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

$("#years li a").click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active');
});

$('#y2015').on("click", function () {
    $('#work_section2015').css('display','block');
    $('#work_section2016').css('display','none');
    $('#work_section2017').css('display','none');
});
$('#y2016').on("click", function () {
    $('#work_section2016').css('display','block');
    $('#work_section2015').css('display','none');
    $('#work_section2017').css('display','none');
});
$('#y2017').on("click", function () {
    $('#work_section2017').css('display','block');
    $('#work_section2016').css('display','none');
    $('#work_section2015').css('display','none');
});

// ------------------------------------------------------2015------------------------------------------------

var i=1,j=1,s=1,d=1,m,n;
for(i =1; i<= 2; i++){
  $('#work_section2015').append('<div class="row margin_0">'+
                                '<div class="col-xs-24 xs-p-0 worksection_2015'+i+'"'+'>'+
                                '</div>'+
                            '</div>');
}
for(j =1; j<= i; j++){
    if(j!=1){s=s+4;}
     var child=$('.worksection_2015'+j);
    if(j==1){
        for(d =1; d<= 4; d++){
        child.append('<div id="r'+ d + 1 +'" class="col-md-6 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="r'+ d +'" src="" alt="" data-toggle="modal" data-target="#myImageModal"/>'+
                      '</div>');
        }
    }
    else if(j==2){
        for(n =d; n<= 4+d-1; n++){
        child.append('<div id="r'+ n + 1 +'" class="col-md-6 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="r'+ n +'" src="" alt="" data-toggle="modal" data-target="#myImageModal"/>'+
                      '</div>');
        }
    }
//      else if(j==3){
//        for(m=n; m<= 4+n-1; m++){
//          if(m<8){
//        child.append('<div id="r'+ m + 1 +'" class="col-md-6 col-xs-24 xs-p-0 work_images contain_image">'+
//                            '<img id="r'+ m +'" src="" alt="" />'+
//                      '</div>');
//        }
//        else{
//        child.append('<div>'+'</div>');
//        }
//      }
//    }
}
for(var k =1; k<=9; k++){
  if(k<8)
  {
    $("#r"+k).attr('src', 'images/img2015_'+k+'.JPG');
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
  //  $("#r"+k).attr('src', 'images/drawing0.jpg');
    $("#r"+k+1).css('display','none');
    }
}


// --------------------------------------------------2016-------------------------------------------------

for(i =1; i<= 2; i++){
  $('#work_section2016').append('<div class="row margin_0">'+
                                '<div class="col-xs-24 xs-p-0 worksection_2016'+i+'"'+'>'+
                                '</div>'+
                            '</div>');
}
for(j =1; j<= i; j++){
    if(j!=1){s=s+4;}
     var child=$('.worksection_2016'+j);
    if(j==1){
        for(d =1; d<= 4; d++){
        child.append('<div id="s'+ d + 1 +'" class="col-md-6 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="s'+ d +'" src="" alt="" data-toggle="modal" data-target="#myImageModal"/>'+
                      '</div>');
        }
    }
    else if(j==2){
        for(n =d; n<= 4+d-1; n++){
        child.append('<div id="s'+ n + 1 +'" class="col-md-6 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="s'+ n +'" src="" alt="" data-toggle="modal" data-target="#myImageModal"/>'+
                      '</div>');
        }
    }
}
for(var k =1; k<=9; k++){
  if(k<8)
  {
    $("#s"+k).attr('src', 'images/img2016_'+k+'.JPG');
    $("#s"+k+1).append('<div class="overlay">'+
                                  ' <div class="text">'+
                                      '<i class="fa fa-shopping-cart fa-2x" id="add_'+ k +'">'+
                                      '</i>'+
                                      '<span class="xs-p-10">'+
                                      '</span>'+
                                      '<i class="fa fa-info-circle fa-2x" id="info_'+ k +'">'+
                                      '</i>'+
                                '</div>'+
                        '</div>');
    }
  if(k>=8)
    {
  //  $("#s"+k).attr('src', 'images/drawing0.jpg');
    $("#s"+k+1).css('display','none');
    }
}



// ----------------------------------------------2017---------------------------------------------


for(i =1; i<= 2; i++){
  $('#work_section2017').append('<div class="row margin_0">'+
                                '<div class="col-xs-24 xs-p-0 worksection_2017'+i+'"'+'>'+
                                '</div>'+
                            '</div>');
}
for(j =1; j<= i; j++){
    if(j!=1){s=s+4;}
     var child=$('.worksection_2017'+j);
    if(j==1){
        for(d =1; d<= 4; d++){
        child.append('<div id="t'+ d + 1 +'" class="col-md-6 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="t'+ d +'" src="" alt="" data-toggle="modal" data-target="#myImageModal"/>'+
                      '</div>');
        }
    }
    else if(j==2){
        for(n =d; n<= 4+d-1; n++){
        child.append('<div id="t'+ n + 1 +'" class="col-md-6 col-xs-24 xs-p-0 work_images contain_image">'+
                            '<img id="t'+ n +'" src="" alt="" data-toggle="modal" data-target="#myImageModal"/>'+
                      '</div>');
        }
    }
}
for(var k =1; k<=9; k++){
  if(k<6)
  {
    $("#t"+k).attr('src', 'images/img2017_'+k+'.JPG');
    $("#t"+k+1).append('<div class="overlay">'+
                                  ' <div class="text">'+
                                      '<i class="fa fa-shopping-cart fa-2x" id="add_'+ k +'">'+
                                      '</i>'+
                                      '<span class="xs-p-10">'+
                                      '</span>'+
                                      '<i class="fa fa-info-circle fa-2x" id="info_'+ k +'">'+
                                      '</i>'+
                                '</div>'+
                        '</div>');
    }
  if(k>=6)
    {
  //  $("#s"+k).attr('src', 'images/drawing0.jpg');
    $("#t"+k+1).css('display','none');
    }
}
