let text1 = "I will learn Python";
console.log("Text 1 length: " + text1.length);

let text2 = " This is dummy  paragraph         ";
let text3 = text2.trim();
console.log("Text 2 length: " + text2.length);
console.log("Text 2 after trim: " + text3.length)

let text4 = text1.split(" ");
console.log(text4[3]);

console.log(text1.slice(7));
console.log(text2.replace('is', 'MYWORD'));
console.log(text2.replaceAll('is', 'MYWORD'));

