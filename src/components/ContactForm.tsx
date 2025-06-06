
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzzrwqyv");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create the form data with additional fields for Formspree
    const submitData = new FormData(e.currentTarget);
    
    // Add customer confirmation email details
    submitData.append('_autoresponse', `Hi ${formData.firstName},

Thank you for reaching out to MARCS Digital Solutions. We're eager to learn more about your project and discuss how our team can help.

If you haven't booked a meeting yet, please choose a convenient time here: ${window.location.origin}/book

Looking forward to speaking with you!

Best regards,
MARCS Digital Solutions`);
    
    // Add business notification email
    submitData.append('_cc', 'info@marcsdigitalsolutions.com');
    submitData.append('_subject', 'New Contact Form Submission from MARCS Digital Solutions Website');
    
    // Submit the form
    await handleSubmit(submitData);
  };

  // Redirect to booking page after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        navigate('/book');
      }, 2000); // Wait 2 seconds to show success message before redirecting

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, navigate]);
  
  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-secondary/20 border border-border rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
        <p className="text-muted-foreground">We've received your message and will get back to you soon. You should also receive a confirmation email shortly.</p>
        <p className="text-sm text-muted-foreground mt-4">Redirecting you to book a consultation...</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary/20 border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      
      <form onSubmit={onSubmit} className="space-y-6">
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
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
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
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
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
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
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
          <Select 
            name="service" 
            required
            onValueChange={(value) => handleInputChange('service', value)}
          >
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
              <SelectItem value="data-migration">Data Migration</SelectItem>
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
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
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
