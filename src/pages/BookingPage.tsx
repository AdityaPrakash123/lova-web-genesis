
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, Mail } from 'lucide-react';

const timeSlots = [
  "9:00 AM", 
  "10:00 AM", 
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM"
];

const services = [
  "App & Website Development",
  "Automations & Workflows",
  "AI Marketing Bots",
  "Digital Marketing",
  "IT Consulting",
  "Custom Solution"
];

const BookingPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    service: ''
  });
  
  React.useEffect(() => {
    document.title = "Book a Consultation - MARCS DiGITAL Solutions";
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      service: value
    }));
  };
  
  const sendEmail = async () => {
    try {
      // In a real implementation, this would connect to an email sending service
      // like SendGrid, AWS SES, or a custom backend API
      
      // Admin email notification
      console.log('Sending admin notification to: danishaheed48@gmail.com');
      
      // User confirmation email
      console.log('Sending confirmation email to:', formData.email);

      // Email content for admin
      const adminEmailContent = `
        New Consultation Booking:
        Name: ${formData.firstName} ${formData.lastName}
        Business: ${formData.businessName}
        Email: ${formData.email}
        Service: ${formData.service}
        Date: ${date ? format(date, 'PPP') : 'Not selected'}
        Time: ${timeSlot || 'Not selected'}
      `;
      
      // Email content for user
      const userEmailContent = `
        Dear ${formData.firstName},
        
        Thank you for booking a consultation with MARCS DiGITAL Solutions.
        
        Your booking details:
        Service: ${formData.service}
        Date: ${date ? format(date, 'PPP') : 'Not selected'}
        Time: ${timeSlot || 'Not selected'}
        
        We're looking forward to speaking with you!
        
        Best regards,
        The MARCS DiGITAL Solutions Team
      `;

      console.log('Admin email content:', adminEmailContent);
      console.log('User email content:', userEmailContent);
      
      // For demo purposes, we're just logging the emails
      // In production, you would integrate with an email service
      
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call/booking process and email sending
    try {
      // Wait for email send to complete
      const emailSent = await sendEmail();
      
      // Complete the booking process
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        if (emailSent) {
          toast({
            title: "Consultation booked!",
            description: "We've sent you a confirmation email with all the details.",
          });
        } else {
          toast({
            title: "Consultation booked!",
            description: "Your booking is confirmed, but there was an issue sending the email confirmation.",
            variant: "destructive",
          });
        }
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "We couldn't process your booking. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <section className="container-section">
          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary/20 border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-teal"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for scheduling a consultation with MARCS DiGITAL Solutions. We've sent a calendar invitation and confirmation email to your inbox.
              </p>
              
              <div className="space-y-4">
                <p>
                  <strong>Next Steps:</strong><br />
                  Our team will review your information before the meeting and prepare to discuss your specific needs. 
                </p>
                <p>
                  You'll receive a reminder 24 hours before your scheduled consultation.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild className="btn-primary">
                  <a href="/">Return to Home</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="bg-navy-dark py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Book a Consultation</h1>
            <p className="text-xl text-muted-foreground">
              Schedule a free consultation with our experts to discuss how we can help transform your business.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking form */}
      <section className="container-section">
        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary/20 border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Schedule Your Session</h2>
            
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
                    value={formData.firstName}
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="businessName" className="block text-sm font-medium">
                  Business Name
                </label>
                <Input 
                  id="businessName" 
                  name="businessName" 
                  placeholder="Acme Corp" 
                  required 
                  className="bg-navy border-border"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  required 
                  className="bg-navy border-border"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium">
                  Service Interest
                </label>
                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger className="bg-navy border-border">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-navy border-border"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          // Disable weekends and past dates
                          const now = new Date();
                          now.setHours(0, 0, 0, 0);
                          return (
                            date < now ||
                            date.getDay() === 0 ||
                            date.getDay() === 6
                          );
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Time
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-navy border-border"
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {timeSlot ? timeSlot : <span>Pick a time</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-48" align="start">
                      <div className="grid gap-1">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant="ghost"
                            className="justify-start"
                            onClick={() => {
                              setTimeSlot(time);
                            }}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="btn-primary w-full" 
                  disabled={!date || !timeSlot || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Processing...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Book Consultation
                    </>
                  )}
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                By booking a consultation, you agree to our{" "}
                <a href="#" className="text-teal hover:underline">privacy policy</a> and{" "}
                <a href="#" className="text-teal hover:underline">terms of service</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
