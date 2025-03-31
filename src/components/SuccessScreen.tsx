
import React from 'react';
import { format } from "date-fns";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TimeCapsuleMessage } from '@/lib/types';
import { Check } from 'lucide-react';

interface SuccessScreenProps {
  message: TimeCapsuleMessage;
  onReset: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ message, onReset }) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <Card className="time-capsule-card">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-serif">Time Capsule Created!</CardTitle>
          <CardDescription>
            Your message has been scheduled for future delivery
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="p-6 bg-accent/50 rounded-lg">
            <p className="mb-2 text-sm text-muted-foreground">Your message will be delivered to:</p>
            <p className="font-medium">{message.recipientEmail}</p>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">On this date:</p>
            <p className="text-xl font-medium">{format(message.deliveryDate, "MMMM d, yyyy")}</p>
          </div>
          <div>
            <p className="text-muted-foreground">
              Don't forget to check your email on the delivery date!
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={onReset}>
            Create Another Time Capsule
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SuccessScreen;
