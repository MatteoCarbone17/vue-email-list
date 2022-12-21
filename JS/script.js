/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/



axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then (function (response){
    const result = response.data
    console.log(response.data)
})



const { createApp } = Vue ; 

createApp({
    data (){
        return{
            title : 'Hello Vue!',
            message : '',
            imgSrc : 'https://picsum.photos/200/300?grayscale'
        }
    },
    methods :{
        greetings : function(){
            alert ('Lode a te Vue!')
        }

    }
}).mount('#app')
