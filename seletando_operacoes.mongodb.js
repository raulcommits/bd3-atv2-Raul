const database = "BD3-NoSql-Produtos";

const collection = "bd3-nosql-atv2";

use(database);

db["bd3-nosql-atv2"].find(
    {valor: {$gt: 700}}
)

db["bd3-nosql-atv2"].find(
    {valor: {$lt: 450}}
)

db["bd3-nosql-atv2"].find(
    {valor: {$gte: 500, $lte: 950}}
)