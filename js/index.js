var bookname=document.getElementById("bookInput");
var booksite=document.getElementById("url");
var booklist=[];

if(localStorage.getItem("booklist")!=null){
  booklist=JSON.parse(localStorage.getItem("booklist"))
displaydate()
}

function addbook(){
    if(vaildname()==true && vaildurrl()){
      var add={
        name:bookname.value,
          urrl:booksite .value,
        }
       booklist.push(add);
    displaydate();

        cleardate();
        localStorage.setItem("booklist",JSON.stringify(booklist))

    }
};
function cleardate(){
  bookname.value=null;
  booksite.value=null;

};
function deleteitem(indexdelete){
 booklist.splice(indexdelete,1);
 displaydate()
}


function displaydate(){
    var cartona="";
    for(var i=0 ; i < booklist.length ;i++ )
        { cartona  += 
         `
         <tr>
         <td>${i+1}</td>
         <td>${booklist[i].name }</td>
         
         <td><a href="${booklist[i].urrl}" target="_blank"><button class="btn btn-success">
<span><i class="fa-solid fa-eye"></i></span>visit</button></a></td>
<td> 
      <button onclick='deleteitem(${i})' class="btn btn-danger "> <span><i class="fa-solid fa-trash"></i></span> delete</button> </td>
  
       </tr>
     
    
    
       `
 }

           document.getElementById('date').innerHTML=cartona;
 }

 function vaildname(){

  var text=bookname.value;
var regex=/^[A-Za-z0-9{{}/._\s ]{1,}$/
  if(regex.test(text)==true )
    { bookname.classList.add('is-valid')
   bookname.classList.remove('is-invalid')
    return true;
  } else{
    bookname.classList.add('is-invalid')
   bookname.classList.remove('is-valid')
    return false;
  }
};
function vaildurrl(){

  var text=booksite.value;
var regex=/^https:*\/\/{*[a-zA-Z]+(\.[a-zA-Z]+)+$/
  if(regex.test(text)==true )
    { booksite.classList.add('is-valid')
   booksite.classList.remove('is-invalid')
    return true;
  } else{
    booksite.classList.add('is-invalid')
   booksite.classList.remove('is-valid')
    return false;
  }
};