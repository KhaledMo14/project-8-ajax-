
var ancores = document.getElementsByClassName("nav-link")

for(var i=0 ; i<ancores.length ; i++)
{
    ancores[i].onclick=function(e)
    {
      cat = e.target.innerHTML
      

      ajax()
    }
}

var data = [] ;
var cat = "business";


ajax()




function ajax()
{
    var http = new XMLHttpRequest ; 
    http.open ("Get" , "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=eg&category="+cat+"&apiKey=3e78728f97924b109e483ec14ecb2d05") 

http.onreadystatechange = function ()
{
    if (http.readyState === 4 && http.status === 200) 
    {
        data = JSON.parse(http.response)
        data = data.articles
    }
    
   

   show()
    
}

http.send()

}





function show ()
{
    col = "" ;
    for (var i=0 ; i < data.length ; i++)
    {
        col+= `
       
        <div class="col-md-4">

        <img class="w-100" src="`+data[i].urlToImage+`">

        <h2>`+data[i].title+`</h2>
        <p>`+data[i].description+`</p>
        
        
        </div>
        
        `
    }
    document.getElementById("data").innerHTML=col
}