document.getElementById('btn').addEventListener('click',() => {
    var search = true;

    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e=>{
        const transcript  = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        document.querySelector('.container').innerHTML = transcript;
    })

    if(search == true){
        recognition.start();
    }
})