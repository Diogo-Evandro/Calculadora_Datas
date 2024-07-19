document.getElementById('date-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);
    
    if (isNaN(date1) || isNaN(date2)) {
        document.getElementById('result').innerText = 'Por favor, insira datas válidas.';
        return;
    }

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('result').innerText = `A diferença entre as datas é de ${diffDays} dias.`;
});
