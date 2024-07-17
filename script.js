document.getElementById('frmInventario').addEventListener('submit', enviarForm);

function enviarForm(e) {
    e.preventDefault();

    const responsable = document.getElementById('inputResponsable').value;
    const correo = document.getElementById('inputcorreo').value
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById ('modelo').value;
    const serial = document.getElementById('serial').value;
    const diagnostico = document.getElementById ('tarea01').value;
    const observaciones=document.getElementById('tarea02').value;
    const departamento = document.getElementById('departamento').value;
    const fechaInicio =document.getElementById('fechaInicio').value;
    const tipoEquipo= document.getElementById('tipoEquipo').value;
    const procedimiento = document.getElementById('procedimiento').value;
    const responsableM = document.getElementById('rM').value;
    const numero = 0;


    if (responsable.trim() === '' || correo.trim() === ''
    || marca.trim() === ''|| modelo.trim()=== ''|| serial.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const formData = {
        'Fecha de Inicio': fechaInicio,
        'Departamento': departamento,
        'Responsable del Equipo': responsable, 
        'Correo':correo,
        'Tipo de Equipo': tipoEquipo,
        'Marca': marca,
        'Modelo': modelo,
        'Serial': serial,
        'Diagnostico': diagnostico,
        'Procedimiento': procedimiento,
        'Observaciones': observaciones,
        'Responsable del Mantenimiento': responsableM,
        'Numero': numero
        
    };

    sendDataToGoogleSheets(formData);
}

function sendDataToGoogleSheets(formData) {
    const url = 'https://sheetdb.io/api/v1/mhq5qeb0zmt0m';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            alert('¡Datos enviados con éxito!');
            document.getElementById('frmInventario').reset();
        } else {
            alert('Error al enviar datos. Por favor, inténtelo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar datos. Por favor, inténtelo de nuevo.');
    });
}
