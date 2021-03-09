const doc = document;

function camelize (dasherizedStr) {
    return dasherizedStr
    .replace(/_([a-zA-Z])/g, function (m1, m2) {
    return m2.toUpperCase()
    });
}

class Coderator {

    // Map<String, dynamic>
    toMap(params){
        let res = '',
            split = params.value.replace(/ /g,'').split(',')

            for (let i = 0; i < split.length; i++) {
                let s = '"'+split[i]+'": '+camelize(split[i])+'.text, '
                res += s
            }

            doc.querySelector(params.target).innerText = 'Map<String, dynamic> map = {'+res.replace(/,\s*$/, "")+'};';
    }

    // TextEditingController
    toTec(params){
        let res = '',
            split = params.value.replace(/ /g,'').split(',')

        for (let i = 0; i < split.length; i++) {
            let s = camelize(split[i])+' = TextEditingController(), '
            res += s
        }

        doc.querySelector(params.target).innerText = 'TextEditingController '+res.replace(/,\s*$/, "")+';'
    }

    // FocusNode
    toFn(params){
        let res = '',
            split = params.value.replace(/ /g,'').split(',')

        for (let i = 0; i < split.length; i++) {
            let s = camelize(split[i])+'Node = FocusNode(), '
            // res += 'node'+s[0].toLocaleUpperCase()+(s.substring(1))
            res += s
        }

        doc.querySelector(params.target).innerText = 'FocusNode '+res.replace(/,\s*$/, "")+';'
    }

    // Map<String, FocusNode>
    toMFn(params){
        let res = '',
            split = params.value.replace(/ /g,'').split(',')

            for (let i = 0; i < split.length; i++) {
                let s = '"'+split[i]+'": FocusNode(), '
                res += s
            }

            doc.querySelector(params.target).innerText = 'Map<String, FocusNode> mapNode = {'+res.replace(/,\s*$/, "")+'};';
    }
}