function matriz() {

    var matriz1 =
        [[1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]];

    for (let lin = 0; lin < 3; lin++) {
        for (let col = 0; col < 4; col++)
            document.getElementById("quatro").innerHTML += matriz1[lin][col] + " ";

    }
}
function matrizz() {

    const numero = Number(document.getElementById("linha").value) - 1;
    var matriz2 =
        [[1, 2, 3],
        [5, 6, 7],
        [9, 10, 11]];

    document.getElementById("tres").innerHTML += matriz2[numero] + " ";

}

function matrizzz() {

    const somar = Number(document.getElementById("l1").value);
    const somar1 = Number(document.getElementById("l2").value);
    const somar2 = Number(document.getElementById("l3").value);
    const somar3 = Number(document.getElementById("l4").value);
    var matriz3 =
        [[1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]];
    for (let lin = 0; lin < 4; lin++) {
        for (let col = 0; col < 4; col++) { }
    }
    document.getElementById("ii").innerHTML += matriz3[somar, somar1, somar2, somar3] = " ";
}

function matrizzzz() {
    var matriz4 =
        [[20, 30],
        [40, 50]];

    var matriz44 =
        [[60, 70],
        [80, 90]];

    if (matriz4 > matriz44) {
        resultado = matriz4
    } else {
        resultado = matriz44

    }
    document.getElementById("2x").innerHTML += resultado;
}

function ordem() {

    const somar = document.getElementById("t1").value;
    const somar1 = document.getElementById("t2").value;
    const somar2 = document.getElementById("t3").value;
    const somar3 = document.getElementById("t4").value;

    let result = [
        somar.split(' '),
        somar1.split(' '),
        somar2.split(' '),
        somar3.split(' '),
    ]

    document.getElementById("tt").innerHTML = result;

}
