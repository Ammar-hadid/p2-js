const message = document.getElementById('advice');

document.addEventListener('click', e => {
    if (e.target.id === 'btn') {
        generateAdvise();
    } 
})

const allAdviceArr = 
[
    "wandelen met een kop thee",
    "mediteren met je favoriete boek",
    "een dutje doen met je telefoon uitzetten",
    "stretchen met rustgevende muziek",
    "journalen met een kaars aan",
    "tekenen met een koptelefoon op",
    "yoga doen met een glas water naast je",
    "een podcast luisteren met een warme deken",
    "buiten zitten met een notitieboekje",
    "opruimen met je favoriete playlist",
    "koken met een nieuwe podcast",
    "lezen met een kopje kruidenthee",
    "dansen met de gordijnen dicht",
    "ademhalingsoefeningen doen met een timer van 5 minuten",
    "foto's bekijken met een glimlach",
    "een wandeling maken met je camera",
    "plannen maken met een verse munt thee",
    "vrienden bellen met een positieve mindset",
    "creative schrijven met een pen en papier",
    "een bad nemen met lavendel olie"
];

let remainingAdvice = [...allAdviceArr]

function generateAdvise() {

    if (remainingAdvice.length < 1) {
        remainingAdvice = [...allAdviceArr];
        alert('Je hebt alle adviesen al gehad, we beginnen nu opnieuw!');
    }

    const index = Math.floor(Math.random() * allAdviceArr.length);

    const advice = allAdviceArr[index];

    remainingAdvice.splice(index, 1);

    message.textContent = advice;
}