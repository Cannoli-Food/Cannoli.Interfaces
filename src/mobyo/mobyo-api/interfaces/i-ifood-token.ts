export interface IIFoodToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}

export interface IIFoodV1Token {
    accessToken: string;
    type: string;
    refreshToken: string;
    expiresIn: number;
}

export interface IIFoodV2Token {
    accessToken: string;
    type: string;
    expiresIn: number;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}