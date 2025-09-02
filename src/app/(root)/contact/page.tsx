import { ContactForm } from "@/components/common/contact-form";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20 pb-12">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Let&apos;s discuss how I can help transform your data into actionable business insights.
                    </p>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}