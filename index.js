const nomeHeroi = "Marcus Sandes"
let xpHeroi = 1500

    if (xpHeroi <= 1000){
    console.log("O herói " + nomeHeroi + " está no nivel ferro")
    }
    else if (xpHeroi >1001 & xpHeroi <=2000)
        nivel = "bronze"
    else if (xpHeroi >2001 & xpHeroi <=5000)
        nivel = "Prata"
    else if (xpHeroi >5001 & xpHeroi <=7000)
        nivel = "Ouro"
    else if (xpHeroi >7001 & xpHeroi <=8000)
        nivel = "Platina"
    else if (xpHeroi >8001 & xpHeroi <=9000)
        nivel = "Ascendente"
    else if (xpHeroi >9001 & xpHeroi <=1000)
        nivel = "Imortal"
    else 
        nivel = "Radiante"
    console.log(`O herói ${nomeHeroi} está no nível  ${nivel}`)
   


    