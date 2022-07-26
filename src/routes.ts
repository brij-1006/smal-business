import { Express, Request, Response } from "express";

import {
  createUserSessionHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
} from "./controller/session.controller";
import { createUserHandler } from "./controller/user.controller";
import requireUser from "./middleware/requireUser";
import validateResource from "./middleware/validateResource";

import { createSessionSchema } from "./schema/session.schema";
import { createUserSchema } from "./schema/user.schema";
import { createProductTypeSchema } from "./schema/product-type.schema";
import { createProductSchema } from "./schema/product.schema";



import { 
  createProductTypeHandler,
} from "./controller/product-type.controller";

import {  createProductRuleHandler,} from "./controller/product-rule.controller";
import { createProductRuleSchema } from "./schema/product-rule.schema";
// product cart
import { getCartItemsHandler } from "./controller/product-cart.controller";
import { CreateProductCartInput } from "./schema/product-cart.schema";
import {  createPCartHandler,} from "./controller/pcart.controller";
import { createPCartSchema } from "./schema/pcart.schema";
import { createPCartAddSchema } from "./schema/pcart-add.schema";
/**** Product cart end***/

import { 
  createProductHandler,
  listHandler,
  viewHandler
} from "./controller/product.controller";


function routes(app: Express) {
  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );
  app.get("/api/sessions", requireUser, getUserSessionsHandler);
  app.delete("/api/sessions", requireUser, deleteSessionHandler);






  /**
   * @openapi
   * '/api/product-type':
   *  post:
   *     tags:
   *     - Product Type
   *     summary: Create  a Product type
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateProductTypeInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateProductTypeResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
   app.post("/api/product-type", validateResource(createProductTypeSchema), createProductTypeHandler);


  /**
   * @openapi
   * '/api/product/rule':
   *  post:
   *     tags:
   *     - Product Rule
   *     summary: Create  a Product Rule
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateProductRuleInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateProductRuleResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
   app.post("/api/product/rule", validateResource(createProductRuleSchema), createProductRuleHandler);



  /**
   * @openapi
   * '/api/add-cart/:customerId':  
   *  post:
   *     tags:
   *     - Product Cart
   *     summary: Create  a Cart
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreatePCartAddInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreatePCartAddResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

   app.post("/api/add-cart/:customerId", validateResource(createPCartAddSchema), createPCartHandler);


  /**
 * @openapi
 * '/api/cart-items/:cart_id':
 *  get:
 *     tags:
 *     - Product Cart
 *     summary: Get a cart items By cart id 
 *     requestBody:
 *       required: true
 *     properties:
 *       cart_id:
 *         type: string
 *         default: 62dfe99f0371dc270d49d36d
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/CreateProductCartInput'
 *       404:
 *         description: Cart items not found
 */

   app.get("/api/cart-items/:cart_id",  getCartItemsHandler);


  /**
   * @openapi
   * '/api/product/add':
   *  post:
   *     tags:
   *     - Product 
   *     summary: Add a new Product 
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateProductInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateProductResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
   app.post("/api/product/add", validateResource(createProductSchema), createProductHandler);
  
/**
 * @openapi
 * '/api/v1/product/list':
 *  get:
 *     tags:
 *     - Product
 *     summary: Get a product list data 
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/CreateProductInput'
 *       404:
 *         description: Product not found
 */
 
  
   app.get(
    "/api/v1/product/list", 
    listHandler
);

/**
 * @openapi
 * '/api/v1/product/details/:sku':
 *  get:
 *     tags:
 *     - Product
 *     summary: Get a product By SKU Number 
 *     requestBody:
 *       required: true
 *     properties:
 *       sku:
 *         type: string
 *         default: XLTSH01
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/CreateProductInput'
 *       404:
 *         description: Product not found
 */
 
  
app.get(
    "/api/v1/product/details/:sku", 
    viewHandler
);



}

export default routes;
