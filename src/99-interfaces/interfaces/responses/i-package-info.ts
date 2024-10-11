import { ENineNinePackageType } from '../../enums/package-type.enum';
import { ENineNinePackageWeight } from '../../enums/package-weight.enum';

export interface INineNinePackageInfo {
  package_type: ENineNinePackageType;
  package_weight: ENineNinePackageWeight;
  note?: string;
}
