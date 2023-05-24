const url = "http://Localhost:4000/Usuarios";
//const url = "API PARA TRAER USUARIOS"

export async function getListaUsuarios(){
    const res = await fetch(url);
    const data = await res.json();
    return data.usuarios;
}

export async function agregarUsuario(usuarios){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json',
        body: JSON.stringify(usuarios)}
    });

    const data = await res.json();

    return data.usuarios
}