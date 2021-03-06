function getUF() {
    const ufSelect = document.querySelector('[name=uf]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then( res => res.json() )
    .then( states => {

        for (const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

getUF()

function getCities(event) {
    const citySelect = document.querySelector('[name=city')
    const stateInput = document.querySelector('[name=state')

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for( city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}


document
    .querySelector('select[name=uf')
    .addEventListener('change', getCities)



    // Itens de coleta

    const itemsToCollect = document.querySelectorAll('.items-grid li')

    for (const item of itemsToCollect) {
        item.addEventListener('click', handleSelectedItem)
    }

    const colletedItems = document.querySelector('input[name=items]')

    let selectedItems = []

    function handleSelectedItem(event) {
        // add or remove one class javascript 
        const itemLi = event.target

        itemLi.classList.toggle('selected')
        
        const itemId = event.target.dataset.id
        console.log('ITEM ID: ', itemId)

        // verificar se tem itens selecionados, se sim
        // pegar os itens selecionados

        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item === itemId // Valor retornado será true or false
            return itemFound
        })

        
        // se já estiver selecionado, tirar da seleção
        if (alreadySelected >= 0) {
            // tirar seleção
            const filteredItems = selectedItems.filter(item => {
                const itemsIsDifferent = item != itemId
                return itemsIsDifferent
            })
            selectedItems = filteredItems
        } else {
            // se não estiver selecionado,
            // adicionar seleção
            selectedItems.push(itemId)

        }

        console.log('selectedItems: ', selectedItems)

        // atualizar o campo escondido com os itens selecionados
        colletedItems.value = selectedItems   
    }