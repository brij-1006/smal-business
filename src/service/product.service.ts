import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, {
  ProductDocument,
  ProductInputType,
} from "../models/product.model";

import { databaseResponseTimeHistogram } from "../utils/metrics";
import fetch from 'node-fetch';



export async function createProduct(input: ProductInputType) {
  const metricsLabels = {
    operation: "createProduct",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await ProductModel.create(input);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}

export async function getProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "getProduct",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
      __v: false,
      _id: false
  };
    const result = await ProductModel.find(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function findProductByCondition(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = {  lean: true }
) {
  const metricsLabels = {
    operation: "findProductByCondition",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
        "_id" : 0,
        "__v" : 0,
    };
    const result = await ProductModel.findOne(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}


export async function findAndUpdateProduct(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions
) {
  return ProductModel.findOneAndUpdate(query, update, options);
}

export async function deleteProduct(query: FilterQuery<ProductDocument>) {
  return ProductModel.deleteOne(query);
}


