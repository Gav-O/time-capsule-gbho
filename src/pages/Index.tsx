
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MessageForm from '@/components/MessageForm';
import DateSelector from '@/components/DateSelector';
import PreviewMessage from '@/components/PreviewMessage';
import SuccessScreen from '@/components/SuccessScreen';
import { Step, TimeCapsuleMessage } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';

const initialMessage: TimeCapsuleMessage = {
  message: '',
  deliveryDate: new Date(),
  recipientEmail: '',
  senderName: '',
  createdAt: new Date(),
};

const Index: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('compose');
  const [message, setMessage] = useState<TimeCapsuleMessage>(initialMessage);
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep === 'compose') {
      if (!message.message.trim()) {
        toast({
          title: "Message is required",
          description: "Please write a message to your future self",
          variant: "destructive",
        });
        return;
      }
      if (!message.recipientEmail) {
        toast({
          title: "Email is required",
          description: "Please enter an email address for delivery",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep('date');
    } else if (currentStep === 'date') {
      setCurrentStep('preview');
    }
  };

  const handleBack = () => {
    if (currentStep === 'date') {
      setCurrentStep('compose');
    } else if (currentStep === 'preview') {
      setCurrentStep('date');
    }
  };

  const handleSubmit = () => {
    // In a real implementation, we would send the data to a backend here
    console.log('Submitting time capsule:', message);
    
    // For now, we'll just move to the success step
    setCurrentStep('success');
    
    toast({
      title: "Time Capsule Created!",
      description: "Your message has been scheduled for future delivery.",
    });
  };

  const resetForm = () => {
    setMessage(initialMessage);
    setCurrentStep('compose');
  };

  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        {currentStep === 'compose' && (
          <MessageForm 
            message={message} 
            setMessage={setMessage} 
            onNext={handleNext} 
          />
        )}
        
        {currentStep === 'date' && (
          <DateSelector 
            message={message} 
            setMessage={setMessage} 
            onBack={handleBack} 
            onNext={handleNext} 
          />
        )}
        
        {currentStep === 'preview' && (
          <PreviewMessage 
            message={message} 
            onBack={handleBack} 
            onSubmit={handleSubmit} 
          />
        )}
        
        {currentStep === 'success' && (
          <SuccessScreen 
            message={message} 
            onReset={resetForm} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
