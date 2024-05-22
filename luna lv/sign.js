


function login()
{
    var name=document.getElementById('user');
    var pass=document.getElementById('pass');
    var data=JSON.parse( localStorage.getItem('userinfo'));
   if(name.value==data.username&&pass.value==data.password)
   {
    alert('ok')
    location.assign('index.html')
   }
   else
   {
    alert("name or password not correct");
   }
}
