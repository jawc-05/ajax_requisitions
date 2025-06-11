/*document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('search-cep').addEventListener('click', function() {
        //AJAX - Assincronia entre Javascript e XML
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

        xhttp.open('GET', endpoint);
        xhttp.send();

    })
})*/
// jQuery version of the AJAX request

$(document).ready(function(){
    $('#cep').mask('00000-000');

    $('#search-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

    //     $.ajax(endpoint).done(function(answer){
    //         const logradouro = answer.logradouro;
    //         const bairro = answer.bairro;
    //         const cidade = answer.localidade;
    //         const uf = answer.uf;
    //         const address = `${logradouro}, ${bairro} - ${cidade} - ${uf}`;
    //         $('#address').val(address)

    //         setTimeout(function(){
    //             $('#search-cep').find('i').removeClass('d-none');
    //             $('#search-cep').find('span').addClass('d-none');
    //         }, 1000);

            
    //     })

        fetch(endpoint)
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const uf = json.uf;
            const address = `${logradouro}, ${bairro} - ${cidade} - ${uf}`;
            $('#address').val(address)
        })
        .catch(function(error){
            alert("Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde.")
        })
        .finally(function(){
            setTimeout(function(){
                    $('#search-cep').find('i').removeClass('d-none');
                    $('#search-cep').find('span').addClass('d-none');
                }, 1000);
    })
    })
})