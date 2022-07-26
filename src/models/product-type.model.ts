import mongoose from "mongoose";

export interface ProductTypeInputType {
  name: string;
  code: string;
}

export interface ProductTypeDocument extends ProductTypeInputType, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}



const productTypeSchema = new mongoose.Schema(
  { 
    name: {type: String},
    code: {type: String,  index: true, unique: true},
  }
);

const ProductTypeModel = mongoose.model<ProductTypeDocument>("product-type", productTypeSchema);


export default ProductTypeModel;
