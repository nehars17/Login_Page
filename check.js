
users=[]
function handleForm(event) { event.preventDefault(); }
var form= document.getElementById('forms')
form.addEventListener('submit',handleForm)


function usercheck(){
  var invalid = true
    var user= document.getElementById('user').value;
    users = JSON.parse(localStorage.getItem('Users'))
    if(users == null){
      users = []
    }
    for (var i=0;i<users.length;i++){
    if (users[i]['username']==user){
      document.getElementById('disclaimer').innerHTML="User Already exist!"
       invalid=false


    }
    }

    if (invalid==true){
     store()
      

    }


 
  }
 



  




function store(){
var users=JSON.parse(localStorage.getItem('Users'));
  if(users == null){
    users = []
  }
var user= document.getElementById('user').value;
var pwd= document.getElementById('pwd').value;
    if (pwd.length>=8 ){   
      user={'username':user, 'password':pwd}
      users.push(user)
      localStorage.setItem('Users', JSON.stringify(users))
      alert('Account created Successfully')
      window.location.reload()
     
      
      }
      else{
  
        document.getElementById('disclaimer').innerHTML="Password should be more than 8 characters!"
        
        
      }
      
    
    
   
    
    
    
  }
 
 





function check(){
    var invalid = true
    var user2= document.getElementById('user2').value;
    var pwd2= document.getElementById('pwd2').value;
    users = JSON.parse(localStorage.getItem('Users'))
    for (var i=0;i<users.length;i++){
    if (users[i]['username']==user2 && users[i]['password']==pwd2){
       alert('Login Successful')
       invalid=false
       window.location.reload()


    }
    }

    if (invalid==true){
      document.getElementById('disclaimer').innerHTML="Invalid Username or Password!"
      

    }



}

function forgot(){

var user= document.getElementById('userforgot').value;
var newpw=document.getElementById('newpwd').value
var invalid = true
users = JSON.parse(localStorage.getItem('Users'))
for (var i=0;i<users.length;i++){
if (users[i]['username']==user){ 
  if(newpw.length>=8){
  users[i]['password']=newpw
  localStorage.setItem('Users', JSON.stringify(users))
  invalid=false
  alert('Password Reset Successful!')
  window.location.reload()
  
  }
  else{
    document.getElementById('disclaimer').innerHTML="Password should be more than 8 characters!"
    invalid=false
  }

}
}

if (invalid==true){
  document.getElementById('disclaimer').innerHTML="Invalid Username!"
  

}




}