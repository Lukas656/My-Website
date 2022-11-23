

let sol = document.querySelector('#sol');
let lua = document.querySelector('#lua');
let temas = document.querySelector('.cor');
let side = document.querySelector('.side');
let main = document.querySelector('.main');



sol.addEventListener('click', function() {
    sol.style.backgroundColor = 'rgb(132, 0, 184)';
    lua.style.backgroundColor = 'black';
    temas.style.backgroundColor = '#F1F1F1';
    side.style.color = 'black';
    main.style.color = 'black';
    side.style.backgroundColor = '#F1F1F1';
    main.style.backgroundColor = '#F1F1F1';
});
lua.addEventListener('click', function() {
    lua.style.backgroundColor = 'rgb(132, 0, 184)';
    sol.style.backgroundColor = 'black';
    temas.style.backgroundColor = '#292C35';
    side.style.color = "white";
    main.style.color = "white";
    side.style.backgroundColor = "#292C35";
    main.style.backgroundColor = "#292C35";
});