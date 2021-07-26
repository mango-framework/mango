// ! MANGO SEED DOM

var appName = document.querySelector('title').textContent;

console.log(`'Mango Seed' was called to '${appName}'`)

// DOM element in Mango = $element
function $query(element, mng, msg) {
    // Define seed
    var seed = '';
    // Verification
    if(mng === 'html') {
        seed = 'innerHTML'; // innerHTML => html
    }
    // Error catch
    if((element === '') || (mng === '') || (msg === '')) {
        console.log('%c ! Mango Error : Uncompleted function ', 'color: red font-weight: bold;');
    }
    // Create _manager
    _manager = (`document.querySelector("${element}").${seed} = "${msg}"`)
    // Create mangoFriend
    mangoFriend = document.createElement('script')
    // Convert _manager to html format
    mangoFriend.innerHTML = _manager
    // Run mangoFriend
    document.querySelector('#mango-script').append(mangoFriend);
}