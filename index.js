let nome = "Cat Noir"
let xp = 6000
let nivel = ""
if (xp < 1000){
    nivel = "Ferro"
    console.log ("O Herói de nome" , nome , "está no nível de", nivel)
} 
else if (1001 < xp && xp <= 2000){
    nivel = "Bronze"
    console.log ("O Herói de nome" , nome , "está no nível de" , nivel)
} 
else if (2001 < xp && xp <= 5000){
    nivel = "Prata"
    console.log ("O Herói de nome" , nome , "está no nível de" , nivel)
} 
else if (5001 < xp && xp <= 7000){
    nivel = "Ouro"
    console.log ("O Herói de nome" ,nome, "está no nível de" , nivel)
} 
else if (7001 < xp && xp <= 8000){
    nivel = "Platina"
    console.log ("O Herói de nome" , nome,  "está no nível de" , nivel)
} 
else if (8001 < xp && xp <= 9000){
    nivel = "Ascendente"
    console.log (nome , xp , "Nível Ascendente")
} 
else if (9001 < xp && xp <= 10000){
    nivel = "Imortal"
    console.log ("O Herói de nome" , nome , "está no nível de" , nivel)
} 
else if (xp >= 10001){
    nivel = "Radiante"
    console.log ("O Herói de nome" , nome, "está no nível de" , nivel)
}
