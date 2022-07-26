## Concepts
* REST API principals
    * CRUD
    * HTTP methods
* JWT & refresh tokens
* Request validation
## Technologies
* Node.js
* Mongoose
* TypeScript
* Express.js 
* Zod validation
* Swagger documentation 

## Video structure
1. What are we going to build (Swagger documentation demo - Philadelphia bike-sharing)
2. Code walk-through
3. Bootstrap application
   1. Setup express JS
   2. Create routes function
   3. Setup database connection
   4. Setup logger
   5. Validate request middleware

## How to run application on your local machine
* move to project directory using cd command 
* Update database connection URL for mongo inside file config->default.ts
* RUN docker-compose up -d --build
* RUN  yarn build
* RUN  yarn dev

Note: You will need Docker installed locally if you want to test your Docker configutation



HTTP CURL Request Request
curl -X 'POST' \
  'http://localhost:1337/api/product/rule' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Rule 1",
  "code": "R-1001",
  "product_type": "physical",
  "rule_type": "minimum quantity",
  "is_apply_on": "yes",
  "is_apply_on_value": "1"
}'





curl -X 'POST' \
  'http://localhost:1337/api/product/rule' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Rule 2",
  "code": "R-1002",
  "product_type": "virtual",
  "rule_type": "minimum quantity",
  "is_apply_on": "yes",
  "is_apply_on_value": "1"
}'

curl -X 'POST' \
  'http://localhost:1337/api/product/rule' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Rule 3",
  "code": "R-1003",
  "product_type": "physical",
  "rule_type": "product customisation prompt on add to cart",
  "is_apply_on": "yes",
  "is_apply_on_value": "standard (+$5)"
}'


curl -X 'POST' \
  'http://localhost:1337/api/product/rule' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Tax standard",
  "code": "R-1006",
  "product_type": "",
  "rule_type": "tax applicable",
  "is_apply_on": "standard",
  "is_apply_on_value": "5%"
}'

curl -X 'POST' \
  'http://localhost:1337/api/product/rule' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Tax Custom",
  "code": "R-1006",
  "product_type": "",
  "rule_type": "tax applicable",
  "is_apply_on": "custom",
  "is_apply_on_value": "15%"
}'



curl -X 'POST' \
  'http://localhost:1337/api/product/add' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "sku": "XLTSH01",
  "name": "Tshirt",
  "description": "Descriptionhere",
  "product_type_code": "physical",
  "regular_price": 321.59,
  "discount_price": 299.999,
  "quantity": 11,
  "is_taxable": "standard"
}'


curl -X 'POST' \
  'http://localhost:1337/api/product/add' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "sku": "XLTSH011",
  "name": "Tshirt xl",
  "description": "Descriptionhere xl",
  "product_type_code": "physical",
  "regular_price": 321.59,
  "discount_price": 299.999,
  "quantity": 11,
  "is_taxable": "custom"
}'


curl -X 'POST' \
  'http://localhost:1337/api/add-cart/62df832ae1d26e563b06bafe' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "product_sku": "XLTSH011",
  "quantity": 3
}'







