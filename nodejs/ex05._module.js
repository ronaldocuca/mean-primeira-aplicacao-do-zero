console.log(global === this);
console.log(module === this);
console.log(module.exports === this);

module.exports.digaOi = function () {
    console.log('Oi!!!');
}