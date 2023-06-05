
    function fetchData() {
      fetch('/api/dados') // Rota para a API em Node.js
        .then(response => response.json())
        .then(data => {
          const resultElement = document.querySelector('.result');
          resultElement.textContent = `Dados recebidos: ${data}`;
        })
        .catch(error => {
          console.log('Ocorreu um erro:', error);
        });
    }
  