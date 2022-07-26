import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductCartModel, {
  ProductCartDocument,
  ProductCartInputType,
} from "../models/product-cart.model";

import { databaseResponseTimeHistogram } from "../utils/metrics";



export async function createProductCart(input: ProductCartInputType) {
  const metricsLabels = {
    operation: "createProductCart",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await ProductCartModel.create(input);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}

export async function findProductCart(
  query: FilterQuery<ProductCartDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findProductCart",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
      __v: false,
      _id: false
  };
    const result = await ProductCartModel.findOne(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function getCartItems(
  query: FilterQuery<ProductCartDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findProductCart",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
      __v: false,
      _id: false
  };
    const result = await ProductCartModel.find(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function getProductsCartByCartId(
  query: FilterQuery<ProductCartDocument>,
  options: QueryOptions = {  lean: true }
) {
  const metricsLabels = {
    operation: "findProductCart",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
        "_id" : 0,
        "product_sku": 1,
        "cart_id": 1,
        "quantity": 1
    };
    const result = await ProductCartModel.find(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}


export async function findAndUpdateProductCart(
  query: FilterQuery<ProductCartDocument>,
  update: UpdateQuery<ProductCartDocument>,
  options: QueryOptions
) {
  return ProductCartModel.findOneAndUpdate(query, update, options);
}

export async function deleteProductCart(query: FilterQuery<ProductCartDocument>) {
  return ProductCartModel.deleteOne(query);
}

