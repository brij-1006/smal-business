import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateProductCartInput:
 *      type: object
 *      required:
 *        - product_sku
 *        - cart_id
 *        - quantity
 *      properties:
 *        product_sku:
 *          type: string
 *        cart_id:
 *          type: string
 *        quantity:
 *          type: number
 *    CreateProductCartResponse:
 *      type: object
 *      properties:
 *        product_sku:
 *          type: string
 *        cart_id:
 *          type: string
 *        quantity:
 *          type: number
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const createProductCartSchema = object({
  body: object({
    product_sku: string({
      required_error: "product_sku is required",
    }),
    cart_id: string({
      required_error: "cart_id is required",
    }),
    quantity: number({
      required_error: "quantity is required",
    }),
  }),
});

export type CreateProductCartInput = TypeOf<typeof createProductCartSchema>;
