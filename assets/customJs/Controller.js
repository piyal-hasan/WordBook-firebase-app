 var firebaseConfig = {
    apiKey: "AIzaSyCvFnYWXfU0C833jN8q47sO0undz_Pg4Xo",
    authDomain: "myvocabbank.firebaseapp.com",
    databaseURL: "https://myvocabbank.firebaseio.com",
    projectId: "myvocabbank",
    storageBucket: "",
    messagingSenderId: "313685467574",
    appId: "1:313685467574:web:d4a30602c5c4bd44"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
let datasaveref=firebase.database().ref("WordBank/Meaning"); 
jQuery(document).ready(function($) {
  $("#dataform")[0].reset();
   dataShow('all','alldata');
   $("#saveWord").click(function(event) {
     /* Act on the event */
     event.preventDefault();
     var EnglishWord=$("#word").val();
     var Meaning=$("#meaning").val();
     // alert(EnglishWord);
     saveWord(EnglishWord,Meaning,0);
     $("#dataform")[0].reset();
   });
});
function saveWord(word,meaning,status){

var status=datasaveref.push({
      EnglishWord:word,
      Meaning:meaning,
      Status:status,
      date:new Date()
    });
if(status){
  dataShow('all','alldata');
}

}
function dataShow(status,id){
 // let datasaveref=firebase.database("WordBank/Meaning"); 
  if(status==='all' && id==='alldata'){
   datasaveref.on("value", print);
  }
  else if(status==='single'&&id!=''){
  
  }
}
function print(data){
  let value=data.val();
  // console.log(value);
   var print_data="";
  if(value!=null){
   
     let keys=Object.keys(value);
     for(var i=keys.length-1;i>=0;i--){
      var key=keys[i];
      print_data+='<tr><td>'+value[key].EnglishWord+"</td>";
      print_data+='<td>'+value[key].Meaning+"</td>";
      print_data+='<td>'+value[key].Status+"</td></tr>";
     }
  
  }
    $("#tabledata").html(print_data);
// console.log(print_data);
   
}
