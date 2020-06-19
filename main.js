let imageElement = document.createElement('img')
imageElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5Pwhx2KJ5y7KoMKpdyvF05AEqLXHsLsxnjh1AYrpEo0ThgRkd&usqp=CAU'

let anchorElement = document.createElement('a')
imageElement.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5Pwhx2KJ5y7KoMKpdyvF05AEqLXHsLsxnjh1AYrpEo0ThgRkd&usqp=CAU'

let newMain = document.createElement('main')
newMain.className = 'main'
// newMain.append()

let newButton = document.createElement('button')
newButton.className = 'button'
newButton.append('Remove')


let bodyElement = document.querySelector('body')

bodyElement.append(newMain)
bodyElement.append(newButton)
newMain.append(imageElement)



let removePic = document.querySelector('button')

removePic.addEventListener('click', function(){
    newMain.remove()
})

