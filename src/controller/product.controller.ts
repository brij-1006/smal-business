import { Request, Response } from "express";
import dayjs from "dayjs";
import logger from "../utils/logger";

import { CreateProductInput } from "../schema/product.schema";


import {
  createProduct,
  getProduct,
  findProductByCondition
} from "../service/product.service";




export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {
  try {
    const product = await createProduct(req.body);
    return res.send(product);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function listHandler( req: Request, res: Response) {

  try {
      const listObj = await getProduct();
      
      if (!listObj) {
         return res.sendStatus(404);
      }

      const result = {at : dayjs().toDate(), products: listObj};
     
      return res.send(result);

  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }

}

export async function viewHandler( req: Request, res: Response) {

  try {

      const sku = req.params.sku;
      const whereCondition:any = {
        "sku":sku ,
      };

      console.log('======condition============> ', whereCondition);
      const product = await findProductByCondition(whereCondition);
      console.log('======product============> ',product);

      if (!product) {
         return res.status(409).send('product data not found!');
      }

      const result = {at : dayjs().toDate(), product: product};
     
      return res.send(result);

  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }

}











