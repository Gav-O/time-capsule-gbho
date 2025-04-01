
import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-8 px-6 md:px-8 flex justify-center items-center", className)}>
      <div className="flex items-center gap-3">
        <Clock className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-semibold">
            <span className="text-gradient">Time Capsule</span>
          </h1>
          <p className="text-sm text-muted-foreground">by Gavriel Oshman</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
