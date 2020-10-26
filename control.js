function validarForm(event) {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('password').value;
    if(user == "" || pass == "") {
        alert("Hay un campo vacio, recuerda completar ambos campos!");
        form.username.focus();
        return false;
      }
    if (!user.includes("@",0)) {
        alert("Falta el arroba en el usuario");
    }
  }
  
  const form = document.getElementById('form');
  form.addEventListener('submit', validarForm);