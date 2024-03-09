document.addEventListener('DOMContentLoaded', function() {
    var darkmodeToggle = document.getElementById('dark-mode-toggle');
    var darkmodeLink = document.getElementById('darkmode');
    darkmodeLink.disabled = !darkmodeToggle.checked;
    darkmodeToggle.addEventListener('change', function() {
        darkmodeLink.disabled = !darkmodeToggle.checked;
    });
});
/*********************************************************
 le ho provate tutte con il css ma sono arrivato alla conclusione che non si può modificare head con il css e visto che ormai avevo fatto il layout del bottone per orgoglio personale ho aggiunto java con l'aiutino di chatgpt (prima e ultima volta che lo uso giuro) :))))) P.S. non so che ho scritto aspetto con ansia le lezioni su js
 *********************************************************/