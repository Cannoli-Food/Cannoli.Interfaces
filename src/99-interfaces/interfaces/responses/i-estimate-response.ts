import { INineNinePreview } from "./i-preview";

export interface INineNineEstimateResponse {
  errno: number;
  errmsg: string;
  data: INineNinePreview;
}
