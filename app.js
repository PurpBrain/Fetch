fetch('https://pixabay.com/api/?key=24593526-a77cdd07f7e21f13b7695e2cc&per_page=5&q=yellow+flowers&image_type=photo')
    .then(x => x.json())
    .then(data => api(data.hits));

function api(data) {
    console.log(data);
    const container = document.createElement('div')
    const row = document.createElement('div')

    document.getElementById('app').appendChild(container)
    container.appendChild(row)
    row.setAttribute('class', 'row')
    container.setAttribute('class', 'container')

    for (var z = 0; z < data.length; z++) {
        const card = document.createElement('div')
        card.setAttribute('class', 'card col-md-4')
        row.appendChild(card)


        if (data[z].userImageURL == "") {
            var checkImg = "https://fakeimg.pl/350x350/?text=Image delete"
        } else {
            var checkImg = data[z].userImageURL
        }
        const img = document.createElement('img')
        img.setAttribute('src', `${checkImg}`)
        img.setAttribute('class', 'card-img-top')
        card.appendChild(img)

        const cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        card.appendChild(cardBody)

        const cardTitle = document.createElement('h5')
        cardTitle.setAttribute('class', 'cars-title')
        cardTitle.innerHTML = `${data[z].user}`
        cardBody.appendChild(cardTitle)

        const cardText = document.createElement('p')
        cardText.setAttribute('class', 'card-text')
        cardText.innerHTML = 'Super text'
        cardBody.appendChild(cardText)
    }
}