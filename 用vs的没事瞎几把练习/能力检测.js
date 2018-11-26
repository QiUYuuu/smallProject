// JavaScript source code
function isHostMethod(object, property) {
    let t = typeof object[property];
    return t == "function" || (!!(t == "object" && object[property])) || t == "unnknown";
}