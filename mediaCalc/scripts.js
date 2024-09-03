function montadorDeArray(n1, n2, n3, n4) {
    let array = [];
    if (n1 < 5) array.push("Português");
    if (n2 < 5) array.push("Matemática");
    if (n3 < 5) array.push("Geografia");
    if (n4 < 5) array.push("História");
        return array;
}
    
    function calcularMedia() {
        let nota1 = Number(document.getElementById("nota1").value);
        let nota2 = Number(document.getElementById("nota2").value);
        let nota3 = Number(document.getElementById("nota3").value);
        let nota4 = Number(document.getElementById("nota4").value);
    
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
            document.getElementById("resultado").innerHTML = "Por favor, insira todas as notas.";
            document.getElementById("passou").innerHTML = "";
            document.getElementById("anotacoes").innerHTML = "";
                return;
        }
    
        let media = (nota1 + nota2 + nota3 + nota4) / 4;
        document.getElementById("resultado").innerHTML = media.toFixed(2);
    
        let passou;
        let listaDeReprovados = montadorDeArray(nota1, nota2, nota3, nota4);
    
        if (media < 5) {
            passou = "Reprovado";
        } else {
            passou = "Aprovado";
        }document.getElementById("passou").innerHTML = passou;
        
        if (listaDeReprovados.length > 0) {
            document.getElementById("anotacoes").innerHTML = listaDeReprovados.join(", ");
        } else {
            document.getElementById("anotacoes").innerHTML = "Você não reprovou em nenhuma matéria.";
        }
        }