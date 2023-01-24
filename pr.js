const sum = (a) => (b) => b ? sum(a + b) : a;
const res=sum(3)(7)(5)(12)()
console.log(res)