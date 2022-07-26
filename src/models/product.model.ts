import mongoose from "mongoose";

export interface ProductInputType {
  sku: string;
  name: string;
  description: string;
  product_type_code: string;
  regular_price: Number;
  discount_price: Number;
  quantity: Number;
  is_taxable: string;
  is_minimum_quantity: string;
  is_provision: string;
  provision_value: string;
  tax_value: string;
  minimum_quantity_value: string;
}

export interface ProductDocument extends ProductInputType, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}



const productSchema = new mongoose.Schema(
  { 
    name: {type: String},
    sku: {type: String,  index: true, unique: true},
    description: {type: String},
    product_type_code: {type: String, index: true},
    regular_price: {type: Number},
    discount_price: {type: Number},
    quantity: {type: String},
    is_taxable: {type: String},
    is_minimum_quantity: {type: String},
    is_provision:  {type: String},
    provision_value:  {type: String},
    tax_value:  {type: String},
    minimum_quantity_value:  {type: String},
  }
);

const ProductModel = mongoose.model<ProductDocument>("product", productSchema);


export default ProductModel;
