let range = document.querySelector('.myRange')
let viewsField = document.querySelector('.views-field')
let dollarsField = document.querySelector('.dollar-field')
let discountBtn = document.querySelector('.switch input')

let views = ['10K','50K','100K','500k','1M']
let dollars = [8,12,16,24,36]


range.addEventListener('input',e=>{
    if(range.value >= 1 && range.value < 19){
        viewsField.innerHTML = views[0]
        dollarsField.innerHTML = `$${dollars[0]}.00`
    }else if(range.value >= 19 && range.value < 38){
        viewsField.innerHTML = views[1]
        dollarsField.innerHTML = `$${dollars[1]}.00`
    }else if(range.value >= 38 && range.value < 57){
        viewsField.innerHTML = views[2]
        dollarsField.innerHTML = `$${dollars[2]}.00`
    }else if(range.value >= 57 && range.value < 76){
        viewsField.innerHTML = views[3]
        dollarsField.innerHTML = `$${dollars[3]}.00`
    }else{
        viewsField.innerHTML = views[4]
        dollarsField.innerHTML = `$${dollars[4]}.00`
    }
})


discountBtn.addEventListener('input',e=>{
    if(discountBtn.checked == true){
        dollars.forEach((dollar , index)=>{
            return dollars[index] = dollar*0.25
        })
        let b = dollarsField.innerText.split('')
        b.shift()
        dollarsField.innerHTML = `$${b.join('') * 0.25}.00`
    }else{
        dollars.forEach((dollar , index)=>{
            return dollars[index] = dollar*4
        })
        let b = dollarsField.innerText.split('')
        b.shift()
        dollarsField.innerHTML = `$${b.join('') *4}.00`
    }
})

if(window.innerWidth < 660){
    document.querySelector('.discount').innerText = '-25%'
}

window.addEventListener('load',()=>{
    range.value = 1
    discountBtn.checked = false
})