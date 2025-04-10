const formulario = document.querySelector('.formulario');
const nome = document.querySelector('#nome');
const dataNascumento = document.querySelector('#data-nascimento');
const cpf = document.querySelector('#cpf');
const sexo = document.querySelector('#sexo');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const identidade = document.querySelector('#identidade');
const cep = document.querySelector('#cep');
const rua = document.querySelector('#rua');
const numero = document.querySelector('#numero');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const ComprovanteResidencia = document.querySelector('#Comprovante-residencia');
const idUsuario = document.querySelector('#id_usuario');
const senha = document.querySelector('#senha');

const id_usuario_login = document.querySelector('#id_usuario_login');
const senha_login = document.querySelector('#senha_login');
const formulariologin = document.querySelector('.formulariologin');





formulario.addEventListener("submit", (event) => {
    event.preventDefault();


    validacaoGeralForm();
    window.location.href = 'login.html';
})



function checkInputNome(){
    const nomeValue = nome.value;

    if(nomeValue === ""){
        erroDeValidacao(nome, "Campo Obrigatório!")
    }else{
        const formItem = nome.parentElement;
        formItem.className = "campo"
        localStorage.setItem("nome", nomeValue);
        const nomeSalva = localStorage.getItem("nome");
    }
    
}

function checkInputDataNascumento(){
    const data = dataNascumento.value

    if(data === ""){
        erroDeValidacao(dataNascumento, "Campo Obrigatório!")
    }else{
        const formItem = dataNascumento.parentElement;
        formItem.className = "campo"
    }
    
}

function checkInputSexo(){
    const sexoValue = sexo.value;

    if(sexoValue === ""){
        erroDeValidacao(sexo, "Campo Obrigatório!")
    }else{
        const formItem = sexo.parentElement;
        formItem.className = "campo"
    }
    
}

