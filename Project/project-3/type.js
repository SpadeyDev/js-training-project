    
    const h1 = document.querySelector('h1')
    const h2 = document.querySelector('h2')

    
    document.body.addEventListener('keydown', e => {
    h1.innerHTML=`Şu tuşa bastın: <span class="key">${e.key}<span>`
    h2.textContent= `${e.keyCode}`
})

   keyConveyer.addEventListener('transitionend', (e)=>{
  })
