"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ProjectErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Projects Error Boundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="flex w-full justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-background/95 to-secondary/30">
                    <div className="max-w-2xl w-full px-4 sm:px-6 md:px-8">
                        <Card className="border-2 border-destructive/20 bg-destructive/5">
                            <CardHeader className="text-center pb-4">
                                <div className="mx-auto w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                                    <AlertTriangle className="w-6 h-6 text-destructive" />
                                </div>
                                <CardTitle className="text-xl sm:text-2xl text-destructive">
                                    Something went wrong
                                </CardTitle>
                                <CardDescription className="text-sm sm:text-base">
                                    We encountered an error while loading the projects. This might be a temporary issue.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center space-y-4">
                                {process.env.NODE_ENV === 'development' && this.state.error && (
                                    <details className="text-left bg-muted/50 p-4 rounded-lg">
                                        <summary className="cursor-pointer font-medium text-sm mb-2">
                                            Error Details (Development Only)
                                        </summary>
                                        <pre className="text-xs overflow-auto whitespace-pre-wrap text-muted-foreground">
                                            {this.state.error.message}
                                            {this.state.error.stack}
                                        </pre>
                                    </details>
                                )}
                                <div className="flex flex-col xs:flex-row gap-3 justify-center">
                                    <Button 
                                        onClick={() => this.setState({ hasError: false })}
                                        className="flex items-center gap-2"
                                        variant="default"
                                    >
                                        <RefreshCw className="w-4 h-4" />
                                        Try Again
                                    </Button>
                                    <Button 
                                        onClick={() => window.location.reload()}
                                        variant="outline"
                                    >
                                        Reload Page
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export function ProjectErrorFallback({ reset }: { error?: Error; reset?: () => void }) {
    return (
        <div className="flex w-full justify-center py-8 sm:py-12">
            <div className="max-w-md w-full px-4">
                <Card className="border border-destructive/20 bg-destructive/5">
                    <CardHeader className="text-center pb-3">
                        <div className="mx-auto w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center mb-3">
                            <AlertTriangle className="w-5 h-5 text-destructive" />
                        </div>
                        <CardTitle className="text-lg text-destructive">
                            Failed to load projects
                        </CardTitle>
                        <CardDescription className="text-sm">
                            Please try refreshing the page or contact support if the issue persists.
                        </CardDescription>
                    </CardHeader>
                    {reset && (
                        <CardContent className="text-center">
                            <Button onClick={reset} size="sm" className="flex items-center gap-2">
                                <RefreshCw className="w-4 h-4" />
                                Try Again
                            </Button>
                        </CardContent>
                    )}
                </Card>
            </div>
        </div>
    );
}