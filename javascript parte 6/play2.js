function mapSemThis(art){
   return art.map(function(item){
        return item * 2;
    })
}

const nums = [4, 6, 8, 10, 14];

console.log(mapSemThis(nums));
console.log(nums);