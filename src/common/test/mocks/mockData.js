const fakePattern = {
        lettersAndNumbers:
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        lettersAndNumbersLowerCase: "abcdefghijklmnopqrstuvwxyz0123456789",
        letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        number: "0123456789",
};

module.exports.fakeData = (length, type = "lettersAndNumbers") => {
        var result = "";
        var characters = fakePattern[type];
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
                result += characters.charAt(
                        Math.floor(Math.random() * charactersLength)
                );
        }
        return result;
};