function checkInputCpf(){
    const cpfValue = cpf.value;

    if(cpfValue === ""){
        erroDeValidacao(cpf, "Campo Obrigatório!")
    }else{
        const formItem = cpf.parentElement;
        formItem.className = "campo";
        localStorage.setItem("cpf", cpfValue);
        const cpfSalva = localStorage.getItem("cpf");
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        erroDeValidacao(email, "Campo Obrigatório!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "campo";
        localStorage.setItem("email", emailValue);
        const emailSalva = localStorage.getItem("email");
    }
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if(telefoneValue === ""){
        erroDeValidacao(telefone, "Campo Obrigatório!")
    }else{
        const formItem = telefone.parentElement;
        formItem.className = "campo";
        localStorage.setItem("telefone", telefoneValue);
        const telefoneSalva = localStorage.getItem("telefone");
    }
}


function checkInputIdentidade(){

    if(identidade.files.length === 0){
        erroDeValidacaoLabel(identidade, "campo Obrigatório");
    }else{
        const formItem = identidade.parentElement;
        formItem.className = "label__file";
    }
}


function checkInputCep(){
    const cepValue = cep.value;

    if(cepValue === ""){
        erroDeValidacao(cep, "Campo Obrigatório!")
    }else{
        const formItem = cep.parentElement;
        formItem.className = "campo";
        localStorage.setItem("cep", cepValue);
        const cepSalva = localStorage.getItem("cep");
    }
    
}

function checkInputRua(){
    const ruaValue = rua.value;

    if(ruaValue === ""){
        erroDeValidacaoCampoComposto(rua, "Campo Obrigatório!")
    }else{
        const formItem = rua.parentElement;
        formItem.className = "campo";
        localStorage.setItem("rua", ruaValue);
        const ruaSalva = localStorage.getItem("rua");
    }
    
}

function checkInputNumero(){
    const numeroValue = numero.value;

    if(numeroValue === ""){
        erroDeValidacaoCampoComposto(numero, "Campo Obrigatório!")
    }else{
        const formItem = numero.parentElement;
        formItem.className = "campo";
        localStorage.setItem("numero", numeroValue);
        const numeroSalva = localStorage.getItem("numero");
    }
    
}

function checkInputCidade(){
    const cidadeValue = cidade.value;

    if(cidadeValue === ""){
        erroDeValidacaoCampoComposto(cidade, "Campo Obrigatório!")
    }else{
        const formItem = cidade.parentElement;
        formItem.className = "campo";
        localStorage.setItem("cidade", cidadeValue);
        const cidadeSalva = localStorage.getItem("cidade");
    }
    
}

function checkInputEstado(){
    const estadoValue = estado.value;

    if(estadoValue === ""){
        erroDeValidacaoCampoComposto(estado, "Campo Obrigatório!")
    }else{
        const formItem = estado.parentElement;
        formItem.className = "campo";
        localStorage.setItem("estado", estadoValue);
        const estadoSalva = localStorage.getItem("cidade");
    }
    
}

function checkInputidusuario(){
    const id_usuarioValue = idUsuario.value;

    if(id_usuarioValue === ""){
        erroDeValidacao(idUsuario, "Campo Obrigatório!")
    }else{
        const formItem = idUsuario.parentElement;
        formItem.className = "campo";
        localStorage.setItem("idUsuario", id_usuarioValue);
        const idUsuarioSalva = localStorage.getItem("idUsuario");
    }
}

function checkInputsenha(){
    const senhaValue = senha.value;

    if(senhaValue === ""){
        erroDeValidacao(senha, "Campo Obrigatório!")
    }else{
        const formItem = senha.parentElement;
        formItem.className = "campo";

        localStorage.setItem("senha", senhaValue);
        const senhaSalva = localStorage.getItem("senha");
    }
}

function checkInputComprovanteResidencia(){

    if(ComprovanteResidencia.files.length === 0){
        erroDeValidacaoLabel(ComprovanteResidencia);
    }else{
        const formItem = ComprovanteResidencia.parentElement;
        formItem.className = "label__file";
    }
}




//validacao login
function checkInputidusuariologin(){
    const id_usuario_loginValue = id_usuario_login.value;

    if(id_usuario_loginValue === ""){
        erroDeValidacao(id_usuario_login, "Campo Obrigatório!")
    }else{
        const formItem = id_usuario_login.parentElement;
        formItem.className = "campo";

    }
}



//validacao dos inputs files
function erroDeValidacaoLabel(input){
    const formItem = input.parentElement;

    formItem.className = "label__file error";
}

//valicao dos inputs normais
function erroDeValidacao(input, mensagem){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = mensagem;

    formItem.className = "campo error";
}

//valicao dos inputs compostos
function erroDeValidacaoCampoComposto(input, mensagem){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = mensagem;

    formItem.className = "campo__composto__elemento error";
}

function validacaoGeralForm() {

    checkInputNome();
    checkInputDataNascumento();
    checkInputCpf();
    checkInputSexo();
    checkInputEmail();
    checkInputTelefone();
    checkInputIdentidade();
    checkInputCep();
    checkInputRua();
    checkInputNumero();
    checkInputCidade();
    checkInputEstado();
    checkInputComprovanteResidencia();
    checkInputidusuario();
    checkInputsenha();


    const listaDeVerificacao = formulario.querySelectorAll(".Campo");

    const listaDeVerificacaoCampoComposto = formulario.querySelectorAll(".campo__composto__elemento");

    const listaDeVerificacaofile = formulario.querySelectorAll(".label__file");

    const valido = [...listaDeVerificacao].every( (items) => {
        return items.className === "campo";
    });

    const validoComposto = [...listaDeVerificacaoCampoComposto].every( (items) => {
        return items.className === "campo__composto__elemento";
    });

    const validofile = [...listaDeVerificacaofile].every( (items) => {
        return items.className === "label__file";
    });


    

    //valicao dos camspo e arquivos 
    if(valido && validoComposto && validofile){
        alert('Cadastro feito com sucesso!')
    }else{
        window.scrollTo(0, 0);
        alert('Algum campo obrigatório não foi preenchido')
    }

    //validacao da secao de alguma trilha
    const selecionado = document.querySelector('input[name="trilha"]:checked');

  if (!selecionado) {
    alert('Selecione uma trilha antes de enviar.');
    e.preventDefault();
  }
}

nome.value = localStorage.getItem("nome");
cpf.value = localStorage.getItem("cpf");
email.value = localStorage.getItem("email");
telefone.value = localStorage.getItem("telefone");
cep.value = localStorage.getItem("cep");
rua.value = localStorage.getItem("rua");
numero.value = localStorage.getItem("numero");
cidade.value = localStorage.getItem("cidade");
estado.value = localStorage.getItem("estado");
idUsuario.value = localStorage.getItem("idUsuario");
senha.value = localStorage.getItem("senha");

