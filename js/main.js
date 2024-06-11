{
    // 5 masala
    function bar(a, b, c){
        let musbat = 0
        let manfiy = 0
        if(a > 0){
            musbat++
        }else{
            manfiy++
        }
        if(b > 0){
            musbat++
        }else{
            manfiy++
        }
        if(c > 0){
            musbat++
        }else{
            manfiy++
        }
        return `musbat: ${musbat}, manfiy: ${manfiy}`

    }
    // console.log(bar(5, -7, 20));
}

{
    // 6 masala
    function son(a, b){
        if(a > b){
            return `kattasi: ${a}`
       }else{
        return `${b}`
           }
          
    }
    // console.log( son(2, 14));
}

{ 
    // 7 masala
    function  son(a, b){
        if(a < b){
            return`bunda 1 son kichkina: ${a}`
        }else{
            return `bunda 2 son kichkina: ${b}`
        }
    }
    // console.log(son(9, 14));
}

{
    // 8 masala
    function son(a, b){
        if(a > b){
            return ` a soni kattasi: ${a}`
        }else{
            return ` bunda b soni kattasi: ${b}`
        }
     
    }
    // console.log(son(18, 13));
}
{
    // 9 masala
    function son(a, b){
        let c = 0
        if(a < b){
            return ` a soni kchik: ${a}, b soni katta: ${b}`
        }else{
            c = a
            a = b
            b = c
            return ` a soni kichik: ${a}, b soni katta: ${b} `
        }
    }
    // console.log(son(13, 23));
}

{
    // 10 masala
    function son(a, b){
        if(a != b){
            let sum = a + b
            return `a soni: ${a}, va b soni ${b}, shular yigindisi: ${sum} ga teng`
        }else{
            return `javob ${0} ga teng`
        }
    }
    // console.log(son(13, 23));
}
{
    // 11 masala
    function son(a, b){
        let c = 0
        if(a == b){
            return `a soni: ${a}, b soni: ${b}, javob:${c}`
        }else if(a > b){
            return `a soni kata: ${a}`
        }else{
            return `b soni: katta ${b}`
        }
    }
    // console.log(son(23, 23));
}

{
    // 12 masala
  function son(a, b, c){
    if(a < b ){
    return `${a}`
    }else if(a < c){
    return `${a}`
    }
    
  }
//   console.log(son(22, 23, 34));
}
