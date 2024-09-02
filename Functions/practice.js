function func(msz) {
    let str = msz.toLowerCase();
    console.log(`The vowels in ${str} is : `);
    let x = str.length;
    for (let i = 0; i < x; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            console.log(str[i]);
        }
    }
}
func("Hello");
func("Abhishek")

let funcn = (msz)=> {
    let str = msz.toLowerCase();
    console.log(`The vowels in ${str} is : `);
    let x = str.length;
    for (let i = 0; i < x; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            console.log(str[i]);
        }
    }
}

console.log(funcn("Name"));


arr = [1,2,3,4,5];

arr.forEach(element => {
   let el = element*element; 
   console.log(el);
});


