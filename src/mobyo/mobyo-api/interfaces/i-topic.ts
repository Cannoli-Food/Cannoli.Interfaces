
import { IEntity } from '../../../entities/i-entity';
import { factoryId } from '../../../shared/functions/factory-id.function';
import { RegisterIntoTopicDto } from '../dto/register-into-topic.dto';
import { TopicsEnum } from './topics.enum';

export class ITopic extends IEntity {
    // #region Properties (6)

    public callbackUrl: string | null;
    public deviceId: string;
    public deviceName: string;
    public expiresAt: number;
    public tokenFcm: string | null;
    public type: TopicsEnum;

    // #endregion Properties (6)
}

export function factoryTopic(containerId: string, companyId: string, body: RegisterIntoTopicDto): ITopic {
    return {
        companyId,
        containerId,
        createdAt: new Date(),
        deviceId: body.deviceId,
        deviceName: body.deviceName,
        expiresAt: getExpiresDate(),
        id: factoryId(),
        tokenFcm: body.tokenFcm || null,
        type: body.type,
        updatedAt: new Date(),
        callbackUrl: body.callbackUrl || null,
    } as ITopic;
}

export function getExpiresDate() {
    return new Date().getTime() + (1000 * 60 * 60 * 24);
}