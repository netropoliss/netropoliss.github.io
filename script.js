//RPS game

function randomtip(choice) {

    let details = ['loading.gif', 'loading.gif', 'loading.gif'];

    let random = Math.floor(Math.random() * details.length);


    if (choice == random) {
        document.getElementById('randomtip').innerHTML = '<div>אם נפלת תקום (Nordan)</div>';
    }

    if (choice == 0 && random == 1) {
        document.getElementById('randomtip').innerHTML = '<div>אם החיים נותנים לך לימונים פשוט תזרוק אותם כי אף אחד לא אוהב לימונים (Dviross)</div>';
    }

    if (choice == 0 && random == 2) {
        document.getElementById('randomtip').innerHTML = '<div>אם יש גשם תשיג מטריה זה יעזור לך לנשום (TheCool)</div>';
    }

    if (choice == 1 && random == 0) {
        document.getElementById('randomtip').innerHTML = '<div>#</div>';
    }

    if (choice == 1 && random == 2) {
        document.getElementById('randomtip').innerHTML = '<div>#</div>';
    }

    if (choice == 2 && random == 0) {
        document.getElementById('randomtip').innerHTML = '<div>#</div>';
    }

    if (choice == 2 && random == 1) {
        document.getElementById('randomtip').innerHTML = '<div>#</div>';
    }
}

window.onpageshow = function () {
    randomtip(0)
}


window.onload = function () {
    randomtip(0)
}

window.onload = function () {
    randomtip(1)
}

window.onload = function () {
    randomtip(2)
}  
