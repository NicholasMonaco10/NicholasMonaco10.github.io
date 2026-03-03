const findBtn = document.getElementById('findBtn');
const pokemonInput = document.getElementById('pokemonInput');
const pokeImage = document.getElementById('pokeImage');
const pokeAudio = document.getElementById('pokeAudio');
const addToTeamBtn = document.getElementById('addToTeamBtn');
const teamList = document.getElementById('teamList');
const moveSelects = [
    document.getElementById('move1'),
    document.getElementById('move2'),
    document.getElementById('move3'),
    document.getElementById('move4')
];

let currentPokemonData = null;

findBtn.addEventListener('click', async () => {
    const query = pokemonInput.value.toLowerCase().trim();
    if (!query) return;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!response.ok) throw new Error('Pokemon not found');
        
        const data = await response.json();
        currentPokemonData = data;
        displayPokemon(data);
    } catch (error) {
        alert(error.message);
    }
});

function displayPokemon(data) {
    // Set Image
    pokeImage.src = data.sprites.front_default;
    pokeImage.style.display = 'block';

    // Set Sound (Cries)
    pokeAudio.src = data.cries.latest;
    pokeAudio.style.display = 'block';

    // Fill Move Dropdowns
    const moves = data.moves.map(m => m.move.name);
    moveSelects.forEach(select => {
        select.innerHTML = ''; // Clear old moves
        moves.forEach(moveName => {
            const option = document.createElement('option');
            option.value = moveName;
            option.textContent = moveName;
            select.appendChild(option);
        });
    });

    addToTeamBtn.style.display = 'inline-block';
}

addToTeamBtn.addEventListener('click', () => {
    if (!currentPokemonData) return;

    // Create team row
    const teamRow = document.createElement('div');
    teamRow.className = 'team-row';

    // Get selected moves
    const selectedMoves = moveSelects.map(s => s.value);

    teamRow.innerHTML = `
        <div class="team-img-col">
            <img src="${currentPokemonData.sprites.front_default}" width="80">
        </div>
        <div class="team-moves-col">
            <ul>
                ${selectedMoves.map(move => `<li>${move}</li>`).join('')}
            </ul>
        </div>
    `;

    teamList.appendChild(teamRow);
});
