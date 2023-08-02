const song = document.querySelector('h2')
let note = song.textContent
const lists = document.querySelectorAll('ol li')

// length of string

lists[0].innerText = `string length ${note.length}`

// toUpperCase
lists[1].innerText = `change to upperCase: ${note.toUpperCase()}`

// toLowerCase
lists[2].innerText = `change to lowerCase: ${note.toLowerCase()}`

// indexOf
lists[3].innerText = `dog index is: ${note.indexOf('dog')}`
lists[4].innerText = `dogs index is: ${note.indexOf('dogs')}`
lists[5].innerText = `Dog index is: ${note.indexOf('Dog')}`
lists[7].innerText = `Next index of 'e': ${note.indexOf('e', 3)}`
lists[8].innerText = `Next index of 'e': ${note.indexOf('e', 3)}`

// lastIndexOf
lists[6].innerText = `The last index of "e" is: ${note.lastIndexOf}`

//replace
lists[12].innerText = `replace 'e' to 'i' : ${note.replace('e','i')}`

//includes
lists[17].innerText = `does it have the : ${note.includes('the')}`

//startWidth   (  same as endWidth  )
lists[19].innerText = `does it start with 'T' : ${note.startsWith('T')}`