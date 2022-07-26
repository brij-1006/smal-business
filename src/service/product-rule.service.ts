import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductRuleModel, {
  ProductRuleDocument,
  ProductRuleInputType,
} from "../models/product-rule.model";

import { databaseResponseTimeHistogram } from "../utils/metrics";
import fetch from 'node-fetch';



export async function createProductRule(input: ProductRuleInputType) {
  const metricsLabels = {
    operation: "createProductRule",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await ProductRuleModel.create(input);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}

export async function findProductRule(
  query: FilterQuery<ProductRuleDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findProductRule",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
      __v: false,
      _id: false
  };
    const result = await ProductRuleModel.findOne(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function findProductRuleByCode(
  query: FilterQuery<ProductRuleDocument>,
  options: QueryOptions = {  lean: true }
) {
  const metricsLabels = {
    operation: "findProductRule",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
        "_id" : 0,
        "name": 1,
        "code": 1
    };
    const result = await ProductRuleModel.findOne(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function findAndUpdateProductRule(
  query: FilterQuery<ProductRuleDocument>,
  update: UpdateQuery<ProductRuleDocument>,
  options: QueryOptions
) {
  return ProductRuleModel.findOneAndUpdate(query, update, options);
}

export async function deleteProductRule(query: FilterQuery<ProductRuleDocument>) {
  return ProductRuleModel.deleteOne(query);
}

export async function findRuleByCondition(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = {  lean: true }
) {
  const metricsLabels = {
    operation: "findRuleByCondition",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
        "_id" : 0,
        "__v" : 0,
    };
    const result = await ProductRuleModel.findOne(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

