const methods = {
    camelize(dasherizedStr) {
        return dasherizedStr
            .replace(/_([a-zA-Z])/g, function (m1, m2) {
                return m2.toUpperCase()
            });
    },

    ok(){
        alert()
    }
}

export default {
    methods
}