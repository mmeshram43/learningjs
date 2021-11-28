// function changeHeader(message){
//     document.getElementById('header').textContent = message;

// }

let header = document.getElementById('header');

let btn = document.getElementById('login');
btn.addEventListener('click', function(){
    const bt = document.getElementById('welcome');

    if (bt.classList.contains('d-none')  )
    {
        bt.classList.remove('d-none') ;

    }
    else
    bt.classList.add('d-none');

})