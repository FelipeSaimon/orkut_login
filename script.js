function formulario(){

		if (document.form.email.value == ""){
			alert("Vazio");
			document.form.email.focus();
			document.form.email.value == "";
			document.form.senha.value == "";
			return false;
		}

		if (document.form.email.value == "Web.site@exemplo.com" && document.form.senha.value == 123456){
			document.location.assign("carregando.html");
			document.form.email.value == "";
			document.form.senha.value == "";
			return true;
		}else
			alert("Insire um email e uma senha validos");
			return false;

}
