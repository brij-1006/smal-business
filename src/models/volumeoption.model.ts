import mongoose from "mongoose";

export interface VolumeoptionInput {
  strikeprice: number;
  otype: string;
  ltp: number;
  cvalue: number;
  oi: number;
  volume: number;
  time: string;
  at: Date;
}

export interface VolumeoptionDocument extends VolumeoptionInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
 
}

const volumeoptionSchema = new mongoose.Schema(
  {
    strikeprice: { type: Number, required: true},
    otype: { type: Number, required: true },
    ltp: { type: Number, required: true },
    cvalue: { type: Number, required: true },
    oi: { type: Number, required: true },
    volume: { type: Number, required: true },
    time: { type: String, required: true },
    at: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);



const VolumeoptionModel = mongoose.model<VolumeoptionDocument>("Volumeoption", volumeoptionSchema);

export default VolumeoptionModel;
