function sendForm() {
    const url = "https://mautic.armanelli.com.br/form/submit"; // Substitua essa URL para a do seu Mautic
  
    const form = new FormData();
  
    form.append("mauticform[nome]", "Teste nome"); 
    form.append("mauticform[email]", "testeemail@gmail.com");
    form.append("mauticform[mensagem]", "Teste mensagem");
    form.append("mauticform[formId]", "4"); // Id do formulário no Mautic
  
    const config = {
      headers: { "content-type": "multipart/form-data" }
    };
  
    await axios.post(url, form, config).then(response => { 
      console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }