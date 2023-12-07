const pkmn1_50Api = 'https://pokeapi.co/api/v2/pokemon?limit=50'
const pkmn51_100Api = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=50'
const pkmn101_151Api = 'https://pokeapi.co/api/v2/pokemon?limit=51&offset=100'
const pkmnsCardsContainer = document.querySelector('#pkmnCardsContainer')
const pkmnDetails1 = []
const pkmnDetails2 = []
const pkmnDetails3 = []

const btn1_50 = document.querySelector('#btn1-50')
const btn51_100 = document.querySelector('#btn51-100')
const btn101_151 = document.querySelector('#btn101-151')
const selectAudio = document.querySelector('#selectAudio')

fetchPkmn1_50(pkmn1_50Api)
fetchPkmn51_100(pkmn51_100Api)
fetchPkmn101_151(pkmn101_151Api)

async function fetchPkmn1_50(url) {
    const response = await fetch(url)
    const data = await response.json()
    const pkmns = data.results
    
    for (let i = 0; i < pkmns.length; i++) {
        const singlePokemon = pkmns[i]
        const response = await fetch(singlePokemon.url)
        const pkmnData = await response.json()
        pkmnDetails1.push(pkmnData)
    }

        btn1_50.addEventListener('click', () => {
            let pkmnsCards = ''
            pkmnDetails1.forEach((pkmn) => {
                pkmnsCards += createCard(pkmn)
            })
        pkmnsCardsContainer.innerHTML = pkmnsCards

        // card sounds
        const cardsForAudio = document.querySelectorAll('.pkmnCard')
        console.log(cardsForAudio)

        cardsForAudio.forEach(card => {
            card.addEventListener('mouseover', () => {
                playSelectAudioCards()
            })
            card.addEventListener('mouseout', () => {
                noPlay()
            })
        })

        // types background-color
        const pkmnTypes = document.querySelectorAll('.pkmnType')

        for (let i = 0; i < pkmnTypes.length; i++) {
            switch (pkmnTypes[i].textContent) {
                case 'grass':
                    pkmnTypes[i].classList.add('grassType');
                    break;

                case 'normal':
                    pkmnTypes[i].classList.add('normalType');
                    break;

                case 'fire':
                    pkmnTypes[i].classList.add('fireType');
                    break;

                case 'fighting':
                    pkmnTypes[i].classList.add('fightingType');
                    break;   
                    
                case 'water':
                    pkmnTypes[i].classList.add('waterType');
                    break;

                case 'flying':
                    pkmnTypes[i].classList.add('flyingType');
                    break;

                case 'poison':
                    pkmnTypes[i].classList.add('poisonType');
                    break;

                case 'electric':
                    pkmnTypes[i].classList.add('electricType');
                    break;

                case 'ground':
                    pkmnTypes[i].classList.add('groundType');
                    break;

                case 'psychic':
                    pkmnTypes[i].classList.add('psychicType');
                    break;

                case 'rock':
                    pkmnTypes[i].classList.add('rockType');
                    break;

                case 'ice':
                    pkmnTypes[i].classList.add('iceType');
                    break;

                case 'bug':
                    pkmnTypes[i].classList.add('bugType');
                    break;
                
                case 'dragon':
                    pkmnTypes[i].classList.add('dragonType');
                    break;

                case 'ghost':
                    pkmnTypes[i].classList.add('ghostType');
                    break;

                case 'dark':
                    pkmnTypes[i].classList.add('darkType');
                    break;

                case 'steel':
                    pkmnTypes[i].classList.add('steelType');
                    break;       
                case 'fairy':
                    pkmnTypes[i].classList.add('fairyType');
                    break;  
                default:
            }
        }

        })
}

async function fetchPkmn51_100(url) {
    const response = await fetch(url)
    const data = await response.json()
    const pkmns = data.results
    
    for (let i = 0; i < pkmns.length; i++) {
        const singlePokemon = pkmns[i]
        const response = await fetch(singlePokemon.url)
        const pkmnData = await response.json()
        pkmnDetails2.push(pkmnData)
    }

        btn51_100.addEventListener('click', () => {
            let pkmnsCards = ''
            pkmnDetails2.forEach((pkmn) => {
                pkmnsCards += createCard(pkmn)
            })
        pkmnsCardsContainer.innerHTML = pkmnsCards

        // card sounds
        const cardsForAudio = document.querySelectorAll('.pkmnCard')
        console.log(cardsForAudio)

        cardsForAudio.forEach(card => {
            card.addEventListener('mouseover', () => {
                playSelectAudioCards()
            })
            card.addEventListener('mouseout', () => {
                noPlay()
            })
        })

        // types background-color
        const pkmnTypes = document.querySelectorAll('.pkmnType')

        for (let i = 0; i < pkmnTypes.length; i++) {
            switch (pkmnTypes[i].textContent) {
                case 'grass':
                    pkmnTypes[i].classList.add('grassType');
                    break;

                case 'normal':
                    pkmnTypes[i].classList.add('normalType');
                    break;

                case 'fire':
                    pkmnTypes[i].classList.add('fireType');
                    break;

                case 'fighting':
                    pkmnTypes[i].classList.add('fightingType');
                    break;   
                    
                case 'water':
                    pkmnTypes[i].classList.add('waterType');
                    break;

                case 'flying':
                    pkmnTypes[i].classList.add('flyingType');
                    break;

                case 'poison':
                    pkmnTypes[i].classList.add('poisonType');
                    break;

                case 'electric':
                    pkmnTypes[i].classList.add('electricType');
                    break;

                case 'ground':
                    pkmnTypes[i].classList.add('groundType');
                    break;

                case 'psychic':
                    pkmnTypes[i].classList.add('psychicType');
                    break;

                case 'rock':
                    pkmnTypes[i].classList.add('rockType');
                    break;

                case 'ice':
                    pkmnTypes[i].classList.add('iceType');
                    break;

                case 'bug':
                    pkmnTypes[i].classList.add('bugType');
                    break;
                
                case 'dragon':
                    pkmnTypes[i].classList.add('dragonType');
                    break;

                case 'ghost':
                    pkmnTypes[i].classList.add('ghostType');
                    break;

                case 'dark':
                    pkmnTypes[i].classList.add('darkType');
                    break;

                case 'steel':
                    pkmnTypes[i].classList.add('steelType');
                    break;       
                case 'fairy':
                    pkmnTypes[i].classList.add('fairyType');
                    break;  
                default:
            }
        }
        })
}

