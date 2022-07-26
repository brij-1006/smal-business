import mongoose from "mongoose";

export interface PCartInputType {
  at: Date,
  customer_id: string,
  status: number,
}

export interface PDiscountCartInput {
  is_provision: string,
  is_provision_val: number,
}


export interface PCartDocument extends PCartInputType, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}



const pCartSchema = new mongoose.Schema(
  { 
    at: {type: Date},
    customer_id: {type: String},
    status:  {type: Number},
  }
);

const PCartModel = mongoose.model<PCartDocument>("pcart", pCartSchema);


export default PCartModel;
