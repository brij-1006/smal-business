import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreatePDiscountCartInput:
 *      type: object
 *      required:
 *        - is_provision
 *        - is_provision_val
 *        - cart_id
 *      properties:
 *        is_provision:
 *          type: string
 *        is_provision_val:
 *          type: number
 *        cart_id:
 *          type: string
 *    CreatePDiscountCartResponse:
 *      type: object
 *      properties:
 *        is_provision:
 *          type: string
 *        is_provision_val:
 *          type: string
 *        addon_provision_amt:
 *          type: number
 */

export const createPDiscountCartSchema = object({
  body: object({
    is_provision: string({
      required_error: "is_provision is required",
    }),
    is_provision_val: number({
      required_error: "is_provision_val is required",
    }),
    cart_id: string({
      required_error: "cart_id is required",
    }),
  }),
});

export type CreatePDiscountCartInput = TypeOf<typeof createPDiscountCartSchema>;
