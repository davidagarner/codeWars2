// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

function correct(string){

    let str = string.split('')
    return str.map(a => (a === '5')
      ? 'S': (a === '0')
      ? 'O': (a === '1')
      ? 'I': a).join('')
      
     }