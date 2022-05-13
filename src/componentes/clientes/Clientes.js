import React, { useEffect } from 'react';

// importar clientes axios
import clienteAxios from '../../config/axios';

function Clientes() {

    // Query a la API
    const consultarAPI = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');

        console.log(clientesConsulta);
    }
    // use effect es similar a componentDidmount y willmount
    useEffect( () => {
        consultarAPI();
    });

    return (
        <h2>Clientes</h2>
    );
}

export default Clientes;