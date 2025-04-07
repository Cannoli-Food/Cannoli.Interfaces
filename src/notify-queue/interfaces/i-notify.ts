import { CannoliETopics } from "../../cannoli";

export interface INotify {
  active?: boolean;
  companyId: string;
  containerId: string;
  createdAt: Date | number;
  data: any;
  eventId: string;
  id: string;
  notified: boolean;
  notifiedAt: number | null;
  topic: CannoliETopics;
  topicId?: string;
  updatedAt: Date | number;
  version?: string;
}
