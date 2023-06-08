const url = "http://Localhost:4000/Articulos/";
//const url = "API PARA TRAER Articulos"

export async function getListaArticulos(){
    const res = await fetch(url);
    const data = await res.json();
    return data.Articulos;
}

export async function getListaArticuloId(id){
    const res = await fetch(url +`${id}`);
    const data = await res.json();
    return data;
}

export async function editarArticulo(Articulo){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(Articulo)
    });
    const data = await res.json();
    return data;
}

export async function eliminarArticulo(id){
    const res = await fetch(url+`${id}`,{
        method: 'DELETE',
        headers:{'content-type': 'application/json'},
    });
    const data = await res.json();
    return data;
}

export async function login(Articulo){
    const res = await fetch(url + 'login',{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(Articulo)
    });
    const data = await res.json();
    return data;
}

export async function agregarArticulo(Articulos){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(Articulos)
    });

    const data = await res.json();
    console.log(Articulos)
    console.log(data)

    return data.Articulos
}