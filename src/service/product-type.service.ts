import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductTypeModel, {
  ProductTypeDocument,
  ProductTypeInputType,
} from "../models/product-type.model";

import { databaseResponseTimeHistogram } from "../utils/metrics";
import fetch from 'node-fetch';



export async function createProductType(input: ProductTypeInputType) {
  const metricsLabels = {
    operation: "createProductType",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await ProductTypeModel.create(input);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}

export async function findProductType(
  query: FilterQuery<ProductTypeDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findProductType",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
      __v: false,
      _id: false
  };
    const result = await ProductTypeModel.findOne(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function findProductTypeByCode(
  query: FilterQuery<ProductTypeDocument>,
  options: QueryOptions = {  lean: true }
) {
  const metricsLabels = {
    operation: "findProductType",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
        "_id" : 0,
        "name": 1,
        "code": 1
    };
    const result = await ProductTypeModel.findOne(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}


export async function findAndUpdateProductType(
  query: FilterQuery<ProductTypeDocument>,
  update: UpdateQuery<ProductTypeDocument>,
  options: QueryOptions
) {
  return ProductTypeModel.findOneAndUpdate(query, update, options);
}

export async function deleteProductType(query: FilterQuery<ProductTypeDocument>) {
  return ProductTypeModel.deleteOne(query);
}

