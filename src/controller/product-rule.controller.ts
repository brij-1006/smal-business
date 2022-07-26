import { Request, Response } from "express";
import dayjs from "dayjs";
import logger from "../utils/logger";

import { CreateProductRuleInput } from "../schema/product-rule.schema";


import {
  createProductRule,
  findProductRule,
  findProductRuleByCode
} from "../service/product-rule.service";




export async function createProductRuleHandler(
  req: Request<{}, {}, CreateProductRuleInput["body"]>,
  res: Response
) {
  try {
    const productRule = await createProductRule(req.body);
    return res.send(productRule);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}








