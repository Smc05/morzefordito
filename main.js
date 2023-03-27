const toMorzeBtn = document.querySelector('.to_morze'),
toLetterBtn = document.querySelector('.to_letter'),
inputText = document.querySelector('.input textarea'),
outputText = document.querySelector('.output textarea'),
search = document.querySelector('.kereses input'),
morze_table = document.querySelector('.morze_table'),
kivalasztott = document.querySelector('.kivalasztott');

const letters = ["a" ,"á", "b", "c", "d", "e", "é", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "q", "r", "s", "t", "u", "ü", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6","7", "8", "9", "0", " "];
const morze_letters = [" .- |"," .-.- |", " -... |", " -.-. |", " -.. |", " . |", " ---- |", " ..-. |", " --. |"," .... |"," .. |", " .--- |", " -.- |", " .-.. |", " -- |", " -. |", " --- |", " ---. |"," .--. |"," --.- |", " .-. |", " ... |", " - |", " ..- |", " ..-- |", " ...- |", " .-- |"," -..- |", " -.-- |", " --.. |", " .---- |", " ..--- |", " ...-- |", " ....- |", " ..... |", " -.... |", " --... |", " ---.. |", " ----. |", " ----- |", " |"];
const morze_letters2 = [" •- |"," •-•- |", " -••• |", " -•-• |", " -•• |", " • |", " ---- |", " ••-• |", " --• |"," •••• |"," •• |", " •--- |", " -•- |", " •-•• |", " -- |", " -• |", " --- |", " ---• |"," •--• |"," --•- |", " •-• |", " ••• |", " - |", " ••- |", " ••-- |", " •••- |", " •-- |"," -••- |", " -•-- |", " --•• |", " •---- |", " ••--- |", " •••-- |", " ••••- |", " ••••• |", " -•••• |", " --••• |", " ---•• |", " ----• |", " ----- |", " |"];


toMorzeBtn.addEventListener('click', e => {
    // if(!toMorzeBtn.classList.contains('select')){
    //         let asztal = "";
    //         asztal = inputText.value;
    //         inputText.value = outputText.value;
    //         outputText.value = asztal;
    //         asztal = "";
    //     }
    toMorzeBtn.classList.add('select');
    toLetterBtn.classList.remove('select');
    document.querySelector('.input h5').innerHTML = 'Írj ide valamit amit át szeretnél váltani morzéba';
    inputText.setAttribute('placeholder','Például: szeretek morzézni')

})
toLetterBtn.addEventListener('click', e => {
    // if(!toLetterBtn.classList.contains('select')){
    //     let asztal = "";
    //     asztal = inputText.value;
    //     inputText.value = outputText.value;
    //     outputText.value = asztal;
    //     asztal = "";
    //     }
    toLetterBtn.classList.add('select');
    toMorzeBtn.classList.remove('select');
    document.querySelector('.input h5').innerHTML = 'Írj ide valamit morzéul amit át szeretnél váltani';
    inputText.setAttribute('placeholder','Például: ••• | --•• | •• | •- |')

})

inputText.addEventListener('input', e => {
    let textletters = [];
    outputText.innerHTML = "";
    if (toMorzeBtn.classList.contains('select')) {

        textletters += inputText.value.toLowerCase().split('');

        for (let i = 0; i < textletters.length; i++){
            for (let j = 0; j < letters.length; j++)
            {
                if (letters[j] == textletters[i]){
                outputText.innerHTML += morze_letters2[j];
                }
            }
        }
    }

    if (toLetterBtn.classList.contains('select')) {
        textletters += inputText.value;
        outputText.innerHTML = "";

        for (let i = 0; i < textletters.split("|").length; i++){
            for (let j = 0; j < morze_letters.length; j++)
            {
                    if (morze_letters[j].slice(0, -1).trim() == textletters.split("|")[i].trim()){
                    outputText.innerHTML += letters[j];
                    }
                    else if (morze_letters2[j].slice(0, -1).trim() == textletters.split("|")[i].trim()){
                        outputText.innerHTML += letters[j];
                    }

            }
        }
    }
});
function morzeABC () {
    for (let i = 0; i < letters.length - 1; i++)
    {
    morze_table.innerHTML += `<h4>${letters[i]}  =  ${morze_letters2[i].slice(0, -1)}</h4>`
    }
}
morzeABC();
search.addEventListener('input', e => {
    kivalasztott.innerHTML = "";
    morze_table.innerHTML = "";
    if (search.value == "") morzeABC();
    for (let i = 0; i < letters.length - 1; i++)
    {
        if (letters[i] == search.value){
        morze_table.innerHTML = `<h4>${letters[i]}  =  ${morze_letters2[i].slice(0, -1)}</h4>`
        }
        if (morze_letters[i].slice(0, -1).trim() == search.value){
            kivalasztott.innerHTML = `<h2>${letters[i]}  =  ${morze_letters2[i].slice(0, -1)}</h2>`

        }
        else if (morze_letters[i].includes(search.value) && search.value !== "") {
            morze_table.innerHTML += `<h4>${letters[i]}  =  ${morze_letters2[i].slice(0, -1)}</h4>`
        }
    }
    if (morze_table.innerHTML == "" && kivalasztott.innerHTML == "") morze_table.innerHTML = "<h6>Nem található ilyen karakter</h6>";
})
const menuBtn = document.querySelector('.morze_table_button');
const aside = document.querySelector('aside');
const x = document.querySelector('.bi-x-lg');
const menu = document.querySelector('.bi-list');
menuBtn.addEventListener('click', e => {
    if (!aside.classList.contains('active')){
        aside.classList.add('active');
        aside.classList.remove('deactive');
        aside.style.display='block';

        x.classList.add('x-show');
        x.classList.remove('x-elfed')

        menu.classList.remove('menu-show');
        menu.classList.add('menu-elfed')
    }
    else if (aside.classList.contains('active')){
        x.classList.remove('x-show');
        x.classList.add('x-elfed');
        
        menu.classList.add('menu-show');
        menu.classList.remove('menu-elfed')

        aside.classList.remove('active');
        aside.classList.add('deactive');
        setTimeout(() => {if (!aside.classList.contains('active')) aside.classList.remove('deactive'),aside.style.display='none'},500)
    }

});

document.querySelector('.kereses i').addEventListener('click', e => {
    search.focus();
})
const copy = document.querySelector('.output i')
copy.addEventListener('click', e => {
    copy.classList.add('copyactive');
    navigator.clipboard.writeText(outputText.value).then(() => {
        document.querySelector('.output span').style.display = 'block';
    });
    setTimeout(() => {copy.classList.remove('copyactive');
    document.querySelector('.output span').style.display = 'none';
    },3000)
    
})