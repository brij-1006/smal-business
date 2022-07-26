import { object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateProductRuleInput:
 *      type: object
 *      required:
 *        - name
 *        - code
 *        - product_type
 *        - rule_type
 *        - is_apply_on
 *        - is_apply_on_value
 *      properties:
 *        name:
 *          type: string
 *          default: Rule 1
 *        code:
 *          type: string
 *          default: R-1001
 *        product_type:
 *          type: string
 *          default: physical
 *        rule_type:
 *          type: string
 *          default: minimum quantity
 *        is_apply_on:
 *          type: string
 *          default: yes
 *        is_apply_on_value:
 *          type: string
 *          default: 1
 *    CreateProductRuleResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        code:
 *          type: string
 *        product_type:
 *          type: string
 *        rule_type:
 *          type: string
 *        is_apply_on:
 *          type: string
 *        is_apply_on_value:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const createProductRuleSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    code: string({
      required_error: "Code is required",
    }),
    rule_type: string({
      required_error: "Rule Type is required",
    }),
    is_apply_on: string({
      required_error: "Apply on is required",
    }),
    is_apply_on_value: string({
      required_error: "Apply on value is required",
    }),
  }),
});

export type CreateProductRuleInput = TypeOf<typeof createProductRuleSchema>;
