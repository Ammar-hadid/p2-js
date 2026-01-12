const message = document.getElementById('advice')

const activities = 
[
    "wandelen",
    "mediteren",
    "een dutje doen",
    "stretchen",
    "journalen",
    "tekenen",
    "yoga doen",
    "een podcast luisteren",
    "buiten zitten",
    "opruimen",
    "koken",
    "lezen",
    "dansen",
    "ademhalingsoefeningen doen",
    "foto's bekijken",
    "plannen maken",
    "vrienden bellen",
    "creatief schrijven",
    "een bad nemen",
    "muziek maken"
];

const objects = 
[
    "een kop thee",
    "je favoriete boek",
    "je telefoon uitzetten",
    "rustgevende muziek",
    "een kaars",
    "een koptelefoon",
    "een glas water",
    "een warme deken",
    "een notitieboekje",
    "je favoriete playlist",
    "een nieuwe podcast",
    "kruidenthee",
    "de gordijnen dicht",
    "een timer van 5 minuten",
    "een glimlach",
    "je camera",
    "verse munt thee",
    "een positieve mindset",
    "pen en papier",
    "lavendel olie"
];

document.addEventListener('click', e => {
    if (e.target.id === 'btn') {
        renferAdvice();
        console.log('')
    }
})

function renferAdvice() {
    const activitiesIndex = Math.floor(Math.random() * activities.length);
    const objectsIndex = Math.floor(Math.random() * objects.length);

    message.textContent = `Vandaag moet jij ${activities[activitiesIndex]} met ${objects[objectsIndex]}`;

}