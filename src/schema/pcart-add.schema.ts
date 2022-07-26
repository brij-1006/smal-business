import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreatePCartAddInput:
 *      type: object
 *      required:
 *        - product_sku
 *        - quantity
 *      properties:
 *        product_sku:
 *          type: string
 *        quantity:
 *          type: number
 *    CreatePCartAddResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        product_sku:
 *          type: string
 *        quantity:
 *          type: number
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const createPCartAddSchema = object({
  body: object({
    product_sku: string({
      required_error: "customer_id is required",
    }),
    quantity: number({
      required_error: "quantity is required",
    }),
  }),
});

export type CreatePCartAddInput = TypeOf<typeof createPCartAddSchema>;
