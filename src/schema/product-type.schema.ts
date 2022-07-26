import { object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateProductTypeInput:
 *      type: object
 *      required:
 *        - name
 *        - code
 *      properties:
 *        name:
 *          type: string
 *          default: physical
 *        code:
 *          type: string
 *          default: physical
 *    CreateProductTypeResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        code:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const createProductTypeSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    code: string({
      required_error: "Code is required",
    }),
  }),
});

export type CreateProductTypeInput = TypeOf<typeof createProductTypeSchema>;
