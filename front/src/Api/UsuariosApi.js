const url = "http://Localhost:4000/Usuarios/";
//const url = "API PARA TRAER USUARIOS"

export async function getListaUsuarios(){
    const res = await fetch(url);
    const data = await res.json();
    return data.Usuarios;
}

export async function getListaUsuarioId(id){
    const res = await fetch(url +`${id}`);
    const data = await res.json();
    return data;
}

export async function editarUsuario(usuario){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    return data;
}

export async function eliminarUsuario(id){
    const res = await fetch(url+`${id}`,{
        method: 'DELETE',
        headers:{'content-type': 'application/json'},
    });
    const data = await res.json();
    return data;
}

export async function login(usuario){
    const res = await fetch(url + 'login',{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    return data;
}

export async function agregarUsuario(usuarios){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(usuarios)
    });

    const data = await res.json();
    console.log(usuarios)
    console.log(data)

    return data.usuarios
}