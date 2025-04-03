import { IResumeCoordsCoordinates } from './i-resume-coords-coordinates';
export interface IResumeCoords {
    companyId: string;
    containerId: string;
    coords: IResumeCoordsCoordinates[];
    createdAt: Date;
    id: string;
    updatedAt: Date;
}
