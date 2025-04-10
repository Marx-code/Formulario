const id_usuario_login = document.querySelector('#id_usuario_login');
const senha_login = document.querySelector('#senha_login');
const formulariologin = document.querySelector('.formulariologin');


formulariologin.addEventListener("submit", (event) => {
    event.preventDefault();

    
    validacaoGeralForm();

})

function checkInputidusuariologin(){
    const id_usuario_loginValue = id_usuario_login.value;

    if(id_usuario_loginValue === ""){
        erroDeValidacao(id_usuario_login, "Campo Obrigatório!")
    }
    
    else if(id_usuario_loginValue != "01812470"){
        erroDeValidacao(id_usuario_login, "Usuário inválido");
    }else{
        const formItem = id_usuario_login.parentElement;
        formItem.className = "campo";
    }
    
}

function checkInputsenha_login(){
    const senha_loginValue = senha_login.value;

    if(senha_loginValue === ""){
        erroDeValidacao(senha_login, "Campo Obrigatório!")
    }else if(senha_loginValue != "senha"){
        erroDeValidacao(senha_login, "Senha incorreta!")
    }else{
        const formItem = senha_login.parentElement;
        formItem.className = "campo";

    }
}

function erroDeValidacao(input, mensagem){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = mensagem;

    formItem.className = "campo error";
}





//valicao geral
function validacaoGeralForm() {

    checkInputsenha_login();
    checkInputidusuariologin();



    const listaDeVerificacao = formulariologin.querySelectorAll(".campo");


    const valido = [...listaDeVerificacao].every( (items) => {
        return items.className === "campo";
    });


    

    if(id_usuario_login.value === "01812470" && senha_login.value === "senha"){
        alert('login realizado com sucesso!')
        window.location.href = 'meme.html';
    }else{
        window.scrollTo(0, 0);
    }

}