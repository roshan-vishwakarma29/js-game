// challenge 1 your age in day
function ageInDay() {
    var birthyear = prompt("what year were you born ...good frind")
    if (birthyear.length > 4) {
        var ageInDays = (2018 - birthyear) * 365;

        // var h1 = document.createElement('h1');
        // var textAnswer = document.createTextNode('you are' + " " + ageInDays + " " + 'days old');
        // h1.setAttribute('id', 'ageInDays');
        // h1.appendChild(textAnswer);
        // document.getElementById("flex-box-result").appendChild(h1);

        var h1 = document.getElementById('result');
        h1.innerHTML = '';

    }
    else {
        // alert('working')
        var ageInDays = (2018 - birthyear) * 365;

        // var h1 = document.createElement('h1');
        // var textAnswer = document.createTextNode('you are' + " " + ageInDays + " " + 'days old');
        // h1.setAttribute('id', 'ageInDays');
        // h1.appendChild(textAnswer);
        // document.getElementById("flex-box-result").appendChild(h1);

        var h1 = document.getElementById('result');
        h1.innerHTML = 'you are' + " " + ageInDays + " " + 'days old';
    }

}

function reset() {
    var h1 = document.getElementById('result');
    h1.innerHTML = '';
}


// challange 2................................/
function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://image.cnbcfm.com/api/v1/image/105828578-1554223245858gettyimages-149052633.jpeg?v=1554223281&w=1600&h=900";
    div.appendChild(image);
}
