import mongoose from "mongoose";

export interface ProductRuleInputType {
  name: string;
  code: string;
  product_type: string;
  rule_type: string;
  is_apply_on: string;
  is_apply_on_value: string;
}

export interface ProductRuleDocument extends ProductRuleInputType, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}



const productRuleSchema = new mongoose.Schema(
  { 
    name: {type: String},
    code: {type: String,  index: true, unique: true},
    product_type: {type: String},
    rule_type: {type: String,  index: true},
    is_apply_on: {type: String},
    is_apply_on_value: {type: String},
  }
);

const ProductRuleModel = mongoose.model<ProductRuleDocument>("product-rule", productRuleSchema);


export default ProductRuleModel;
