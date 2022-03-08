// fibonacci
function fibonacci() {
    let num = +prompt('Write random number')
    let res = [0, 1]
    for ( let i = 2; i <= num; i++) {
        let num1 = res[i - 1]
        let num2 = res[i - 2]
        res.push(num1 + num2) 
    }
    return res[num]
}

console.log(fibonacci());

// Function
function emailBuilder() {
    let name = prompt('Yuor name')
    let sName = prompt('Your surname')
    let obj = [
        '@gmail.com',
        '@email.ru',
        '23@gmail.org',
        '@gmail.biz',
        '@gmail.info',
        '777@gmail.net',
        '45@email.ru'
    ]
    let rand = obj[Math.floor(Math.random() * obj.length)]
    let email = 'We recomend you this gmail : ' + name + sName + rand &&  sName + name + rand 
    console.log(email);

}

// emailBuilder();


// 2 
function randomID() {
    let result = '';
    let word_ID = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        for(let i = 0; i < 24; i++ ) {
            let rand = Math.floor ( Math.random() * word_ID.length );
            result = result + word_ID.substring(rand, rand + 1);
        }
    return result;
}

// console.log(randomID());



// 3
function Sort(a) {
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (a[j + 1] < a[j]) {
          let t = a[j + 1];
          a[j + 1] = a[j];
          a[j] = t;
        }
      }
    }
    return a; // На выходе сортированный по возрастанию массив A.
}

// console.log(Sort([123,34,545,2,46]));