function getZF(num) {
    let zf;
    if (num <= 26) {
        zf = String.fromCharCode(96 + num);
    } else {
        zf = "a" + String.fromCharCode(96 + num - 26);
    }
    return zf;
}

//当数字大于26时
function main() {
for(let i=1;i<=50;i++){
    console.log(getZF(i))
}
}
main();