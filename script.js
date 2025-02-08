const apiKey = 'TU_CLAVE_DE_API'; // Reemplaza con tu clave de API
const urlBase = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

async function convertir() {
    const cantidad = document.getElementById('cantidad').value;
    const monedaOrigen = document.getElementById('moneda-origen').value;
    const monedaDestino = document.getElementById('moneda-destino').value;

    if (!cantidad || cantidad <= 0) {
        alert('Por favor ingresa una cantidad válida.');
        return;
    }

    try {
        const respuesta = await fetch(`${urlBase}${monedaOrigen}`);
        const datos = await respuesta.json();

        if (datos.result === 'success') {
            const tasa = datos.conversion_rates[monedaDestino];
            const resultado = cantidad * tasa;
            document.getElementById('resultado').innerText = `${cantidad} ${monedaOrigen} son ${resultado.toFixed(2)} ${monedaDestino}.`;
        } else {
            alert('Error al obtener los datos de la API.');
        }
    } catch (error) {
        alert('Ocurrió un error al realizar la conversión.');
    }
}

