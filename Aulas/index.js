const fetchApi = async () => {
    const response = await fetch('https://api.github.com/users');
    const formattedResponse = await response.json();
  
    console.log('response', response);
    console.log('formattedResponse', formattedResponse);
  
    if (response.ok) {
      return console.log('Sucesso:', formattedResponse);
    }
  
    return console.log('Erro:', formattedResponse?.message);
  };
  
  fetchApi();