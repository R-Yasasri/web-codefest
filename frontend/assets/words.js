
    function keywordsll(){
	   
	   
	   
	   
	    var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;

                                            var tbody = document.getElementById("keybody");
                                            tbody.innerHTML = "";
                                            var users = JSON.parse(resp);
                                            for (var i = 0; i < users.length; i++) {
                                                var u = users[i];
											
                                                tbody.innerHTML += 
                                                "<tr>"
                                                "<td><span>"+u["id"]+"</span>""</td>"
                                                "<td><input type=\"text\">"+u["keyword"] + \"</td>"
                                               " <td><textarea style=\"width: 406.8px;\">"+u["definition"]+"<\"/textarea>""</td>"
                                                "<td class=\"text-center\">"<"a \"class=\"btn btn-success\" role=\"button\" style=\"background: rgb(11,171,56);margin: 2px;\"><i class=\"fas fa-pencil-alt\"></i></a><a class=\"btn btn-danger\" role=\"button\" style=\"margin: 2px;\"><i class=\"fas fa-trash\"></i></a></td>"
                                            "</tr>"
                                            
                                                      
                                                       
                                            }
                                        }
                                    };
                                   req.open("GET","http://localhost:8080/search/getAll", true);
                                    req.send();
    
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
   }
   
   
   
   
   
   
   
   
   function clearfild(){
	   
	   var keyword= document.getElementById("keyword").value;
	   if(keyword.trim() ===""){
	   document.getElementById("keyword").innerHTML="";
			 var tbody = document.getElementById("definition").innerHTML="";
			 
	   }
	   
   }
   
   
     function keywordsearh(){
		 
		 
		var keyword= document.getElementById("keyword").value;
		
		
		 if(keyword.trim() ===""){
			 clearfild();
			
		 }else{
			
			  var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                           
                                            var tbody = document.getElementById("definition");
                                            tbody.innerHTML="";
                                            var u = JSON.parse(resp);
                                          // alert(u[0].definition);
                                                tbody.innerHTML += 
                                                        ""+u[0].definition;
                                            
                                        }
                                    };
                                    req.open("GET","http://localhost:8080/search/Bywords/"+keyword.trim(),true);
                                    req.send();
			 
		 }
		
    
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
	 }
	 
	 
	            function productsearh(){
		 
		 
		var keyword= document.getElementById("search2").value;
		
		
		 if(keyword.trim() ==="" ){
			 
			 productload();
		 }else{
			 
			  var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                           
                                             var resp = req.responseText;

                                            var tbody = document.getElementById("productbody");
                                            tbody.innerHTML = "";
                                           
                                            
                                                var u = JSON.parse(resp);
                                                tbody.innerHTML += "<tr id=\"tr-" + u["id"] + "\">" +
                                                        "<td><input type=\"text\" value=\"" + u["id"] + "\"></td>" +
                                                        "<td><input type=\"text\" value=\"" + u["productname"] + "\"></td>" +
														 "<td><input type=\"text\" value=\"" + u["sellPrice"] + "\"></td>" +
														  "<td><input type=\"text\" value=\"" + u["buyPrice"] + "\"></td>" +
														   "<td><input type=\"text\" value=\"" + u["qty"] + "\"></td>" +
                                                        "<td><input type=\"text\" value=\"" + u["description"] + "\"></td>" +
                                                        
														
														
                                                        "<td style=\"width: 200px;\"><button class=\"btn btn-primary\" type=\"button\" onclick=\"productupdate(" + u["id"] + ");\">Update</button><br><br><button class=\"btn btn-danger ml-2\" type=\"button\" onclick=\"productdel(" + u["id"] + ");\">Delete</button></td>" +
                                                        "</tr>";
                                            
                                            
                                        }
                                    };
                                    req.open("GET", "http://localhost:8080/products/searchbyprdid/"+keyword, true);
                                    req.send();
			 
		 }
		
    
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
	 }
	         
	 
	 
	 
	 
	 
	 
	 
	 
   
   
   
   
                function categorydel(id){
    
    

                          var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                             
			                             catrgoryload();
                                            alert(resp);
                                        }
                                    };
                                    req.open("DELETE","http://localhost:8080/mycategory/deletecataById/"+id, true);
                                    req.send();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                      }
					  
					  
					  
					  
					  function productdel(id){
    
    

                          var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                             
			                             productload();
                                            alert(resp);
                                        }
                                    };
                                    req.open("DELETE","http://localhost:8080/products/deleteProduct/"+id, true);
                                    req.send();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
   
					  
					  
					  
					  
					  
					  
					  
					  
   
   
   
   
   
   
   function categoryupdate(Id){ 
    
    
    var tr=document.getElementById("trs-"+Id);
    var u={};
    u["id"]=Id;
    u["catname"]=tr.cells[1].getElementsByTagName("input")[0].value;
    u["description"]=tr.cells[2].getElementsByTagName("input")[0].value;
    
    
     var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
											alert("Updated..");
                                              catrgoryload();
                                          
                                        }
                                    };
                                    req.open("PUT", "http://localhost:8080/mycategory/upadtecategory", true);
                                    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                    req.send(JSON.stringify(u));
    
    
}
   
   
   function productupdate(Id){ 
    
    
    var tr=document.getElementById("tr-"+Id);
	alert(Id);
    var u={};
    u["id"]=Id;
    u["productname"]=tr.cells[1].getElementsByTagName("input")[0].value;
    u["sellPrice"]=tr.cells[2].getElementsByTagName("input")[0].value;
    u["buyPrice"]=tr.cells[3].getElementsByTagName("input")[0].value;
	u["qty"]=tr.cells[4].getElementsByTagName("input")[0].value;
	u["description"]=tr.cells[5].getElementsByTagName("input")[0].value;
    
     var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
											alert("updated...");
                                              productload();
                                          
                                        }
                                    };
                                    req.open("PUT", "http://localhost:8080/products/updateProduct", true);
                                    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                    req.send(JSON.stringify(u));
    
    
}
   
   
   
   
   
   
   
   
   
   
   
   function addKeyword(){
	   
  var tkeyword=  document.getElementById("tkeyword").value;
  var tdefinition=  document.getElementById("tdefinition").value;
  
    
    
    
    
    
      var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                            if(resp !=null){
                                                
                                               alert("sucess");
                                              // catrgoryload();
											  
											  document.getElementById("tkeyword").innerHTML="";
											  document.getElementById("tdefinition").innerHTML="";
											  
                                            }
                                             
                                        }
                                    };
                                    
                                    var para="keyword="+tkeyword+"&definition="+tdefinition;
                                    
                                    req.open("POST", "http://localhost:8080/search/addkeyword", true);
                                    
                                    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                                    req.send(para);
    
    
    
	   
   }
   
   
   
   
   
   
   function categoryadd(){
	   
  var catname=  document.getElementById("catname").value;
  var description=  document.getElementById("description").value;
  
    
    
    
    
    
      var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                            if(resp !=null){
                                                
                                               alert("sucess");
                                               catrgoryload();
                                            }
                                             
                                        }
                                    };
                                    
                                    var para="catname="+catname+"&description="+description;
                                    
                                    req.open("POST", "http://localhost:8080/mycategory/savecategory", true);
                                    
                                    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                                    req.send(para);
    
    
    
	   
   }
   
   
   function catype(){
	   
	   
	   
	   
	    var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;

                                            var tbody = document.getElementById("cattype");
                                            tbody.innerHTML = "";
                                            var users = JSON.parse(resp);
                                            for (var i = 0; i < users.length; i++) {
                                                var u = users[i];
											
                                                tbody.innerHTML += 
                                                        "<option value="+u["id"]+" > "+u["catname"] +"</option>" 
                                                        
                                                      
                                                       
                                            }
                                        }
                                    };
                                   req.open("GET","http://localhost:8080/mycategory/getcata", true);
                                    req.send();
    
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
   }
   
   function productadd(){
	   
	   
	   
	   
	   var productname=  document.getElementById("productname").value;
  var sellingprice=  document.getElementById("sellingprice").value;
  
    
      var buyingprice=  document.getElementById("buyingprice").value;
      var qty=  document.getElementById("qty").value;
    
      var description=  document.getElementById("discription").value;
	  
	    var cattype=  document.getElementById("cattype").value;
		
		
		 
		
		
	  
	  
      var req = new XMLHttpRequest();

                                    req.onreadystatechange = function () {
                                        if (req.readyState == 4 && req.status == 200) {
                                            var resp = req.responseText;
                                            if(resp !=null){
                                                
                                               alert("sucess");
                                               window.location.reload();
                                            }
                                             
                                        }
                                    };
                                    
                                    var para="productname="+productname+"&description="+description+"&buyPrice="+buyingprice+"&sellPrice="+sellingprice+"&qty="+qty+"&category="+cattype;
                                    
                                    req.open("POST", "http://localhost:8080/products/addProduct", true);
                                    
                                    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                                    req.send(para);
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   