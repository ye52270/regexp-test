let str = `
010-4576-9563
thesecond@gmail.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
d
hkkp
동해물과 백두산이 마르고 닳도록
`;
console.log(str.match(/.{1,}@.{1,}\..{1,}/g));
console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));

const str2 = `hello@world.com ddd 
aaa
`;
console.log(str2.match(/(?<=@).{1,}\b/g));
console.log(str2.match(/\s/g));
