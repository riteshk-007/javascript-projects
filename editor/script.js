function run(){
    let htmlcode = document.getElementById('html').value;
    let csscode = document.getElementById('css').value;
    let jscode = document.getElementById('js').value;
    let output = document.getElementById('output');


    output.contentDocument.body.innerHTML = htmlcode + '<style>' + csscode + '</style>';
      output.contentWindow.eval(jscode);
}