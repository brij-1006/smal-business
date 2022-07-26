import { Request, Response } from "express";
import dayjs from "dayjs";
import logger from "../utils/logger";

import { CreatePCartAddInput } from "../schema/pcart-add.schema";
import { CreatePDiscountCartInput } from "../schema/pdiscount-cart.schema";

import {
  createPCart,
  isCartActive,
  getProductsCartById,
} from "../service/pcart.service";


import {
  createProductCart,
  getCartItems
} from "../service/product-cart.service";


import {
  findRuleByCondition
} from "../service/product-rule.service";


import {
  findProductByCondition
} from "../service/product.service";


export async function createPCartHandler(
  req: Request<{}, {}, CreatePCartAddInput["body"]>,
  res: Response
) {
  try {
    const customerId = req.params.customerId;
    const data = { at: dayjs().toDate(), customer_id: customerId, status: 0 };

    const isActive = await isCartActive(customerId);

    console.log('isActive', isActive);
    var pCart;

    if (isActive == 0) {
      pCart = await createPCart(data);
    } else {
      pCart = await getProductsCartById({ customer_id: customerId, status: 0 });
    }


    const cartId = pCart._id;

    console.log('cartId     =====>   ', cartId);

    const whereMinQtyCondition = {
      "code" : "min-qty",
      "is_apply_on" : "yes"
    };

    const minQtyrule:any = await findRuleByCondition(whereMinQtyCondition);
    if(minQtyrule.is_apply_on_value > req.body.quantity1) {
      return res.status(422).send({'error':'Min qty rule halt'});
    }

    const whereCondition = {
      "sku":req.body.product_sku ,
    };

    const product = await findProductByCondition(whereCondition);

   


    var tax;

    if(product.is_taxable == 'standard' && product.discount_price) {
      tax = product.discount_price*0.05; // 5 % tax
    } else if(product.is_taxable == 'custom') {

      const whereRuleCondition = {
        "code" : "custom",
        "is_apply_on" : "yes"
      };
      const rule:any = await findRuleByCondition(whereRuleCondition);

      if(rule.is_apply_on_value && product.discount_price) {
        tax = parseFloat((rule.is_apply_on_value*product.discount_price)/100); // custome tax calculation
        tax = parseFloat((tax).toFixed(2));
      }
     

    }

   

    let productCart = { product_sku: req.body.product_sku, cart_id: cartId, quantity: req.body.quantity,tax:tax};
    const productCartItems = await createProductCart(productCart);


    return res.send(productCartItems);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}



export async function getPCartDiscountHandler(
  req: Request<{}, {}, CreatePDiscountCartInput["body"]>,
  res: Response
) {
  try {
    
    const cartId = req.body.cart_id ;
    const isProvision = req.body.is_provision ;
    const isProvisionVal = req.body.is_provision_val ;

    var addon_amount ;

    if (cartId && isProvision == 'yes' && isProvisionVal == 'standard') {
      addon_amount = 5;
    } else if(cartId && isProvision == 'yes' && isProvisionVal == 'premium') {
      addon_amount = 20;
    }

    const data = {
      "addon_provision_amt":addon_amount ,
      "cart_id":cartId 
    };
    
   return res.send(data);

  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}








