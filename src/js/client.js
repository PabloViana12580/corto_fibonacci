/*
-------------- corto web  -------------------
-> Pablo Viana Vidal - 16091
-> Fecha: 23/07/2018
-> version 1.0
*/

//Definimos el estado para almacenar el numero de terminos fibonacci que deseamos generar
const state = {
  fibonacci: [],
  terminos: 0,
};

const crearDivs = (altura) =>{
  const divBarra = document.createElement('div');
  divBarra.className = 'barra';
  const nAltura = altura.toString()+"px";
  divBarra.style.height = nAltura;
  return divBarra;
}

//Funcion de render
const render = lState => {

  //Creamos los componenetes que necesitaremos
  const divInput = document.createElement('div');
  divInput.className = 'divInput';

  const input = document.createElement('input');
  input.className = 'input';

  const btnGenerar = document.createElement('button');
  btnGenerar.className = 'btnGenerar';

  const t_generar = document.createTextNode("Generar");

  const despliegue = document.createElement('div');
  despliegue.className = 'despliegue';

  btnGenerar.appendChild(t_generar);
  divInput.appendChild(input);
  divInput.appendChild(btnGenerar);

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  root.className = 'fondo';
  // Main rendering
  root.appendChild(divInput);
  root.appendChild(despliegue);


  btnGenerar.onclick = () => {
    if(input.value != 0 && parseInt(input.value)>0){
      lState.terminos = input.value;
      lState.fibonacci = [];
      lState.fibonacci[0] = 1;
      lState.fibonacci[1] = 1;
      for (let i = 2; i < input.value; i++) {
        lState.fibonacci[i] = lState.fibonacci[i-2] + lState.fibonacci[i-1];
      }
    }

    const contenedor = document.createElement('div');

    lState.fibonacci.forEach(
      altura => {
        const grafica = crearDivs(altura);
        contenedor.appendChild(grafica);
      }
    )

    despliegue.insertBefore(contenedor, despliegue.firstChild);
  }
  
}
//Llamamos funcion render
render(state);
