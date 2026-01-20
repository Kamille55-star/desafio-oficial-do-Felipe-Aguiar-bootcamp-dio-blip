let nome = ""
let xp = 8000
if (xp < 1000){
    console.log (nome , "Nível Ferro")
} else if (1001 < xp < 2000){
    console.log (nome , "Nível Bronze")
} else if (2001 < xp < 5000){
    console.log (nome , "Nível Prata")
} else if (5001 < xp < 7000){
    console.log (nome, xp , "Nível Ouro")
} else if (7001 < xp < 8000){
    console.log (nome, xp , "Nível Platina")
} else if (8001 < xp < 9000){
    console.log (nome , xp , "Nível Ascendente")
} else if (9001 < xp < 10000){
    console.log (nome , xp , "Nível Imortal")
} else if (xp >= 10001){
    console.log (nome, xp, "Nível Radiante")
}
