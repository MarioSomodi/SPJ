for(var i = 1; i <= 100; i++){
    if(i % 5 == 0 && i % 7 == 0){
        console.log(`Broj je djeljiv i sa 5 i sa 7`)
    }else if(i % 5 == 0){
        console.log(`Broj ${i} je djeljiv sa 5`);
    }else if(i % 7 == 0){
        console.log(`Broj ${i} je djeljiv sa 7`);
    }
}