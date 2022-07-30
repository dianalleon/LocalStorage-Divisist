//Registrar Materia
const materias = JSON.parse(localStorage.getItem('materia')) ?? [];

let formulario = document.getElementById('formulario');

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
    console.log("Materia Registrada");
    localStorage.setItem('materia', JSON.stringify(materias));
    definitivaFinal();
    
});

function mostrarMaterias() {
    return materias;
}