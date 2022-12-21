/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/






const { createApp } = Vue ; 

createApp({
    data (){
        return{
          emailName : ' ', 
        }
    },

    methods :{
        
    },
    
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then ( (name) => {
           this.emailName = name.data.response
           console.log(this.emailName)
        })
    },

    mounted(){

        
        
    },
}).mount('#app')
