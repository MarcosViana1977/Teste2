function calcularImpacto() {
    // Captura os valores inseridos pelo usuário
    const resmasMensais = parseFloat(document.getElementById('papeis').value) || 0;
    const recicla = document.getElementById('reciclagem').value;

    // Cálculo aproximado fictício para fins educativos:
    // Uma árvore produz cerca de 16 resmas de papel A4.
    // Usar menos papel e reciclar ajuda a salvar árvores indiretamente.
    
    let arvoresPoupadasAno = 0;

    // Se ele consome papel, vamos calcular a economia se ele reduzisse ou reciclasse
    const resmasAno = resmasMensais * 12;
    
    if (recicla === "sim") {
        // Reciclagem evita o corte de novas árvores para papel e papelão
        arvoresPoupadasAno += 2; 
    }

    // Economia fictícia baseada no consumo consciente de papel
    if (resmasAno > 0) {
        arvoresPoupadasAno += (resmasAno / 16) * 0.5; // Assume que reciclagem ou economia poupa metade do consumo
    } else {
        arvoresPoupadasAno += 1; // Bônus por consumo zero de papel físico
    }

    // Exibe o resultado na tela de forma amigável
    const resultadoDiv = document.getElementById('resultado');
    
    // Arredonda o valor para uma casa decimal
    const totalArvores = arvoresPoupadasAno.toFixed(1);

    resultadoDiv.innerHTML = `
        <div style="padding: 15px; background-color: #d8f3dc; border-radius: 5px; border-left: 5px solid #52b788;">
            🌱 Adotando práticas conscientes, você ajuda a preservar cerca de <strong>${totalArvores} árvores</strong> por ano! <br>
            <small>Pequenas ações geram grandes pulmões para o planeta.</small>
        </div>
    `;
}
