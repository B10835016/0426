var jsondata;
var ssobj=[];
function preload(){
  // 取得spreadsheet
  jsondata = loadJSON('https://spreadsheets.google.com/feeds/list/1w7r8LoMc7DqslYDCWxcxdoOSobEww9qFJuvSG0BrUcY/od6/public/values?alt=json');
}
function setup() {
  let temp = jsondata.feed.entry;
  //console.log(jsondata);
  let i = 1;
  /*
  console.log('第'+(i+2)+'行資料的tel欄位：'+jsondata.feed.entry[i].gsx$note.$t);
  */
  
  let str='';
  
  // 把所有name的資料抓出來 排在燈箱上
  for(let i=0;i<jsondata.feed.entry.length;i+=1){
    str += '<div class="slide-'+i+'">'+
              '<a href="'+ jsondata.feed.entry[i].gsx$url.$t +'" target="_blank">'+
                '<center><img src="./assets/'+temp[i].gsx$im.$t+'" class="img-fluid"><img></center>'+
                '<p style="text-align: center;">'+jsondata.feed.entry[i].gsx$name.$t+'</p>'+
              '</a>'+
           '</div>';
  }
  
   //將演算的資料 str 插入 index 裡面 id= hw1 的 tag 物件
   //window.document.getElementById("hw1").innerHTML=str;
   $('#hw1').html(str);
//   $('#task').html('new word');
    
    // jquery 
    $(document).ready(()=>{
 /*     $('#hw1').slick({
          centerMode:true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplaySpeed: 2000,
          arrows: true
      });*/
      
      
$('#hw1').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
	
      
    }); 

}

function draw() {
  
  
}