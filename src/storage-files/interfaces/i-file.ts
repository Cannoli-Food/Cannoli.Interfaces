import { EMimeTypeFile } from "../enums";
import { ETypeFile } from "../enums/type-file.enum";

export interface IFile {
  mimeType: EMimeTypeFile;
  icon: string;
  lastModified: Date;
  name: string;
  path: string;
  size: number;
  type: ETypeFile;
  url: string;
}