let dados = [
    {
        "ID": 1,
        "Nome": "Bulbasaur",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "Tipo": "Grama e Veneno",
        "HP": 45,
        "Ataque": 49,
        "Defesa": 49,
        "Velocidade": 45,
        "Altura": 0.7,
        "Peso": 6.9,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        ]
    },
    {
        "ID": 2,
        "Nome": "Ivysaur",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "Tipo": "Grama e Veneno",
        "HP": 60,
        "Ataque": 62,
        "Defesa": 63,
        "Velocidade": 60,
        "Altura": 1.0,
        "Peso": 13.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        ]
    },
    {
        "ID": 3,
        "Nome": "Venusaur",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "Tipo": "Grama e Veneno",
        "HP": 80,
        "Ataque": 82,
        "Defesa": 83,
        "Velocidade": 80,
        "Altura": 2.0,
        "Peso": 100.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        ]
    },
    {
        "ID": 4,
        "Nome": "Charmander",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "Tipo": "Fogo",
        "HP": 39,
        "Ataque": 52,
        "Defesa": 43,
        "Velocidade": 65,
        "Altura": 0.6,
        "Peso": 8.5,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        ]
    },
    {
        "ID": 5,
        "Nome": "Charmeleon",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "Tipo": "Fogo",
        "HP": 58,
        "Ataque": 64,
        "Defesa": 58,
        "Velocidade": 80,
        "Altura": 1.1,
        "Peso": 19.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        ]
    },
    {
        "ID": 6,
        "Nome": "Charizard",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "Tipo": "Fogo e Voador",
        "HP": 78,
        "Ataque": 84,
        "Defesa": 78,
        "Velocidade": 100,
        "Altura": 1.7,
        "Peso": 90.5,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        ]
    },
    {
        "ID": 7,
        "Nome": "Squirtle",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "Tipo": "\u00c1gua",
        "HP": 44,
        "Ataque": 48,
        "Defesa": 65,
        "Velocidade": 43,
        "Altura": 0.5,
        "Peso": 9.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
        ]
    },
    {
        "ID": 8,
        "Nome": "Wartortle",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "Tipo": "\u00c1gua",
        "HP": 59,
        "Ataque": 63,
        "Defesa": 80,
        "Velocidade": 58,
        "Altura": 1.0,
        "Peso": 22.5,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
        ]
    },
    {
        "ID": 9,
        "Nome": "Blastoise",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "Tipo": "\u00c1gua",
        "HP": 79,
        "Ataque": 83,
        "Defesa": 100,
        "Velocidade": 78,
        "Altura": 1.6,
        "Peso": 85.5,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
        ]
    },
    {
        "ID": 10,
        "Nome": "Caterpie",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "Tipo": "Inseto",
        "HP": 45,
        "Ataque": 30,
        "Defesa": 35,
        "Velocidade": 45,
        "Altura": 0.3,
        "Peso": 2.9,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        ]
    },
    {
        "ID": 11,
        "Nome": "Metapod",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "Tipo": "Inseto",
        "HP": 50,
        "Ataque": 20,
        "Defesa": 55,
        "Velocidade": 30,
        "Altura": 0.7,
        "Peso": 9.9,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        ]
    },
    {
        "ID": 12,
        "Nome": "Butterfree",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "Tipo": "Inseto e Voador",
        "HP": 60,
        "Ataque": 45,
        "Defesa": 50,
        "Velocidade": 70,
        "Altura": 1.1,
        "Peso": 32.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        ]
    },
    {
        "ID": 13,
        "Nome": "Weedle",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        "Tipo": "Inseto e Veneno",
        "HP": 40,
        "Ataque": 35,
        "Defesa": 30,
        "Velocidade": 50,
        "Altura": 0.3,
        "Peso": 3.2,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
        ]
    },
    {
        "ID": 14,
        "Nome": "Kakuna",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "Tipo": "Inseto e Veneno",
        "HP": 45,
        "Ataque": 25,
        "Defesa": 50,
        "Velocidade": 35,
        "Altura": 0.6,
        "Peso": 10.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
        ]
    },
    {
        "ID": 15,
        "Nome": "Beedrill",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "Tipo": "Inseto e Veneno",
        "HP": 65,
        "Ataque": 90,
        "Defesa": 40,
        "Velocidade": 75,
        "Altura": 1.0,
        "Peso": 29.5,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
        ]
    },
    {
        "ID": 16,
        "Nome": "Pidgey",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        "Tipo": "Normal e Voador",
        "HP": 40,
        "Ataque": 45,
        "Defesa": 40,
        "Velocidade": 56,
        "Altura": 0.3,
        "Peso": 1.8,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
        ]
    },
    {
        "ID": 17,
        "Nome": "Pidgeotto",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "Tipo": "Normal e Voador",
        "HP": 63,
        "Ataque": 60,
        "Defesa": 55,
        "Velocidade": 71,
        "Altura": 1.1,
        "Peso": 30.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
        ]
    },
    {
        "ID": 18,
        "Nome": "Pidgeot",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "Tipo": "Normal e Voador",
        "HP": 83,
        "Ataque": 80,
        "Defesa": 75,
        "Velocidade": 101,
        "Altura": 1.5,
        "Peso": 39.5,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
        ]
    },
    {
        "ID": 19,
        "Nome": "Rattata",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        "Tipo": "Normal",
        "HP": 30,
        "Ataque": 56,
        "Defesa": 35,
        "Velocidade": 72,
        "Altura": 0.3,
        "Peso": 3.5,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
        ]
    },
    {
        "ID": 20,
        "Nome": "Raticate",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "Tipo": "Normal",
        "HP": 55,
        "Ataque": 81,
        "Defesa": 60,
        "Velocidade": 97,
        "Altura": 0.7,
        "Peso": 18.5,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
        ]
    },
    {
        "ID": 21,
        "Nome": "Spearow",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        "Tipo": "Normal e Voador",
        "HP": 40,
        "Ataque": 60,
        "Defesa": 30,
        "Velocidade": 70,
        "Altura": 0.3,
        "Peso": 2.0,
        "Habitat": "Terreno Acidentado",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
        ]
    },
    {
        "ID": 22,
        "Nome": "Fearow",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        "Tipo": "Normal e Voador",
        "HP": 65,
        "Ataque": 90,
        "Defesa": 65,
        "Velocidade": 100,
        "Altura": 1.2,
        "Peso": 38.0,
        "Habitat": "Terreno Acidentado",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
        ]
    },
    {
        "ID": 23,
        "Nome": "Ekans",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        "Tipo": "Veneno",
        "HP": 35,
        "Ataque": 60,
        "Defesa": 44,
        "Velocidade": 55,
        "Altura": 2.0,
        "Peso": 6.9,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
        ]
    },
    {
        "ID": 24,
        "Nome": "Arbok",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        "Tipo": "Veneno",
        "HP": 60,
        "Ataque": 95,
        "Defesa": 69,
        "Velocidade": 80,
        "Altura": 3.5,
        "Peso": 65.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
        ]
    },
    {
        "ID": 25,
        "Nome": "Pikachu",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "Tipo": "El\u00e9trico",
        "HP": 35,
        "Ataque": 55,
        "Defesa": 40,
        "Velocidade": 90,
        "Altura": 0.4,
        "Peso": 6.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
        ]
    },
    {
        "ID": 26,
        "Nome": "Raichu",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        "Tipo": "El\u00e9trico",
        "HP": 60,
        "Ataque": 90,
        "Defesa": 55,
        "Velocidade": 110,
        "Altura": 0.8,
        "Peso": 30.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
        ]
    },
    {
        "ID": 27,
        "Nome": "Sandshrew",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        "Tipo": "Terra",
        "HP": 50,
        "Ataque": 75,
        "Defesa": 85,
        "Velocidade": 40,
        "Altura": 0.6,
        "Peso": 12.0,
        "Habitat": "Terreno Acidentado",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
        ]
    },
    {
        "ID": 28,
        "Nome": "Sandslash",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        "Tipo": "Terra",
        "HP": 75,
        "Ataque": 100,
        "Defesa": 110,
        "Velocidade": 65,
        "Altura": 1.0,
        "Peso": 29.5,
        "Habitat": "Terreno Acidentado",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
        ]
    },
    {
        "ID": 29,
        "Nome": "Nidoran-f",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        "Tipo": "Veneno",
        "HP": 55,
        "Ataque": 47,
        "Defesa": 52,
        "Velocidade": 41,
        "Altura": 0.4,
        "Peso": 7.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
        ]
    },
    {
        "ID": 30,
        "Nome": "Nidorina",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        "Tipo": "Veneno",
        "HP": 70,
        "Ataque": 62,
        "Defesa": 67,
        "Velocidade": 56,
        "Altura": 0.8,
        "Peso": 20.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
        ]
    },
    {
        "ID": 31,
        "Nome": "Nidoqueen",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        "Tipo": "Veneno e Terra",
        "HP": 90,
        "Ataque": 92,
        "Defesa": 87,
        "Velocidade": 76,
        "Altura": 1.3,
        "Peso": 60.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
        ]
    },
    {
        "ID": 32,
        "Nome": "Nidoran-m",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        "Tipo": "Veneno",
        "HP": 46,
        "Ataque": 57,
        "Defesa": 40,
        "Velocidade": 50,
        "Altura": 0.5,
        "Peso": 9.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
        ]
    },
    {
        "ID": 33,
        "Nome": "Nidorino",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        "Tipo": "Veneno",
        "HP": 61,
        "Ataque": 72,
        "Defesa": 57,
        "Velocidade": 65,
        "Altura": 0.9,
        "Peso": 19.5,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
        ]
    },
    {
        "ID": 34,
        "Nome": "Nidoking",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        "Tipo": "Veneno e Terra",
        "HP": 81,
        "Ataque": 102,
        "Defesa": 77,
        "Velocidade": 85,
        "Altura": 1.4,
        "Peso": 62.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
        ]
    },
    {
        "ID": 35,
        "Nome": "Clefairy",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        "Tipo": "Fada",
        "HP": 70,
        "Ataque": 45,
        "Defesa": 48,
        "Velocidade": 35,
        "Altura": 0.6,
        "Peso": 7.5,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
        ]
    },
    {
        "ID": 36,
        "Nome": "Clefable",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        "Tipo": "Fada",
        "HP": 95,
        "Ataque": 70,
        "Defesa": 73,
        "Velocidade": 60,
        "Altura": 1.3,
        "Peso": 40.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
        ]
    },
    {
        "ID": 37,
        "Nome": "Vulpix",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        "Tipo": "Fogo",
        "HP": 38,
        "Ataque": 41,
        "Defesa": 40,
        "Velocidade": 65,
        "Altura": 0.6,
        "Peso": 9.9,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
        ]
    },
    {
        "ID": 38,
        "Nome": "Ninetales",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        "Tipo": "Fogo",
        "HP": 73,
        "Ataque": 76,
        "Defesa": 75,
        "Velocidade": 100,
        "Altura": 1.1,
        "Peso": 19.9,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
        ]
    },
    {
        "ID": 39,
        "Nome": "Jigglypuff",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "Tipo": "Normal e Fada",
        "HP": 115,
        "Ataque": 45,
        "Defesa": 20,
        "Velocidade": 20,
        "Altura": 0.5,
        "Peso": 5.5,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
        ]
    },
    {
        "ID": 40,
        "Nome": "Wigglytuff",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        "Tipo": "Normal e Fada",
        "HP": 140,
        "Ataque": 70,
        "Defesa": 45,
        "Velocidade": 45,
        "Altura": 1.0,
        "Peso": 12.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
        ]
    },
    {
        "ID": 41,
        "Nome": "Zubat",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        "Tipo": "Veneno e Voador",
        "HP": 40,
        "Ataque": 45,
        "Defesa": 35,
        "Velocidade": 55,
        "Altura": 0.8,
        "Peso": 7.5,
        "Habitat": "Caverna",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png"
        ]
    },
    {
        "ID": 42,
        "Nome": "Golbat",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        "Tipo": "Veneno e Voador",
        "HP": 75,
        "Ataque": 80,
        "Defesa": 70,
        "Velocidade": 90,
        "Altura": 1.6,
        "Peso": 55.0,
        "Habitat": "Caverna",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png"
        ]
    },
    {
        "ID": 43,
        "Nome": "Oddish",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        "Tipo": "Grama e Veneno",
        "HP": 45,
        "Ataque": 50,
        "Defesa": 55,
        "Velocidade": 30,
        "Altura": 0.5,
        "Peso": 5.4,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
        ]
    },
    {
        "ID": 44,
        "Nome": "Gloom",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        "Tipo": "Grama e Veneno",
        "HP": 60,
        "Ataque": 65,
        "Defesa": 70,
        "Velocidade": 40,
        "Altura": 0.8,
        "Peso": 8.6,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
        ]
    },
    {
        "ID": 45,
        "Nome": "Vileplume",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        "Tipo": "Grama e Veneno",
        "HP": 75,
        "Ataque": 80,
        "Defesa": 85,
        "Velocidade": 50,
        "Altura": 1.2,
        "Peso": 18.6,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
        ]
    },
    {
        "ID": 46,
        "Nome": "Paras",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        "Tipo": "Inseto e Grama",
        "HP": 35,
        "Ataque": 70,
        "Defesa": 55,
        "Velocidade": 25,
        "Altura": 0.3,
        "Peso": 5.4,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
        ]
    },
    {
        "ID": 47,
        "Nome": "Parasect",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        "Tipo": "Inseto e Grama",
        "HP": 60,
        "Ataque": 95,
        "Defesa": 80,
        "Velocidade": 30,
        "Altura": 1.0,
        "Peso": 29.5,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
        ]
    },
    {
        "ID": 48,
        "Nome": "Venonat",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        "Tipo": "Inseto e Veneno",
        "HP": 60,
        "Ataque": 55,
        "Defesa": 50,
        "Velocidade": 45,
        "Altura": 1.0,
        "Peso": 30.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
        ]
    },
    {
        "ID": 49,
        "Nome": "Venomoth",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        "Tipo": "Inseto e Veneno",
        "HP": 70,
        "Ataque": 65,
        "Defesa": 60,
        "Velocidade": 90,
        "Altura": 1.5,
        "Peso": 12.5,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
        ]
    },
    {
        "ID": 50,
        "Nome": "Diglett",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        "Tipo": "Terra",
        "HP": 10,
        "Ataque": 55,
        "Defesa": 25,
        "Velocidade": 95,
        "Altura": 0.2,
        "Peso": 0.8,
        "Habitat": "Caverna",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
        ]
    },
    {
        "ID": 51,
        "Nome": "Dugtrio",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        "Tipo": "Terra",
        "HP": 35,
        "Ataque": 100,
        "Defesa": 50,
        "Velocidade": 120,
        "Altura": 0.7,
        "Peso": 33.3,
        "Habitat": "Caverna",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
        ]
    },
    {
        "ID": 52,
        "Nome": "Meowth",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        "Tipo": "Normal",
        "HP": 40,
        "Ataque": 45,
        "Defesa": 35,
        "Velocidade": 90,
        "Altura": 0.4,
        "Peso": 4.2,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
        ]
    },
    {
        "ID": 53,
        "Nome": "Persian",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        "Tipo": "Normal",
        "HP": 65,
        "Ataque": 70,
        "Defesa": 60,
        "Velocidade": 115,
        "Altura": 1.0,
        "Peso": 32.0,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
        ]
    },
    {
        "ID": 54,
        "Nome": "Psyduck",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        "Tipo": "\u00c1gua",
        "HP": 50,
        "Ataque": 52,
        "Defesa": 48,
        "Velocidade": 55,
        "Altura": 0.8,
        "Peso": 19.6,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
        ]
    },
    {
        "ID": 55,
        "Nome": "Golduck",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        "Tipo": "\u00c1gua",
        "HP": 80,
        "Ataque": 82,
        "Defesa": 78,
        "Velocidade": 85,
        "Altura": 1.7,
        "Peso": 76.6,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
        ]
    },
    {
        "ID": 56,
        "Nome": "Mankey",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        "Tipo": "Lutador",
        "HP": 40,
        "Ataque": 80,
        "Defesa": 35,
        "Velocidade": 70,
        "Altura": 0.5,
        "Peso": 28.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png"
        ]
    },
    {
        "ID": 57,
        "Nome": "Primeape",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        "Tipo": "Lutador",
        "HP": 65,
        "Ataque": 105,
        "Defesa": 60,
        "Velocidade": 95,
        "Altura": 1.0,
        "Peso": 32.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png"
        ]
    },
    {
        "ID": 58,
        "Nome": "Growlithe",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        "Tipo": "Fogo",
        "HP": 55,
        "Ataque": 70,
        "Defesa": 45,
        "Velocidade": 60,
        "Altura": 0.7,
        "Peso": 19.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
        ]
    },
    {
        "ID": 59,
        "Nome": "Arcanine",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        "Tipo": "Fogo",
        "HP": 90,
        "Ataque": 110,
        "Defesa": 80,
        "Velocidade": 95,
        "Altura": 1.9,
        "Peso": 155.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
        ]
    },
    {
        "ID": 60,
        "Nome": "Poliwag",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
        "Tipo": "\u00c1gua",
        "HP": 40,
        "Ataque": 50,
        "Defesa": 40,
        "Velocidade": 90,
        "Altura": 0.6,
        "Peso": 12.4,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
        ]
    },
    {
        "ID": 61,
        "Nome": "Poliwhirl",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        "Tipo": "\u00c1gua",
        "HP": 65,
        "Ataque": 65,
        "Defesa": 65,
        "Velocidade": 90,
        "Altura": 1.0,
        "Peso": 20.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
        ]
    },
    {
        "ID": 62,
        "Nome": "Poliwrath",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        "Tipo": "\u00c1gua e Lutador",
        "HP": 90,
        "Ataque": 95,
        "Defesa": 95,
        "Velocidade": 70,
        "Altura": 1.3,
        "Peso": 54.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
        ]
    },
    {
        "ID": 63,
        "Nome": "Abra",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        "Tipo": "Ps\u00edquico",
        "HP": 25,
        "Ataque": 20,
        "Defesa": 15,
        "Velocidade": 90,
        "Altura": 0.9,
        "Peso": 19.5,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
        ]
    },
    {
        "ID": 64,
        "Nome": "Kadabra",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        "Tipo": "Ps\u00edquico",
        "HP": 40,
        "Ataque": 35,
        "Defesa": 30,
        "Velocidade": 105,
        "Altura": 1.3,
        "Peso": 56.5,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
        ]
    },
    {
        "ID": 65,
        "Nome": "Alakazam",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        "Tipo": "Ps\u00edquico",
        "HP": 55,
        "Ataque": 50,
        "Defesa": 45,
        "Velocidade": 120,
        "Altura": 1.5,
        "Peso": 48.0,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
        ]
    },
    {
        "ID": 66,
        "Nome": "Machop",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        "Tipo": "Lutador",
        "HP": 70,
        "Ataque": 80,
        "Defesa": 50,
        "Velocidade": 35,
        "Altura": 0.8,
        "Peso": 19.5,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
        ]
    },
    {
        "ID": 67,
        "Nome": "Machoke",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        "Tipo": "Lutador",
        "HP": 80,
        "Ataque": 100,
        "Defesa": 70,
        "Velocidade": 45,
        "Altura": 1.5,
        "Peso": 70.5,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
        ]
    },
    {
        "ID": 68,
        "Nome": "Machamp",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        "Tipo": "Lutador",
        "HP": 90,
        "Ataque": 130,
        "Defesa": 80,
        "Velocidade": 55,
        "Altura": 1.6,
        "Peso": 130.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
        ]
    },
    {
        "ID": 69,
        "Nome": "Bellsprout",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        "Tipo": "Grama e Veneno",
        "HP": 50,
        "Ataque": 75,
        "Defesa": 35,
        "Velocidade": 40,
        "Altura": 0.7,
        "Peso": 4.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
        ]
    },
    {
        "ID": 70,
        "Nome": "Weepinbell",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        "Tipo": "Grama e Veneno",
        "HP": 65,
        "Ataque": 90,
        "Defesa": 50,
        "Velocidade": 55,
        "Altura": 1.0,
        "Peso": 6.4,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
        ]
    },
    {
        "ID": 71,
        "Nome": "Victreebel",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        "Tipo": "Grama e Veneno",
        "HP": 80,
        "Ataque": 105,
        "Defesa": 65,
        "Velocidade": 70,
        "Altura": 1.7,
        "Peso": 15.5,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
        ]
    },
    {
        "ID": 72,
        "Nome": "Tentacool",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        "Tipo": "\u00c1gua e Veneno",
        "HP": 40,
        "Ataque": 40,
        "Defesa": 35,
        "Velocidade": 70,
        "Altura": 0.9,
        "Peso": 45.5,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
        ]
    },
    {
        "ID": 73,
        "Nome": "Tentacruel",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        "Tipo": "\u00c1gua e Veneno",
        "HP": 80,
        "Ataque": 70,
        "Defesa": 65,
        "Velocidade": 100,
        "Altura": 1.6,
        "Peso": 55.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
        ]
    },
    {
        "ID": 74,
        "Nome": "Geodude",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        "Tipo": "Pedra e Terra",
        "HP": 40,
        "Ataque": 80,
        "Defesa": 100,
        "Velocidade": 20,
        "Altura": 0.4,
        "Peso": 20.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
        ]
    },
    {
        "ID": 75,
        "Nome": "Graveler",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        "Tipo": "Pedra e Terra",
        "HP": 55,
        "Ataque": 95,
        "Defesa": 115,
        "Velocidade": 35,
        "Altura": 1.0,
        "Peso": 105.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
        ]
    },
    {
        "ID": 76,
        "Nome": "Golem",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        "Tipo": "Pedra e Terra",
        "HP": 80,
        "Ataque": 120,
        "Defesa": 130,
        "Velocidade": 45,
        "Altura": 1.4,
        "Peso": 300.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
        ]
    },
    {
        "ID": 77,
        "Nome": "Ponyta",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
        "Tipo": "Fogo",
        "HP": 50,
        "Ataque": 85,
        "Defesa": 55,
        "Velocidade": 90,
        "Altura": 1.0,
        "Peso": 30.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
        ]
    },
    {
        "ID": 78,
        "Nome": "Rapidash",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        "Tipo": "Fogo",
        "HP": 65,
        "Ataque": 100,
        "Defesa": 70,
        "Velocidade": 105,
        "Altura": 1.7,
        "Peso": 95.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
        ]
    },
    {
        "ID": 79,
        "Nome": "Slowpoke",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
        "Tipo": "\u00c1gua e Ps\u00edquico",
        "HP": 90,
        "Ataque": 65,
        "Defesa": 65,
        "Velocidade": 15,
        "Altura": 1.2,
        "Peso": 36.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
        ]
    },
    {
        "ID": 80,
        "Nome": "Slowbro",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        "Tipo": "\u00c1gua e Ps\u00edquico",
        "HP": 95,
        "Ataque": 75,
        "Defesa": 110,
        "Velocidade": 30,
        "Altura": 1.6,
        "Peso": 78.5,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
        ]
    },
    {
        "ID": 81,
        "Nome": "Magnemite",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        "Tipo": "El\u00e9trico e A\u00e7o",
        "HP": 25,
        "Ataque": 35,
        "Defesa": 70,
        "Velocidade": 45,
        "Altura": 0.3,
        "Peso": 6.0,
        "Habitat": "Terreno Acidentado",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png"
        ]
    },
    {
        "ID": 82,
        "Nome": "Magneton",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        "Tipo": "El\u00e9trico e A\u00e7o",
        "HP": 50,
        "Ataque": 60,
        "Defesa": 95,
        "Velocidade": 70,
        "Altura": 1.0,
        "Peso": 60.0,
        "Habitat": "Terreno Acidentado",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png"
        ]
    },
    {
        "ID": 83,
        "Nome": "Farfetchd",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
        "Tipo": "Normal e Voador",
        "HP": 52,
        "Ataque": 90,
        "Defesa": 55,
        "Velocidade": 60,
        "Altura": 0.8,
        "Peso": 15.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png"
        ]
    },
    {
        "ID": 84,
        "Nome": "Doduo",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
        "Tipo": "Normal e Voador",
        "HP": 35,
        "Ataque": 85,
        "Defesa": 45,
        "Velocidade": 75,
        "Altura": 1.4,
        "Peso": 39.2,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
        ]
    },
    {
        "ID": 85,
        "Nome": "Dodrio",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        "Tipo": "Normal e Voador",
        "HP": 60,
        "Ataque": 110,
        "Defesa": 70,
        "Velocidade": 110,
        "Altura": 1.8,
        "Peso": 85.2,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
        ]
    },
    {
        "ID": 86,
        "Nome": "Seel",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
        "Tipo": "\u00c1gua",
        "HP": 65,
        "Ataque": 45,
        "Defesa": 55,
        "Velocidade": 45,
        "Altura": 1.1,
        "Peso": 90.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
        ]
    },
    {
        "ID": 87,
        "Nome": "Dewgong",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        "Tipo": "\u00c1gua e Gelo",
        "HP": 90,
        "Ataque": 70,
        "Defesa": 80,
        "Velocidade": 70,
        "Altura": 1.7,
        "Peso": 120.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
        ]
    },
    {
        "ID": 88,
        "Nome": "Grimer",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
        "Tipo": "Veneno",
        "HP": 80,
        "Ataque": 80,
        "Defesa": 50,
        "Velocidade": 25,
        "Altura": 0.9,
        "Peso": 30.0,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
        ]
    },
    {
        "ID": 89,
        "Nome": "Muk",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        "Tipo": "Veneno",
        "HP": 105,
        "Ataque": 105,
        "Defesa": 75,
        "Velocidade": 50,
        "Altura": 1.2,
        "Peso": 30.0,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
        ]
    },
    {
        "ID": 90,
        "Nome": "Shellder",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        "Tipo": "\u00c1gua",
        "HP": 30,
        "Ataque": 65,
        "Defesa": 100,
        "Velocidade": 40,
        "Altura": 0.3,
        "Peso": 4.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
        ]
    },
    {
        "ID": 91,
        "Nome": "Cloyster",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        "Tipo": "\u00c1gua e Gelo",
        "HP": 50,
        "Ataque": 95,
        "Defesa": 180,
        "Velocidade": 70,
        "Altura": 1.5,
        "Peso": 132.5,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
        ]
    },
    {
        "ID": 92,
        "Nome": "Gastly",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        "Tipo": "Fantasma e Veneno",
        "HP": 30,
        "Ataque": 35,
        "Defesa": 30,
        "Velocidade": 80,
        "Altura": 1.3,
        "Peso": 0.1,
        "Habitat": "Caverna",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
        ]
    },
    {
        "ID": 93,
        "Nome": "Haunter",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        "Tipo": "Fantasma e Veneno",
        "HP": 45,
        "Ataque": 50,
        "Defesa": 45,
        "Velocidade": 95,
        "Altura": 1.6,
        "Peso": 0.1,
        "Habitat": "Caverna",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
        ]
    },
    {
        "ID": 94,
        "Nome": "Gengar",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        "Tipo": "Fantasma e Veneno",
        "HP": 60,
        "Ataque": 65,
        "Defesa": 60,
        "Velocidade": 110,
        "Altura": 1.5,
        "Peso": 40.5,
        "Habitat": "Caverna",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
        ]
    },
    {
        "ID": 95,
        "Nome": "Onix",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        "Tipo": "Pedra e Terra",
        "HP": 35,
        "Ataque": 45,
        "Defesa": 160,
        "Velocidade": 70,
        "Altura": 8.8,
        "Peso": 210.0,
        "Habitat": "Caverna",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png"
        ]
    },
    {
        "ID": 96,
        "Nome": "Drowzee",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        "Tipo": "Ps\u00edquico",
        "HP": 60,
        "Ataque": 48,
        "Defesa": 45,
        "Velocidade": 42,
        "Altura": 1.0,
        "Peso": 32.4,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
        ]
    },
    {
        "ID": 97,
        "Nome": "Hypno",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        "Tipo": "Ps\u00edquico",
        "HP": 85,
        "Ataque": 73,
        "Defesa": 70,
        "Velocidade": 67,
        "Altura": 1.6,
        "Peso": 75.6,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
        ]
    },
    {
        "ID": 98,
        "Nome": "Krabby",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
        "Tipo": "\u00c1gua",
        "HP": 30,
        "Ataque": 105,
        "Defesa": 90,
        "Velocidade": 50,
        "Altura": 0.4,
        "Peso": 6.5,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
        ]
    },
    {
        "ID": 99,
        "Nome": "Kingler",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        "Tipo": "\u00c1gua",
        "HP": 55,
        "Ataque": 130,
        "Defesa": 115,
        "Velocidade": 75,
        "Altura": 1.3,
        "Peso": 60.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
        ]
    },
    {
        "ID": 100,
        "Nome": "Voltorb",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        "Tipo": "El\u00e9trico",
        "HP": 40,
        "Ataque": 30,
        "Defesa": 50,
        "Velocidade": 100,
        "Altura": 0.5,
        "Peso": 10.4,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
        ]
    },
    {
        "ID": 101,
        "Nome": "Electrode",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
        "Tipo": "El\u00e9trico",
        "HP": 60,
        "Ataque": 50,
        "Defesa": 70,
        "Velocidade": 150,
        "Altura": 1.2,
        "Peso": 66.6,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
        ]
    },
    {
        "ID": 102,
        "Nome": "Exeggcute",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
        "Tipo": "Grama e Ps\u00edquico",
        "HP": 60,
        "Ataque": 40,
        "Defesa": 80,
        "Velocidade": 40,
        "Altura": 0.4,
        "Peso": 2.5,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
        ]
    },
    {
        "ID": 103,
        "Nome": "Exeggutor",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
        "Tipo": "Grama e Ps\u00edquico",
        "HP": 95,
        "Ataque": 95,
        "Defesa": 85,
        "Velocidade": 55,
        "Altura": 2.0,
        "Peso": 120.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
        ]
    },
    {
        "ID": 104,
        "Nome": "Cubone",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
        "Tipo": "Terra",
        "HP": 50,
        "Ataque": 50,
        "Defesa": 95,
        "Velocidade": 35,
        "Altura": 0.4,
        "Peso": 6.5,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
        ]
    },
    {
        "ID": 105,
        "Nome": "Marowak",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
        "Tipo": "Terra",
        "HP": 60,
        "Ataque": 80,
        "Defesa": 110,
        "Velocidade": 45,
        "Altura": 1.0,
        "Peso": 45.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
        ]
    },
    {
        "ID": 106,
        "Nome": "Hitmonlee",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
        "Tipo": "Lutador",
        "HP": 50,
        "Ataque": 120,
        "Defesa": 53,
        "Velocidade": 87,
        "Altura": 1.5,
        "Peso": 49.8,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
        ]
    },
    {
        "ID": 107,
        "Nome": "Hitmonchan",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
        "Tipo": "Lutador",
        "HP": 50,
        "Ataque": 105,
        "Defesa": 79,
        "Velocidade": 76,
        "Altura": 1.4,
        "Peso": 50.2,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
        ]
    },
    {
        "ID": 108,
        "Nome": "Lickitung",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
        "Tipo": "Normal",
        "HP": 90,
        "Ataque": 55,
        "Defesa": 75,
        "Velocidade": 30,
        "Altura": 1.2,
        "Peso": 65.5,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png"
        ]
    },
    {
        "ID": 109,
        "Nome": "Koffing",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
        "Tipo": "Veneno",
        "HP": 40,
        "Ataque": 65,
        "Defesa": 95,
        "Velocidade": 35,
        "Altura": 0.6,
        "Peso": 1.0,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
        ]
    },
    {
        "ID": 110,
        "Nome": "Weezing",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
        "Tipo": "Veneno",
        "HP": 65,
        "Ataque": 90,
        "Defesa": 120,
        "Velocidade": 60,
        "Altura": 1.2,
        "Peso": 9.5,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
        ]
    },
    {
        "ID": 111,
        "Nome": "Rhyhorn",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
        "Tipo": "Terra e Pedra",
        "HP": 80,
        "Ataque": 85,
        "Defesa": 95,
        "Velocidade": 25,
        "Altura": 1.0,
        "Peso": 115.0,
        "Habitat": "Terreno Acidentado",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png"
        ]
    },
    {
        "ID": 112,
        "Nome": "Rhydon",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
        "Tipo": "Terra e Pedra",
        "HP": 105,
        "Ataque": 130,
        "Defesa": 120,
        "Velocidade": 40,
        "Altura": 1.9,
        "Peso": 120.0,
        "Habitat": "Terreno Acidentado",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png"
        ]
    },
    {
        "ID": 113,
        "Nome": "Chansey",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
        "Tipo": "Normal",
        "HP": 250,
        "Ataque": 5,
        "Defesa": 5,
        "Velocidade": 50,
        "Altura": 1.1,
        "Peso": 34.6,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png"
        ]
    },
    {
        "ID": 114,
        "Nome": "Tangela",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
        "Tipo": "Grama",
        "HP": 65,
        "Ataque": 55,
        "Defesa": 115,
        "Velocidade": 60,
        "Altura": 1.0,
        "Peso": 35.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png"
        ]
    },
    {
        "ID": 115,
        "Nome": "Kangaskhan",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
        "Tipo": "Normal",
        "HP": 105,
        "Ataque": 95,
        "Defesa": 80,
        "Velocidade": 90,
        "Altura": 2.2,
        "Peso": 80.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
        ]
    },
    {
        "ID": 116,
        "Nome": "Horsea",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
        "Tipo": "\u00c1gua",
        "HP": 30,
        "Ataque": 40,
        "Defesa": 70,
        "Velocidade": 60,
        "Altura": 0.4,
        "Peso": 8.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png"
        ]
    },
    {
        "ID": 117,
        "Nome": "Seadra",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        "Tipo": "\u00c1gua",
        "HP": 55,
        "Ataque": 65,
        "Defesa": 95,
        "Velocidade": 85,
        "Altura": 1.2,
        "Peso": 25.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png"
        ]
    },
    {
        "ID": 118,
        "Nome": "Goldeen",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
        "Tipo": "\u00c1gua",
        "HP": 45,
        "Ataque": 67,
        "Defesa": 60,
        "Velocidade": 63,
        "Altura": 0.6,
        "Peso": 15.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
        ]
    },
    {
        "ID": 119,
        "Nome": "Seaking",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
        "Tipo": "\u00c1gua",
        "HP": 80,
        "Ataque": 92,
        "Defesa": 65,
        "Velocidade": 68,
        "Altura": 1.3,
        "Peso": 39.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
        ]
    },
    {
        "ID": 120,
        "Nome": "Staryu",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
        "Tipo": "\u00c1gua",
        "HP": 30,
        "Ataque": 45,
        "Defesa": 55,
        "Velocidade": 85,
        "Altura": 0.8,
        "Peso": 34.5,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
        ]
    },
    {
        "ID": 121,
        "Nome": "Starmie",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        "Tipo": "\u00c1gua e Ps\u00edquico",
        "HP": 60,
        "Ataque": 75,
        "Defesa": 85,
        "Velocidade": 115,
        "Altura": 1.1,
        "Peso": 80.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
        ]
    },
    {
        "ID": 122,
        "Nome": "Mr-mime",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
        "Tipo": "Ps\u00edquico e Fada",
        "HP": 40,
        "Ataque": 45,
        "Defesa": 65,
        "Velocidade": 90,
        "Altura": 1.3,
        "Peso": 54.5,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png"
        ]
    },
    {
        "ID": 123,
        "Nome": "Scyther",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
        "Tipo": "Inseto e Voador",
        "HP": 70,
        "Ataque": 110,
        "Defesa": 80,
        "Velocidade": 105,
        "Altura": 1.5,
        "Peso": 56.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"
        ]
    },
    {
        "ID": 124,
        "Nome": "Jynx",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
        "Tipo": "Gelo e Ps\u00edquico",
        "HP": 65,
        "Ataque": 50,
        "Defesa": 35,
        "Velocidade": 95,
        "Altura": 1.4,
        "Peso": 40.6,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
        ]
    },
    {
        "ID": 125,
        "Nome": "Electabuzz",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
        "Tipo": "El\u00e9trico",
        "HP": 65,
        "Ataque": 83,
        "Defesa": 57,
        "Velocidade": 105,
        "Altura": 1.1,
        "Peso": 30.0,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png"
        ]
    },
    {
        "ID": 126,
        "Nome": "Magmar",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
        "Tipo": "Fogo",
        "HP": 65,
        "Ataque": 95,
        "Defesa": 57,
        "Velocidade": 93,
        "Altura": 1.3,
        "Peso": 44.5,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png"
        ]
    },
    {
        "ID": 127,
        "Nome": "Pinsir",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
        "Tipo": "Inseto",
        "HP": 65,
        "Ataque": 125,
        "Defesa": 100,
        "Velocidade": 85,
        "Altura": 1.5,
        "Peso": 55.0,
        "Habitat": "Floresta",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
        ]
    },
    {
        "ID": 128,
        "Nome": "Tauros",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
        "Tipo": "Normal",
        "HP": 75,
        "Ataque": 100,
        "Defesa": 95,
        "Velocidade": 110,
        "Altura": 1.4,
        "Peso": 88.4,
        "Habitat": "Campo",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
        ]
    },
    {
        "ID": 129,
        "Nome": "Magikarp",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        "Tipo": "\u00c1gua",
        "HP": 20,
        "Ataque": 10,
        "Defesa": 55,
        "Velocidade": 80,
        "Altura": 0.9,
        "Peso": 10.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
        ]
    },
    {
        "ID": 130,
        "Nome": "Gyarados",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        "Tipo": "\u00c1gua e Voador",
        "HP": 95,
        "Ataque": 125,
        "Defesa": 79,
        "Velocidade": 81,
        "Altura": 6.5,
        "Peso": 235.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
        ]
    },
    {
        "ID": 131,
        "Nome": "Lapras",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        "Tipo": "\u00c1gua e Gelo",
        "HP": 130,
        "Ataque": 85,
        "Defesa": 80,
        "Velocidade": 60,
        "Altura": 2.5,
        "Peso": 220.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
        ]
    },
    {
        "ID": 132,
        "Nome": "Ditto",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "Tipo": "Normal",
        "HP": 48,
        "Ataque": 48,
        "Defesa": 48,
        "Velocidade": 48,
        "Altura": 0.3,
        "Peso": 4.0,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        ]
    },
    {
        "ID": 133,
        "Nome": "Eevee",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "Tipo": "Normal",
        "HP": 55,
        "Ataque": 55,
        "Defesa": 50,
        "Velocidade": 55,
        "Altura": 0.3,
        "Peso": 6.5,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
        ]
    },
    {
        "ID": 134,
        "Nome": "Vaporeon",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        "Tipo": "\u00c1gua",
        "HP": 130,
        "Ataque": 65,
        "Defesa": 60,
        "Velocidade": 65,
        "Altura": 1.0,
        "Peso": 29.0,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
        ]
    },
    {
        "ID": 135,
        "Nome": "Jolteon",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        "Tipo": "El\u00e9trico",
        "HP": 65,
        "Ataque": 65,
        "Defesa": 60,
        "Velocidade": 130,
        "Altura": 0.8,
        "Peso": 24.5,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
        ]
    },
    {
        "ID": 136,
        "Nome": "Flareon",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        "Tipo": "Fogo",
        "HP": 65,
        "Ataque": 130,
        "Defesa": 60,
        "Velocidade": 65,
        "Altura": 0.9,
        "Peso": 25.0,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
        ]
    },
    {
        "ID": 137,
        "Nome": "Porygon",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
        "Tipo": "Normal",
        "HP": 65,
        "Ataque": 60,
        "Defesa": 70,
        "Velocidade": 40,
        "Altura": 0.8,
        "Peso": 36.5,
        "Habitat": "Urbano",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png"
        ]
    },
    {
        "ID": 138,
        "Nome": "Omanyte",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
        "Tipo": "Pedra e \u00c1gua",
        "HP": 35,
        "Ataque": 40,
        "Defesa": 100,
        "Velocidade": 35,
        "Altura": 0.4,
        "Peso": 7.5,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
        ]
    },
    {
        "ID": 139,
        "Nome": "Omastar",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
        "Tipo": "Pedra e \u00c1gua",
        "HP": 70,
        "Ataque": 60,
        "Defesa": 125,
        "Velocidade": 55,
        "Altura": 1.0,
        "Peso": 35.0,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
        ]
    },
    {
        "ID": 140,
        "Nome": "Kabuto",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
        "Tipo": "Pedra e \u00c1gua",
        "HP": 30,
        "Ataque": 80,
        "Defesa": 90,
        "Velocidade": 55,
        "Altura": 0.5,
        "Peso": 11.5,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
        ]
    },
    {
        "ID": 141,
        "Nome": "Kabutops",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
        "Tipo": "Pedra e \u00c1gua",
        "HP": 60,
        "Ataque": 115,
        "Defesa": 105,
        "Velocidade": 80,
        "Altura": 1.3,
        "Peso": 40.5,
        "Habitat": "Mar",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
        ]
    },
    {
        "ID": 142,
        "Nome": "Aerodactyl",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
        "Tipo": "Pedra e Voador",
        "HP": 80,
        "Ataque": 105,
        "Defesa": 65,
        "Velocidade": 130,
        "Altura": 1.8,
        "Peso": 59.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
        ]
    },
    {
        "ID": 143,
        "Nome": "Snorlax",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        "Tipo": "Normal",
        "HP": 160,
        "Ataque": 110,
        "Defesa": 65,
        "Velocidade": 30,
        "Altura": 2.1,
        "Peso": 460.0,
        "Habitat": "Montanha",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
        ]
    },
    {
        "ID": 144,
        "Nome": "Articuno",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        "Tipo": "Gelo e Voador",
        "HP": 90,
        "Ataque": 85,
        "Defesa": 100,
        "Velocidade": 85,
        "Altura": 1.7,
        "Peso": 55.4,
        "Habitat": "Raro",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
        ]
    },
    {
        "ID": 145,
        "Nome": "Zapdos",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
        "Tipo": "El\u00e9trico e Voador",
        "HP": 90,
        "Ataque": 90,
        "Defesa": 85,
        "Velocidade": 100,
        "Altura": 1.6,
        "Peso": 52.6,
        "Habitat": "Raro",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
        ]
    },
    {
        "ID": 146,
        "Nome": "Moltres",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
        "Tipo": "Fogo e Voador",
        "HP": 90,
        "Ataque": 100,
        "Defesa": 90,
        "Velocidade": 90,
        "Altura": 2.0,
        "Peso": 60.0,
        "Habitat": "Raro",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
        ]
    },
    {
        "ID": 147,
        "Nome": "Dratini",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
        "Tipo": "Drag\u00e3o",
        "HP": 41,
        "Ataque": 64,
        "Defesa": 45,
        "Velocidade": 50,
        "Altura": 1.8,
        "Peso": 3.3,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
        ]
    },
    {
        "ID": 148,
        "Nome": "Dragonair",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
        "Tipo": "Drag\u00e3o",
        "HP": 61,
        "Ataque": 84,
        "Defesa": 65,
        "Velocidade": 70,
        "Altura": 4.0,
        "Peso": 16.5,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
        ]
    },
    {
        "ID": 149,
        "Nome": "Dragonite",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        "Tipo": "Drag\u00e3o e Voador",
        "HP": 91,
        "Ataque": 134,
        "Defesa": 95,
        "Velocidade": 80,
        "Altura": 2.2,
        "Peso": 210.0,
        "Habitat": "Beira da \u00c1gua",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
        ]
    },
    {
        "ID": 150,
        "Nome": "Mewtwo",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        "Tipo": "Ps\u00edquico",
        "HP": 106,
        "Ataque": 110,
        "Defesa": 90,
        "Velocidade": 130,
        "Altura": 2.0,
        "Peso": 122.0,
        "Habitat": "Raro",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
        ]
    },
    {
        "ID": 151,
        "Nome": "Mew",
        "Foto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
        "Tipo": "Ps\u00edquico",
        "HP": 100,
        "Ataque": 100,
        "Defesa": 100,
        "Velocidade": 100,
        "Altura": 0.4,
        "Peso": 4.0,
        "Habitat": "Raro",
        "Evolucoes": [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
        ]
    }
];