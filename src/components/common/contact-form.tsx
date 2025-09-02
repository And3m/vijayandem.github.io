"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { appConfig } from "@/configs/config";

interface FormData {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
    projectType: string;
}

interface FormErrors {
    [key: string]: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        projectType: ""
    });
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }
        
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        try {
            // Create mailto link with form data
            const subject = `Portfolio Contact: ${formData.subject}`;
            const body = `Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.projectType ? `Project Type: ${formData.projectType}` : ''}

Message:
${formData.message}`;
            
            const mailtoLink = `mailto:${appConfig.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
            
            setSubmitStatus('success');
            setFormData({
                name: "",
                email: "",
                company: "",
                subject: "",
                message: "",
                projectType: ""
            });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-muted-foreground mb-6">
                            Ready to discuss your next data analytics project or business intelligence initiative? 
                            I&apos;d love to hear from you.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-primary/10">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-muted-foreground">{appConfig.profile.email}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-primary/10">
                                <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-muted-foreground">{appConfig.profile.location}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold mb-3">Areas of Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Power BI", "Tableau", "Data Analytics", "Business Intelligence", "AI Integration"].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {submitStatus === 'success' && (
                            <div className="mb-4 p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                                <span className="text-green-700 dark:text-green-300">Message sent successfully!</span>
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mb-4 p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                                <span className="text-red-700 dark:text-red-300">Failed to send message. Please try again.</span>
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground ${
                                            errors.name ? 'border-destructive' : 'border-border'
                                        }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground ${
                                            errors.email ? 'border-destructive' : 'border-border'
                                        }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium mb-1">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
                                        placeholder="Your company"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium mb-1">
                                        Project Type
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
                                    >
                                        <option value="">Select project type</option>
                                        <option value="business-analysis">Business Analysis</option>
                                        <option value="data-visualization">Data Visualization</option>
                                        <option value="dashboard-development">Dashboard Development</option>
                                        <option value="ai-integration">AI Integration</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground ${
                                        errors.subject ? 'border-destructive' : 'border-border'
                                    }`}
                                    placeholder="Brief subject of your inquiry"
                                />
                                {errors.subject && (
                                    <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                                )}
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none bg-background text-foreground ${
                                        errors.message ? 'border-destructive' : 'border-border'
                                    }`}
                                    placeholder="Tell me about your project or inquiry..."
                                />
                                {errors.message && (
                                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                                )}
                            </div>
                            
                            <Button 
                                type="submit" 
                                className="w-full" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send className="h-4 w-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}