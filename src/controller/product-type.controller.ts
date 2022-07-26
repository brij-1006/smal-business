import { Request, Response } from "express";
import dayjs from "dayjs";
import logger from "../utils/logger";

import { CreateProductTypeInput } from "../schema/product-type.schema";


import {
  createProductType,
  findProductType,
  findProductTypeByCode
} from "../service/product-type.service";




export async function createProductTypeHandler(
  req: Request<{}, {}, CreateProductTypeInput["body"]>,
  res: Response
) {
  try {
    const productType = await createProductType(req.body);
    return res.send(productType);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}








