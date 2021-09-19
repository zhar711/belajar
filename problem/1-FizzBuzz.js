/*
bikin program yang melakukan looping dari 1 sampai 100 derngan ketentuan
1.jika bilangan tersebut habis di bagi 3 maka outputnya FIZZ
2.jika bilangan tersebut habis di bagi 5 maka outputnya BUZZ
3.jika bilangan tersebut habis di bagi 3 dan 5 makanya outputnya FIZZBUZZ
4.jika tidak memenuhi semua kondisi di atas maka outputnya angka
*/

for (let i = 1; i <= 100; i++){
    if(i % 3  === 0 && i % 5 === 0){
      console.log('FIZZBUZZ')
    }else if(i % 3 === 0){
          console.log('FIZZ')
    }else if(i % 5 === 0){
        console.log('BUZZ')      
    }else{
        console.log(i)
    }
}
