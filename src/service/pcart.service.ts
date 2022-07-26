import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";


import PCartModel, {
  PCartDocument,
  PCartInputType,
} from "../models/pcart.model";

import { databaseResponseTimeHistogram } from "../utils/metrics";



export async function createPCart(input: PCartInputType) {
  const metricsLabels = {
    operation: "createPCart",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    
    const result = await PCartModel.create(input);
    console.log('result of function createPCart ', result);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}

export async function findPCart(
  query: FilterQuery<PCartDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findPCart",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
      __v: false,
      _id: false
  };
    const result = await PCartModel.findOne(query, projection, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function getProductsCartById(
  query: FilterQuery<PCartDocument>,
  options: QueryOptions = {  lean: true }
) {
  const metricsLabels = {
    operation: "findPCart",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
   
    let projection = { 
        "__v" : 0
    };
    const result = await PCartModel.findOne(query, projection, options);
   
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}


export async function isCartActive(customerId : string) {
  const metricsLabels = {
    operation: "isCartActive",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await PCartModel.countDocuments({customer_id: customerId, "status" : 0});
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}



export async function findAndUpdatePCart(
  query: FilterQuery<PCartDocument>,
  update: UpdateQuery<PCartDocument>,
  options: QueryOptions
) {
  return PCartModel.findOneAndUpdate(query, update, options);
}

export async function deletePCart(query: FilterQuery<PCartDocument>) {
  return PCartModel.deleteOne(query);
}

