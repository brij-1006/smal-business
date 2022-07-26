import { Request, Response } from "express";
import dayjs from "dayjs";
import logger from "../utils/logger";

import { CreateProductCartInput } from "../schema/product-cart.schema";


import {
  getCartItems
} from "../service/product-cart.service";




export async function getCartItemsHandler(req: Request, res: Response) {
  try {
    const cartId = req.params.cart_id;
    const whereCondition:any = {
      "cart_id":cartId ,
    };

    console.log('whereCondition ==>', whereCondition  );
    const productCart = await getCartItems(whereCondition);
    const result = {at : dayjs().toDate(), items: productCart};
    return res.send(result);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}








