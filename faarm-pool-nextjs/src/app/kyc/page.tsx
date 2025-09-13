"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Shield,
  Upload,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  CreditCard,
  ArrowLeft,
  Camera
} from "lucide-react";

// Header Component
function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="text-3xl">🌾</div>
          <div>
            <h1 className="text-xl font-bold text-primary">Faarm Pool</h1>
            <p className="text-xs text-muted-foreground">KYC Verification</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
          <Link href="/marketplace" className="text-sm hover:text-primary transition-colors">Marketplace</Link>
          <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/kyc" className="text-sm text-primary font-medium">KYC Verification</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn-ripple"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

// KYC Status type
// Removed unused type definition

// Document type
interface DocumentType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  required: boolean;
  uploaded: boolean;
  status: 'pending' | 'verified' | 'rejected';
}

// KYC Step Indicator
function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    { step: 1, label: "Introduction", icon: "ℹ️" },
    { step: 2, label: "Documents", icon: "📄" },
    { step: 3, label: "Upload", icon: "📤" },
    { step: 4, label: "Review", icon: "👀" },
    { step: 5, label: "Complete", icon: "✅" }
  ];

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-8 overflow-x-auto">
      {steps.map((step, index) => (
        <div key={step.step} className="flex items-center flex-shrink-0">
          <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-colors ${
            currentStep >= step.step 
              ? "bg-primary text-primary-foreground border-primary" 
              : "bg-background border-muted-foreground text-muted-foreground"
          }`}>
            <span className="text-xs md:text-sm">{step.icon}</span>
          </div>
          <span className={`ml-1 md:ml-2 text-xs md:text-sm font-medium hidden md:block ${
            currentStep >= step.step ? "text-primary" : "text-muted-foreground"
          }`}>
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <div className={`mx-2 md:mx-4 h-0.5 w-4 md:w-8 ${
              currentStep > step.step ? "bg-primary" : "bg-muted"
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

// KYC Introduction Step
function IntroductionStep({ onNext }: { onNext: () => void }) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="text-6xl mb-4">🛡️</div>
        <CardTitle className="text-2xl">KYC Verification</CardTitle>
        <CardDescription>
          Verify your identity to build trust and access premium features
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              Why Verify?
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Build trust with other farmers</li>
              <li>• Access high-value equipment</li>
              <li>• Higher booking priority</li>
              <li>• Secure transactions</li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              What You Need
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Aadhaar Card (required)</li>
              <li>• PAN Card (optional)</li>
              <li>• Farmer ID/Kisan Card</li>
              <li>• Clear photos/scans</li>
            </ul>
          </Card>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
            🔒 Your Data is Safe
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            All documents are encrypted and securely stored. We follow strict privacy guidelines 
            and never share your personal information without consent.
          </p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
          <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
            ⚡ Quick Process
          </h4>
          <p className="text-sm text-green-700 dark:text-green-300">
            Verification typically takes 2-4 hours during business hours. 
            You&apos;ll receive instant notification once approved.
          </p>
        </div>

        <Button onClick={onNext} className="w-full btn-ripple" size="lg">
          Start Verification Process
        </Button>
      </CardContent>
    </Card>
  );
}

// Document Requirements Step
function DocumentRequirementsStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const documents: DocumentType[] = [
    {
      id: 'aadhaar',
      name: 'Aadhaar Card',
      description: 'Government-issued unique identity document',
      icon: <User className="h-6 w-6" />,
      required: true,
      uploaded: false,
      status: 'pending'
    },
    {
      id: 'pan',
      name: 'PAN Card',
      description: 'Permanent Account Number for tax identification',
      icon: <CreditCard className="h-6 w-6" />,
      required: false,
      uploaded: false,
      status: 'pending'
    },
    {
      id: 'farmer_id',
      name: 'Farmer ID / Kisan Credit Card',
      description: 'Proof of farming profession and land ownership',
      icon: <FileText className="h-6 w-6" />,
      required: false,
      uploaded: false,
      status: 'pending'
    }
  ];

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-6 w-6" />
          <span>Required Documents</span>
        </CardTitle>
        <CardDescription>
          Prepare the following documents for verification
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="p-4">
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${
                  doc.required 
                    ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400" 
                    : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                }`}>
                  {doc.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{doc.name}</h4>
                    {doc.required && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {doc.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
            📷 Photo Guidelines
          </h4>
          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• Take clear, well-lit photos</li>
            <li>• Ensure all text is readable</li>
            <li>• Avoid glare and shadows</li>
            <li>• Include all four corners of the document</li>
            <li>• Files should be under 5MB each</li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" onClick={onBack} className="flex-1">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button onClick={onNext} className="flex-1 btn-ripple">
            Continue to Upload
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Document Upload Step
function DocumentUploadStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, File | null>>({
    aadhaar: null,
    pan: null,
    farmer_id: null
  });

  const handleFileUpload = (docType: string, file: File | null) => {
    setUploadedDocs(prev => ({ ...prev, [docType]: file }));
  };

  const documents = [
    { id: 'aadhaar', name: 'Aadhaar Card', required: true },
    { id: 'pan', name: 'PAN Card', required: false },
    { id: 'farmer_id', name: 'Farmer ID / Kisan Credit Card', required: false }
  ];

  const canProceed = uploadedDocs.aadhaar !== null; // At least Aadhaar is required

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-6 w-6" />
          <span>Upload Documents</span>
        </CardTitle>
        <CardDescription>
          Upload clear photos or scans of your documents
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{doc.name}</h4>
                  {doc.required && (
                    <span className="text-xs text-red-600">Required</span>
                  )}
                </div>
                {uploadedDocs[doc.id] && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
              </div>
              
              <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                {uploadedDocs[doc.id] ? (
                  <div className="space-y-2">
                    <FileText className="h-8 w-8 mx-auto text-green-600" />
                    <p className="text-sm font-medium">{uploadedDocs[doc.id]?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {((uploadedDocs[doc.id]?.size || 0) / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleFileUpload(doc.id, null)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Camera className="h-8 w-8 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Click to upload {doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        JPG, PNG or PDF up to 5MB
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size <= 5 * 1024 * 1024) {
                          handleFileUpload(doc.id, file);
                        } else if (file) {
                          alert('File size must be under 5MB');
                        }
                      }}
                      className="hidden"
                      id={`upload-${doc.id}`}
                    />
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => document.getElementById(`upload-${doc.id}`)?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}

        <div className="flex space-x-3">
          <Button variant="outline" onClick={onBack} className="flex-1">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button 
            onClick={onNext} 
            className="flex-1 btn-ripple"
            disabled={!canProceed}
          >
            Submit for Review
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Review Step
function ReviewStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertCircle className="h-6 w-6" />
          <span>Review & Submit</span>
        </CardTitle>
        <CardDescription>
          Please review your information before submitting
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Card className="p-4">
            <h4 className="font-semibold mb-3">Documents Uploaded</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Aadhaar Card</span>
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">PAN Card</span>
                <span className="text-xs text-muted-foreground">Not uploaded</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Farmer ID</span>
                <span className="text-xs text-muted-foreground">Not uploaded</span>
              </div>
            </div>
          </Card>

          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
              📋 What Happens Next?
            </h4>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Your documents will be reviewed by our team</li>
              <li>• Verification typically takes 2-4 hours</li>
              <li>• You&apos;ll receive an SMS and app notification</li>
              <li>• You can track status in your dashboard</li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" onClick={onBack} className="flex-1" disabled={isSubmitting}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button 
            onClick={handleSubmit} 
            className="flex-1 btn-ripple"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit for Verification"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Completion Step
function CompletionStep() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="text-6xl mb-4">✅</div>
        <CardTitle className="text-2xl text-green-600">Verification Submitted!</CardTitle>
        <CardDescription>
          Your documents have been successfully submitted for review
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">Reference ID</p>
          <p className="text-xl font-bold text-primary">KYC{Date.now().toString().slice(-6)}</p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
          <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
            🎉 What&apos;s Next?
          </h4>
          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Your verification is under review</li>
            <li>• You&apos;ll receive updates via SMS and notification</li>
            <li>• Verification typically completes in 2-4 hours</li>
            <li>• Once verified, you&apos;ll get the trust badge</li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <Link href="/dashboard" className="flex-1">
            <Button variant="outline" className="w-full">
              View Dashboard
            </Button>
          </Link>
          <Link href="/marketplace" className="flex-1">
            <Button className="w-full btn-ripple">
              Browse Equipment
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// Main KYC Page Component
export default function KYCPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-teal-50/50 dark:from-green-950/20 dark:to-teal-950/20">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <StepIndicator currentStep={currentStep} />

            {currentStep === 1 && (
              <IntroductionStep onNext={nextStep} />
            )}
            
            {currentStep === 2 && (
              <DocumentRequirementsStep onNext={nextStep} onBack={prevStep} />
            )}
            
            {currentStep === 3 && (
              <DocumentUploadStep onNext={nextStep} onBack={prevStep} />
            )}
            
            {currentStep === 4 && (
              <ReviewStep onNext={nextStep} onBack={prevStep} />
            )}
            
            {currentStep === 5 && (
              <CompletionStep />
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}