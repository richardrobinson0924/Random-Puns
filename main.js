const setupTag = "setup", punchlineTag = "punchline", idTag = "id";

function getJoke() {
    $.getJSON('https://official-joke-api.appspot.com/random_joke')
        .done(data => {
            document.getElementById(setupTag).innerHTML = data['setup'];
            document.getElementById(punchlineTag).innerHTML = data['punchline'];
            document.getElementById(idTag).innerHTML = "Joke #" + data['id'];
        })
        .fail(() => {
            document.getElementById(setupTag).innerHTML = "Request failed :(";
            document.getElementById(punchlineTag).innerHTML = "Try again in 15 minutes";
            document.getElementById(idTag).innerHTML = "HTTP Response 426";
        })
}

function setRandomGradient() {
    const backgrounds = [
        "#355c7d, #6c5b7b, #c06c84",
        "#7f00ff, #e100ff",
        "#06beb6, #48b1bf",
        "#cb356b, #bd3f32",
        "#4568dc, #b06ab3",
        "#41295a, #2f0743"
    ];

    const rand = Math.floor(Math.random() * backgrounds.length);
    document.body.style.background = 'linear-gradient(to right, ' + backgrounds[rand] + ')';
}

function onLoad() {
    getJoke();
    setRandomGradient();
}