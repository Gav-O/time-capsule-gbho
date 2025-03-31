
import React from 'react';
import { format } from "date-fns";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TimeCapsuleMessage } from '@/lib/types';
import { ArrowLeft, Send } from 'lucide-react';

interface PreviewMessageProps {
  message: TimeCapsuleMessage;
  onBack: () => void;
  onSubmit: () => void;
}

const PreviewMessage: React.FC<PreviewMessageProps> = ({ message, onBack, onSubmit }) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <Card className="time-capsule-card">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-serif">Preview Your Time Capsule</CardTitle>
          <CardDescription>
            Review your message before sending it to the future
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white rounded-lg border">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">From</h3>
                <p>{message.senderName || 'You'}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">To</h3>
                <p>{message.recipientEmail}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Delivery Date</h3>
                <p>{format(message.deliveryDate, "MMMM d, yyyy")}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Message</h3>
                <div className="mt-2 p-4 bg-accent rounded-lg whitespace-pre-wrap">
                  {message.message}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button onClick={onSubmit}>
            <Send className="mr-2 h-4 w-4" />
            Send to the Future
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PreviewMessage;
