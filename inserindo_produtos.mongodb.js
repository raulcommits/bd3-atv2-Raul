const database = "BD3-NoSql-Produtos";

const collection = "bd3-nosql-atv2";

use(database);

db["bd3-nosql-atv2"].insertMany(
    [
        {
            "cod_produto": 1,
            "nome_produto": "Vaso",
            "valor": 120.00
        },
        {
            "cod_produto": 2,
            "nome_produto": "Microondas",
            "valor": 700.90
        },
        {
            "cod_produto": 3,
            "nome_produto": "Frigobar",
            "valor": 500.00
        },
        {
            "cod_produto": 4,
            "nome_produto": "Celular",
            "valor": 700.99
        },
        {
            "cod_produto": 5,
            "nome_produto": "Cadeira",
            "valor": 130.00
        },
        {
            "cod_produto": 6,
            "nome_produto": "Caldeirão",
            "valor": 400.00
        },
        {
            "cod_produto": 7,
            "nome_produto": "Frigideira",
            "valor": 350.21
        },
        {
            "cod_produto": 8,
            "nome_produto": "Tablet",
            "valor": 999.10
        },
        {
            "cod_produto": 9,
            "nome_produto": "Pendrive 64gb",
            "valor": 108.00
        },
        {
            "cod_produto": 10,
            "nome_produto": "Mochila",
            "valor": 119.80
        }
    ]
)