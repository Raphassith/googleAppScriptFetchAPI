function adddata(id, name, score) {
    let apiurl = 'https://script.google.com/macros/s/AKfycbwu94qx5rJotGOqi1XyY007VTSAXVPQCx9GaXZ73LKEoLgckk4IGfZia9RvVPdJzCI/exec';

    let raw = {
        "id": id,
        "name": name,
        "score": score
    };

    let requestOptions = {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(raw),

    };

    fetch(apiurl, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

}