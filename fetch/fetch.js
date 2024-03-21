function adddata(id, name, score) {
    let apiurl = '<< API URL >>';

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
