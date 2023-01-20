const form = document.querySelector("#form-habits")

//Chama a biblioteca NLWSetup
const nlwSetup = new NLWSetup(form)

//Cria um evento e adiciona ao button
const button = document.querySelector("header button")
button.addEventListener("click", add)

//Cria o evento de salva as alterações do form
form.addEventListener("change", save)

//Função de Adicionar dia
function add() {
  //Pega o dia atual local
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)

  //Verifica se o dia ja esta cadastrado
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  //Adiciona um dia
  nlwSetup.addDay(today)
}

//Função para salvar os dados do form
function save(){
  //localStorage -> Guarda no navegador as informações
  //JSON.stringify -> Transforma os dados em string
  window.localStorage.setItem('HabitsDays',JSON.stringify(nlwSetup.data))
}

//Pega os dados salvos em String e Transforma em Object
const data =JSON.parse(localStorage.getItem('HabitsDays')) ||{}

nlwSetup.setData(data)

//Renderiza o layout
nlwSetup.load()

