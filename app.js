
document.getElementById("upper-case").addEventListener("click", function () {
    const textAreaElement = document.querySelector("textarea");
    textAreaElement.value = textAreaElement.value
    .toUpperCase();
    });
    
    document.getElementById("lower-case").addEventListener("click", function () {
    const textAreaElement = document.querySelector("textarea");
    textAreaElement.value = textAreaElement.value
    .toLowerCase();
    });
    
    document.getElementById("proper-case").addEventListener("click", function () {
    const textAreaElement = document.querySelector("textarea");
    textAreaElement.value = textAreaElement.value
    .toLowerCase()
    .replace(/^\s*\w|\s+\w/g, c => c.toUpperCase())
    });
    
    document.getElementById("sentence-case").addEventListener("click", function () {
    const textAreaElement = document.querySelector("textarea");
    textAreaElement.value = textAreaElement.value
    .toLowerCase()
    .replace(/^\s*\w|[.!?]\s*\w/g, c => c.toUpperCase())
    });
    
    
    
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

    
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }
    
    // Start file download.
    document.getElementById("save-text-file").addEventListener("click", function(){
        var text = document.getElementById("text-val").value;
        var filename = "text.txt";
    
        download(filename, text);
    }, false);
    
    