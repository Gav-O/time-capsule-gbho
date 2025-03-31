
import React from 'react';
import { format } from "date-fns";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TimeCapsuleMessage } from '@/lib/types';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DateSelectorProps {
  message: TimeCapsuleMessage;
  setMessage: React.Dispatch<React.SetStateAction<TimeCapsuleMessage>>;
  onBack: () => void;
  onNext: () => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ message, setMessage, onBack, onNext }) => {
  // Set minimum date to tomorrow
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  
  // Set maximum date to 5 years from now
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 5);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setMessage({ ...message, deliveryDate: date });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <Card className="time-capsule-card">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-serif">When should we deliver it?</CardTitle>
          <CardDescription>
            Choose the date when you want to receive this message
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <p className="text-lg font-medium mb-2">Select a delivery date:</p>
            <p className="text-sm text-muted-foreground mb-4">Pick any date from tomorrow to 5 years in the future</p>
          </div>
          
          <div className="border rounded-lg p-4 mb-6 w-full max-w-sm mx-auto bg-white">
            <Calendar
              mode="single"
              selected={message.deliveryDate}
              onSelect={handleDateSelect}
              disabled={(date) => date < minDate || date > maxDate}
              initialFocus
              className={cn("mx-auto pointer-events-auto")}
            />
          </div>
          
          {message.deliveryDate && (
            <div className="text-center mb-6 p-4 bg-accent rounded-lg">
              <CalendarIcon className="h-5 w-5 mb-2 mx-auto text-primary" />
              <p className="text-sm font-medium">Your message will be delivered on:</p>
              <p className="text-xl font-semibold">{format(message.deliveryDate, "MMMM d, yyyy")}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button onClick={onNext} disabled={!message.deliveryDate}>
            Preview Message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DateSelector;
