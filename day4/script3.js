// Async JS
// geting info from internet
// https://restcountries.com/v3.1/alpha/ca
let subBtn = document.querySelector(".btn");
let inp = document.querySelector(".inp"); 
let grid = document.querySelector(".grid");

var imgHtml = (link) => `<img src="${link}" alt="">`; 
function fetchapi(inpVal)
{
    let code = inpVal;
    let urlvar = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(urlvar)  // promise
    .then(      // first thenvhandlers
        function(full)
        {
            console.log(full); 
            return full.json(); // promise 
        }
    )
    .then(   // second then handler 
        function(fullfil)
        {
            let flaglink = fullfil[0].flags.png;
            grid.insertAdjacentHTML("beforeend", imgHtml(flaglink) );
        }
    );
}




subBtn.addEventListener( 
    "click",
    function(ev)
    {
        inpValue = inp.value;
        fetchapi(inpValue);
    }
);


