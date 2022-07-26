import mongoose from "mongoose";

export interface ProductCartInputType {
  product_sku: string;
  cart_id: string;
  quantity: number;
  tax: number;
}

export interface ProductCartDocument extends ProductCartInputType, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}



const productCartSchema = new mongoose.Schema(
  { 
    product_sku: {type: String},
    cart_id: {type: String},
    quantity: {type: Number},
    tax: {type: Number},
  }
);

const ProductCartModel = mongoose.model<ProductCartDocument>("product-cart", productCartSchema);


export default ProductCartModel;
