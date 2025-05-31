
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzzrwqyv");
  
  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-secondary/20 border border-border rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
        <p className="text-muted-foreground">We've received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary/20 border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <Input 
              id="firstName" 
              name="firstName" 
              placeholder="John" 
              required 
              className="bg-navy border-border"
            />
            <ValidationError 
              prefix="First Name" 
              field="firstName"
              errors={state.errors}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <Input 
              id="lastName" 
              name="lastName" 
              placeholder="Doe" 
              required 
              className="bg-navy border-border"
            />
            <ValidationError 
              prefix="Last Name" 
              field="lastName"
              errors={state.errors}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <Input 
            id="email" 
            type="email" 
            name="email" 
            placeholder="john.doe@example.com" 
            required 
            className="bg-navy border-border"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium">
            Service of Interest
          </label>
          <Select name="service" required>
            <SelectTrigger className="bg-navy border-border">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="mobile-development">Mobile Development</SelectItem>
              <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
              <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
              <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
              <SelectItem value="e-commerce-solutions">E-commerce Solutions</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <ValidationError 
            prefix="Service" 
            field="service"
            errors={state.errors}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Tell us about your project or inquiry..." 
            rows={5} 
            required 
            className="bg-navy border-border"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={state.submitting} 
          className="btn-primary w-full"
        >
          {state.submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
