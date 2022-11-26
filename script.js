document.querySelectorAll('.contern > .box').forEach(function(item){
    item.addEventListener('click',function(){
        if(this.parentElement.classList.contains('.ex-box')){
            this.parentElement.classList.remove('ex-box')
        }else{
            document.querySelector('.ex-box')?.classList.remove('ex-box')
            this.parentElement.classList.add('ex-box')
        }
        
    })
})
document.querySelectorAll('.contern > .box').forEach(function(item){
    item.addEventListener('click',function(){
        if(document.querySelector('#won')){
            document.querySelector('.alert > h1').innerHTML = 'you won'
        }else{
            document.querySelector('.alert > h1').innerHTML = 'you lost'
        }
        
    })
})