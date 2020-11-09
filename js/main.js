let alertOne = false;

const formAlert = () => {
    if (alertOne == false) {
        alert("Los mensajes no están disponibles en este momento puedes intentarlo mas tarde")
        alertOne = true;
    }
}