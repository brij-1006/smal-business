import { object, number,  string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateProductInput:
 *      type: object
 *      required:
 *        - sku
 *        - name
 *        - description
 *        - product_type_code
 *        - regular_price
 *        - discount_price
 *        - quantity
 *        - is_taxable
 *      properties:
 *        sku:
 *          type: string
 *          default: XLTSH01
 *        name:
 *          type: string
 *          default: Tshirt
 *        description:
 *          type: string
 *          default: Descriptionhere
 *        product_type_code:
 *          type: string
 *          default: physical
 *        regular_price:
 *          type: number
 *          default: 321.59
 *        discount_price:
 *          type: number
 *          default: 299.999
 *        quantity:
 *          type: number
 *          default: 11
 *        is_taxable:
 *          type: string
 *          default: standard
 *    CreateProductResponse:
 *      type: object
 *      properties:
 *        sku:
 *          type: string
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        product_type_code:
 *          type: string
 *        regular_price:
 *          type: number
 *        discount_price:
 *          type: number
 *        quantity:
 *          type: number
 *        is_taxable:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const createProductSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    sku: string({
      required_error: "sku is required",
    }),
    product_type_code: string({
      required_error: "Product Type is required",
    }),
    regular_price: number({
      required_error: "Regular Price is required",
    }),
    discount_price: number({
      required_error: "Discount Price is required",
    }),
    quantity: number({
      required_error: "Quantity  is required",
    }),
    is_taxable: string({
      required_error: "taxable  is required",
    }),
  }),
});

export type CreateProductInput = TypeOf<typeof createProductSchema>;
