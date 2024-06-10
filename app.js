const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event)=>{
    event.preventDefault()
    console.log(event.code)
    if (event.code.toLowerCase() == 'space'){ //event.code физическое местоположение клавиши на клавиатуре
        
        setRandColor()
    }

})

document.addEventListener('click',(event)=>{

    const poloshenie = event.target.dataset.poloshenie// event.target - обращение к жлементу по каторому был клик // dataset - хранит все атрибуты data

    if (poloshenie == 'lock'){
        const node = event.target.tagName.toLowerCase() == 'i' ? event.target : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')

    }else if (poloshenie == 'copy'){
        copyToClick(event.target.textContent)
    }

})
// Тот самый код выше:
// function generatColor (){
//     const hexcode = '0123456789ABCDEF'
//     let color = ''
//     for (i = 0; i<6; i++){
//         color += hexcode[Math.floor(Math.random()*hexcode.length)] // Math.floor - округление в меньш сторону
//     }
//     return '#' + color
// }


function setRandColor(){
    cols.forEach((col) =>{
        const isLockt= col.querySelector('i').classList.contains("fa-lock") //не является ли она заблокированной
        if (isLockt){
            return 
        } 

        const text = col.querySelector('h2')// найти первый элемент <h2> внутри каждого элемента коллекции col
        const button = col.querySelector('button')
        
        
        const color = chroma.random()//Присваивает результат цвета//   =generatColor() если испольщовать код выше а не библиотеку
        


        text.textContent = color//изменение текста на #
        col.style.background = color//Изменение фона на #

        setTextColor(text, color)
        setTextColor(button, color)

        
    })
}

function copyToClick(text){
    return navigator.clipboard.writeText(text)
}

function setTextColor(text, color){
    const luminance = chroma(color).luminance()//показатель белого от 0 до 1
    text.style.color = luminance < 0.5 ? 'white' : "black"
}
setRandColor()



// // Находим кнопку
// const button = document.querySelector('button[data-poloshenie="lock"]');

// // Добавляем обработчик события клика на кнопку
// button.addEventListener('click', function() {
//     // Находим элемент <i> внутри кнопки
//     const icon = this.querySelector('i');
    
//     // Изменяем содержимое элемента <i>
//     icon.classList.toggle('fa-lock-open');
//     icon.classList.toggle('fa-lock');
// });












