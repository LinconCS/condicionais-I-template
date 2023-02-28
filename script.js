/*
// Exercício 1 | Condição Simples
const velocidade = 100
console.log(`A sua velocidade é ${velocidade}km/h.`)

if (velocidade > 80) {
    console.log(`Você está acima da velocidade máxima permitida.`)
}

// Exercício 2 | Condição composta
const estaChovendo = false

if (estaChovendo === true) {
    console.log(`Ai minhas roupas tudo no varal!!`)
} else {
    console.log(`Hmmm, vitamina D, solzinho, bóra rolezar`)
}


// PRATICA GUIADA 1 - A
const booleano1 = false
const booleano2 = true

// if (booleano1) {
    // alert(`Booleano 1 é TRUE.`)
// } else {
    // alert(`Booleano 1 é FALSE`)
// }


// Prática Guiada 1 - B
const booleano3 = true

// if(booleano1 === booleano2) {
//     alert(`Booleano 1 e booleano 2 são IGUAIS`)
// } else if(booleano2 === booleano3) {
//         alert(`Booleano 2 e booleano 3 são IGUAIS`)
// } else if (booleano1 === booleano3) {
//     alert(`Booleano 1 e booleano 3 são IGUAIS`)
// } else {
//     alert(`Não existem valores iguais!`)
// }

// EXEMPLO: Bolinho de Chuva
const temOvo = true
const temFarinha = true
const temLeite = true
const temAcucar = true

if(!temOvo) {
    console.log(`OVO:`, temOvo)
    console.log(`Não tem ovo, deixa quieto`)
} else if (!temFarinha) {
    console.log(`FARINHA:`, temFarinha)
    console.log(`Tem ovo, mas não tem farinha. Deixa quieto`)
} else if (!temLeite) {
    console.log(`LEITE:`, temLeite)
    console.log(`Mesmo com farinha e ovos, não tem leite. Não dá para fazer o bolinho de chuva!.`)
} else if (!temAcucar) {
    console.log(`AÇÚCAR:`, temAcucar)
    console.log(`Temos leite, ovos e farinha, mas sem açúcar o bolinho vai ficar horroroso.`)
} else {
    console.log(`IHÁÁÁÁ, LETS QUE BÓRA FAZER BOLINHO DE CHUVA!`)
}



// Prática Guiada 2
const idade = prompt (`Qual a sua idade?`)


if (idade < 16) {
    console.log(`Você NÃO pode votar!`)
} else if (idade < 18 || idade >= 70) {
    console.log(`Você PODE votar! - facultativo`)
} else if (idade >= 18) {
    console.log(`Você DEVE votar!`)
} else {
    console.log(`Dado inválido`)
}
*/

// Prática Guiada 2 - Com função

// function verificaVoto() {
// const idade = prompt (`Qual a sua idade?`)


// if (idade < 16) {
//     console.log(`Você NÃO pode votar!`)
//  } else if (idade < 18 || idade >= 70) {
//     console.log(`Você PODE votar! - facultativo`)
//  } else if (idade >= 18) {
//     console.log(`Você DEVE votar!`)
//  } else {
//     console.log(`Dado inválido`)
//  }
// }

// verificaVoto()


// const verificaVotoComParametro = (idade) => {
      
    
//     if (idade < 16) {
//         console.log(`Você NÃO pode votar!`)
//      } else if (idade < 18 || idade >= 70) {
//         console.log(`Você PODE votar! - facultativo`)
//      } else if (idade >= 18) {
//         console.log(`Você DEVE votar!`)
//      } else {
//         console.log(`Dado inválido`)
//      }
// }
    
//     verificaVotoComParametro(31)


// Outro Exemplo de construção

// if (idade >= 18 && idade <= 70) {
//     console.log(`Seu voto é obrigatório!`)
// } else if (idade < 16) {
//     console.log(`Você não tem idade suficiente para votar`)
// } else if (idade >= 16 && idade <= 17){
//     console.log(`Você pode emitir o título de eleitor, mas é facultativo o voto`)
// } else if (idade > 70){
//     console.log(`Você pode votar, mas é facultativo`)
// }

// Outro Exemplo II

// function verificarUsuario() {
//     const idade = Number(prompt("Qual é a sua idade?"));
  
//     if (idade < 16) {
//       console.log(`Você não pode votar`);
//     } else if (idade < 18 || idade >= 70) {
//       console.log(`O seu voto é facultativo`);
//     } else if (idade >= 18 || idade <= 70) {
//       console.log(`Você deve votar`);
//     } else {
//       console.log(`Dado inválido`);
//     }
//   }
  
//   verificarUsuario();

// Para guardar na cabeça - Exercício de fixação
// const media = 9


// if (media >= 5) {
//     console.log(`Você foi aprovado!`)
// } else if (media >= 3) {
//     console.log(`Você precisará fazer a recuperação`)
// } else if (media >= 0 && media < 3){
//     console.log(`Estudante reprovado.`)
// } else {
//     console.log(`Dados inválidos!`)
// }

// EXEMPLO - Cumprimento
// entre 6h e 12h: bom dia
// entre 12h e 18h: boa tarde
// entre 18h e 24h: boa noite
// entre 0h e 6h: boa madrugada
const data = new Date
console.log(data)
const hora = data.getHours()
console.log(hora)

if (hora < 6) {
    console.log(`Boa madrugada!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 19) {
    console.log(`Boa tarde!`)
} else if (hora < 24) {
    console.log(`Boa noite!`)
} else {
    console.log(`Não conheço essa hora!`)
}
