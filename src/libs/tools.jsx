export default new class Tools {

    isset (obj) {
        return obj !== undefined;
    }

    randInt (a, b) {
        return (b > a ? Math.floor(Math.random() * (b-a)) + a : a);
    }

    preg_match_all (regex, content) {
        var match, output=[], pattern = new RegExp(regex,'g');
        while((match=pattern.exec(content),match!==null)) { output.push(match); }
        return output;
    }

    forEach (obj, callback) {
        Object.keys(obj).forEach((key) => {
            callback(key, obj[key]);
        });
    }

}
