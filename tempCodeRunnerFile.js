const obj ={
    a :1,
    b :{
        c :2,
    },

}
Object.freeze(obj);
obj.a.c = 10;
console.log(obj.b.c);