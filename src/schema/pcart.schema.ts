import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreatePCartInput:
 *      type: object
 *      required:
 *        - customer_id
 *      properties:
 *        customer_id:
 *          type: string
 *    CreatePCartResponse:
 *      type: object
 *      properties:
 *        customer_id:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const createPCartSchema = object({
  body: object({
    customer_id: string({
      required_error: "customer_id is required",
    }),
  }),
});

export type CreatePCartInput = TypeOf<typeof createPCartSchema>;
