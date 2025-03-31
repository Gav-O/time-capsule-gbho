
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TimeCapsuleMessage } from '@/lib/types';

interface MessageFormProps {
  message: TimeCapsuleMessage;
  setMessage: React.Dispatch<React.SetStateAction<TimeCapsuleMessage>>;
  onNext: () => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ message, setMessage, onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <Card className="time-capsule-card">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-serif">Write to your future self</CardTitle>
          <CardDescription>
            Compose a message that will be delivered to you on a future date
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="senderName">Your Name</Label>
              <Input
                id="senderName"
                placeholder="Your name"
                value={message.senderName || ''}
                onChange={(e) => setMessage({ ...message, senderName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recipientEmail">Email Address</Label>
              <Input
                id="recipientEmail"
                type="email"
                placeholder="Where should we deliver your message?"
                value={message.recipientEmail || ''}
                onChange={(e) => setMessage({ ...message, recipientEmail: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                placeholder="Write a message to your future self..."
                rows={8}
                value={message.message}
                onChange={(e) => setMessage({ ...message, message: e.target.value })}
                required
                className="resize-none"
              />
            </div>
            <Button type="submit" className="w-full">Continue to select date</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageForm;
