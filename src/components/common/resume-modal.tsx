"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Download, Eye, FileText, ExternalLink } from "lucide-react";

interface ResumeModalProps {
    trigger?: React.ReactNode;
    className?: string;
}

export function ResumeModal({ trigger, className }: ResumeModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Vijay_K_Andem_Resume.pdf";
        link.click();
    };

    const handleExternalView = () => {
        window.open("/resume.pdf", "_blank");
    };

    const defaultTrigger = (
        <Button variant="outline" className={className}>
            <Eye className="h-4 w-4 mr-2" />
            View Resume
        </Button>
    );

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger || defaultTrigger}
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Resume - Vijay K Andem
                    </DialogTitle>
                    <div className="flex gap-2 mt-4">
                        <Button onClick={handleDownload} size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                        </Button>
                        <Button 
                            onClick={handleExternalView} 
                            variant="outline" 
                            size="sm"
                        >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Open in New Tab
                        </Button>
                    </div>
                </DialogHeader>
                
                <div className="flex-1 px-6 pb-6">
                    <div className="relative w-full h-[600px] border rounded-lg overflow-hidden bg-gray-50">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                                    <p className="text-sm text-muted-foreground">Loading resume...</p>
                                </div>
                            </div>
                        )}
                        <iframe
                            src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                            className="w-full h-full border-none"
                            title="Resume Preview"
                            onLoad={() => setIsLoading(false)}
                            onError={() => setIsLoading(false)}
                        />
                    </div>
                    
                    {/* Fallback message if PDF doesn't load */}
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        <p>
                            Having trouble viewing the resume?{" "}
                            <button 
                                onClick={handleDownload}
                                className="text-primary hover:underline"
                            >
                                Download the PDF
                            </button>{" "}
                            or{" "}
                            <button 
                                onClick={handleExternalView}
                                className="text-primary hover:underline"
                            >
                                open in a new tab
                            </button>
                            .
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export function ResumePreviewCard() {
    return (
        <div className="bg-card border rounded-lg p-6">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold mb-2">Professional Resume</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        Download or preview my comprehensive resume showcasing 13+ years of 
                        experience in business analysis and data visualization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <ResumeModal 
                            trigger={
                                <Button variant="default" size="sm">
                                    <Eye className="h-4 w-4 mr-2" />
                                    Preview Resume
                                </Button>
                            }
                        />
                        <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/resume.pdf";
                                link.download = "Vijay_K_Andem_Resume.pdf";
                                link.click();
                            }}
                        >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}