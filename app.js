//Registrar Materia

const materias = JSON.parse(localStorage.getItem('materia')) ?? [];
const canceladas = JSON.parse(localStorage.getItem('cancelada')) ?? [];

mostrarTabla();
let tabla = document.querySelector("#table");

//Guardar en el formulario
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const materia ={
        nombre:document.getElementById('nombre').value,
        pp:document.getElementById('pp').value,
        sp:document.getElementById('sp').value,
        tp:document.getElementById('tp').value,
        ex:document.getElementById('ex').value
    }

    materias.push(materia);
    definitivaFinal();
    cambiarColor();
    mostrarTabla();   
    localStorage.setItem('materia', JSON.stringify(materias));
});


//Calcular Definitiva
function definitivaFinal(){
    materias.map(item => {
  
        let def = (((Number(item.pp) + Number(item.sp) + Number(item.tp))/3)*0.7+(item.ex* 0.3))
    
        if(def>=2.95&&def<3){
    
          def=3
        }
          item.def= def
    
      })
}

//Cambiar el Color segun la defitiva
function cambiarColor(){
    materias.map( item =>{
    
            if(item.def >0.0 && item.def<=2.9){
                item.color="red"
            }else if(item.def >=3.0 && item.def<=3.9){
                item.color="yellow"
            }else if(item.def >=4.0 && item.def<=5.0){
                item.color="green"
            }
        })
}

function mostrarTabla() {
    let result="";
    materias.forEach((item) => {
      result += `
        <tr>
            <td>${item.nombre}</td>
            <td>${item.pp}</td>
            <td>${item.sp}</td>
            <td>${item.tp}</td>
            <td>${item.ex}</td>
            <td>${item.def}</td>
            <td>
                <button id="button" type="submit">Cancelar</button>
                <button id="button" type="submit">Editar</button>
            </td>
      </tr>`
    })
      let tab = document.querySelector("#tab");
      tab.innerHTML = result;
  }

    var canc = document.getElementById('button');
    canc.addEventListener('click', materiaCancelada);

    function materiaCancelada(){
        let cancelada = materias.find(item => item.nombre == nombre);
        canceladas.push(cancelada);
        localStorage.removeItem(cancelada);
        mostrarTabla();
        mostrarCancelada();
    }

    function mostrarCancelada(){
        return canceladas;
    }

