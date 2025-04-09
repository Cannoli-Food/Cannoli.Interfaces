import { CannoliETopics } from '../../cannoli';
import { INotify } from '../interfaces';

export class NotifyEntity implements INotify {
  active?: boolean = true;
  companyId: string = '';
  containerId: string = '';
  createdAt: number | Date = new Date();
  data: any = {};
  eventId: string;
  id: string = '';
  notified: boolean = false;
  notifiedAt: number | null = 0;
  topic: CannoliETopics = CannoliETopics.orderStatusChanged;
  topicId: string;
  updatedAt: number | Date = 0;
  version?: string;

  constructor(data?: Partial<NotifyEntity>) {
    if (data) {
      Object.keys(data).forEach((key) => {
        if (key in this) {
          (this as any)[key] = (data as any)[key];
        }
      });
    }
  }
}
