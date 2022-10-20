
let Questao01B = () => {
  let disciplinas = ["Desenvolvimento Web", "Lógica Para Computação","Gestão de Processos e Negócios"];
  return (
    <div class="Disciplinas">
        {disciplinas.map(itens => {
          return <p key={itens}>{itens}</p>
        })}
    </div>
  )
}

export default Questao01B