async function fetchPkmn101_151(url) {
    const response = await fetch(url)
    const data = await response.json()
    const pkmns = data.results
    
    for (let i = 0; i < pkmns.length; i++) {
        const singlePokemon = pkmns[i]
        const response = await fetch(singlePokemon.url)
        const pkmnData = await response.json()
        pkmnDetails3.push(pkmnData)
    }

        btn101_151.addEventListener('click', () => {
            let pkmnsCards = ''
            pkmnDetails3.forEach((pkmn) => {
                pkmnsCards += createCard(pkmn)
            })
        pkmnsCardsContainer.innerHTML = pkmnsCards

        let noemiPkmn = ` 
        <div class="pkmnCard">
            <div class="pkmnImg">
                <img src="assets/img/noemiPokemon.jpg" alt="noemi">
            </div>
            <p>#152 LEGGENDARIOH</p>
            <h2>NOEMI</h2>
            <div class="typesContainer">
                <p class="pkmnType">fairy</p>
                <p class="pkmnType">ice</p>
            </div>
        </div>
        `

        pkmnsCardsContainer.innerHTML += noemiPkmn

        // card sounds
        const cardsForAudio = document.querySelectorAll('.pkmnCard')
        console.log(cardsForAudio)

        cardsForAudio.forEach(card => {
            card.addEventListener('mouseover', () => {
                playSelectAudioCards()
            })
            card.addEventListener('mouseout', () => {
                noPlay()
            })
        })

        // types background-color
        const pkmnTypes = document.querySelectorAll('.pkmnType')

        for (let i = 0; i < pkmnTypes.length; i++) {
            switch (pkmnTypes[i].textContent) {
                case 'grass':
                    pkmnTypes[i].classList.add('grassType');
                    break;

                case 'normal':
                    pkmnTypes[i].classList.add('normalType');
                    break;

                case 'fire':
                    pkmnTypes[i].classList.add('fireType');
                    break;

                case 'fighting':
                    pkmnTypes[i].classList.add('fightingType');
                    break;   
                    
                case 'water':
                    pkmnTypes[i].classList.add('waterType');
                    break;

                case 'flying':
                    pkmnTypes[i].classList.add('flyingType');
                    break;

                case 'poison':
                    pkmnTypes[i].classList.add('poisonType');
                    break;

                case 'electric':
                    pkmnTypes[i].classList.add('electricType');
                    break;

                case 'ground':
                    pkmnTypes[i].classList.add('groundType');
                    break;

                case 'psychic':
                    pkmnTypes[i].classList.add('psychicType');
                    break;

                case 'rock':
                    pkmnTypes[i].classList.add('rockType');
                    break;

                case 'ice':
                    pkmnTypes[i].classList.add('iceType');
                    break;

                case 'bug':
                    pkmnTypes[i].classList.add('bugType');
                    break;
                
                case 'dragon':
                    pkmnTypes[i].classList.add('dragonType');
                    break;

                case 'ghost':
                    pkmnTypes[i].classList.add('ghostType');
                    break;

                case 'dark':
                    pkmnTypes[i].classList.add('darkType');
                    break;

                case 'steel':
                    pkmnTypes[i].classList.add('steelType');
                    break;       
                case 'fairy':
                    pkmnTypes[i].classList.add('fairyType');
                    break;  
                default:
            }
        }
        })
}

function createCard(pokemon) {
    return ` 
    <div class="pkmnCard">
        <div class="pkmnImg">
            <img src="${pokemon.sprites.front_default}" alt=${pokemon.name}>
        </div>
        <p>#${pokemon.id}</p>
        <h2>${pokemon.name}</h2>
        <div class="typesContainer">
            <p class="pkmnType">${pokemon.types[0].type.name}</p>
            <p class="pkmnType">${pokemon.types[1] ? pokemon.types[1].type.name : 'N/A'}</p>
        </div>
    </div>
    `
}

// AUDIO

btn1_50.addEventListener('click', playSelectAudio)
btn51_100.addEventListener('click', playSelectAudio)
btn101_151.addEventListener('click', playSelectAudio)

function playSelectAudio() {
    selectAudio.currentTime = 0
    setVolume(1)
    selectAudio.play()
}

function playSelectAudioCards() {
    selectAudio.currentTime = 0
    setVolume(0.4)
    selectAudio.play()
}

function noPlay() {
    setVolume(0)
}

function setVolume(volume) {
    selectAudio.volume = volume;
}