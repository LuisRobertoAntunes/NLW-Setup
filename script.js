const form = document.querySelector("#form-habits")

/* Chama a biblioteca NLWSetup*/
const nlwSetup = new NLWSetup(form)

/*Dados da tabela hábitos*/
const data = {
  //Cada dia deve ser com o formato: MM-DD
  run: ["01-02"],
  water: ["01-01", "01-02", "01-03", "01-04", "01-05"],
  food: ["01-01", "01-03"],
}
nlwSetup.setData(data)

/*Renderiza o layout*/
nlwSetup.load()
