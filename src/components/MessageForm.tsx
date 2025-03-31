
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TimeCapsuleMessage } from '@/lib/types';
import { Dice } from 'lucide-react';
import { messageIdeas } from '@/lib/messageIdeas';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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

  const getRandomMessageIdea = () => {
    const randomIndex = Math.floor(Math.random() * messageIdeas.length);
    setMessage({ ...message, message: messageIdeas[randomIndex] });
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
              <div className="flex justify-between items-center">
                <Label htmlFor="message">Your Message</Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={getRandomMessageIdea} 
                      type="button" 
                      className="h-8 w-8 p-0"
                    >
                      <Dice className="h-4 w-4" />
                      <span className="sr-only">Get a random message idea</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Get a random message idea</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Textarea
                id="message"
                placeholder="Dear future self...."
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
