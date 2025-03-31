
export interface TimeCapsuleMessage {
  id?: string;
  message: string;
  deliveryDate: Date;
  recipientEmail?: string;
  senderName?: string;
  createdAt?: Date;
}

export type Step = 'compose' | 'date' | 'preview' | 'success';
