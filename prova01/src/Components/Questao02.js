import { useState } from 'react';
const Questao02 = () => {
  let [numero1, setNumero1] = useState(0);
  let [numero2, setNumero2] = useState(0);
  let [resultado, setResultado] = useState(0);

  let somar = () => {
      setResultado(numero1 + numero2);
  }

  const subtrair = () => {
    setResultado(numero1 - numero2)
  }

    const multiplicar = () => {
      setResultado(numero1 * numero2)
  }

    const dividir = () => {
      setResultado(numero1 / numero2)
  }

  return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <label for="numero1">Número 1: </label>
        <input type="number" id='numero1' value={numero1} onChange={(e) => setNumero1(Number(e.target.value))} />
        <label for="numero2">Número 2: </label>
        <input type="number" id='numero2' value={numero2} onChange={(e) => setNumero2(Number(e.target.value))} />
        <br /><br />
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        <button onClick={multiplicar}>X</button>
        <button onClick={dividir}>/</button>
        <p><strong>Resultado: </strong>{resultado}</p>
      </div>
    );
}

export default Questao02;