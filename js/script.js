let textarea = document.getElementById('textarea'),
    result = document.getElementById('result'),
    copy = document.getElementById('copy')

function camelize (dasherizedStr) {
    return dasherizedStr
    .replace(/_([a-zA-Z])/g, function (m1, m2) {
    return m2.toUpperCase()
    });
}

let toMap = true

textarea.addEventListener('keyup', function(){
    let r = ''

    let split = this.value.replace(/ /g,'').split(',')

    if(toMap){
        // to Map<String, dynamic>
        for (let i = 0; i < split.length; i++) {
            let s = '"'+split[i]+'": '+camelize(split[i])+'.text, '
            r += s
        }

        // result.innerHTML = '<pre class="prettyprint lang-dart linenums:4"> Map<String, dynamic> formData = {'+r.replace(/,\s*$/, "")+'} </pre>';
        result.innerText = 'Map<String, dynamic> formData = {'+r.replace(/,\s*$/, "")+'}';
    }else{

        // to TextEditingController()
        for (let i = 0; i < split.length; i++) {
            let s = camelize(split[i])+' = TextEditingController(), '
            r += s
        }

        result.innerText = 'TextEditingController '+r.replace(/,\s*$/, "")+';'
    }

    PR.prettyPrint()
}, false)

function copyToClipboard(id){
    var range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

// copy text
copy.addEventListener('click', function() {
    copyToClipboard('result')
});