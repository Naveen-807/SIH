import { Shield, CheckCircle, Clock, AlertTriangle, XCircle } from "lucide-react";

export type KYCStatus = 'not_started' | 'in_progress' | 'under_review' | 'verified' | 'rejected';

interface KYCBadgeProps {
  status: KYCStatus;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function KYCBadge({ status, size = 'md', showText = true }: KYCBadgeProps) {
  const getStatusConfig = (status: KYCStatus) => {
    switch (status) {
      case 'verified':
        return {
          icon: CheckCircle,
          text: 'Verified',
          bgColor: 'bg-green-100 dark:bg-green-900',
          textColor: 'text-green-800 dark:text-green-200',
          borderColor: 'border-green-200 dark:border-green-800'
        };
      case 'under_review':
        return {
          icon: Clock,
          text: 'Under Review',
          bgColor: 'bg-blue-100 dark:bg-blue-900',
          textColor: 'text-blue-800 dark:text-blue-200',
          borderColor: 'border-blue-200 dark:border-blue-800'
        };
      case 'in_progress':
        return {
          icon: Clock,
          text: 'In Progress',
          bgColor: 'bg-yellow-100 dark:bg-yellow-900',
          textColor: 'text-yellow-800 dark:text-yellow-200',
          borderColor: 'border-yellow-200 dark:border-yellow-800'
        };
      case 'rejected':
        return {
          icon: XCircle,
          text: 'Rejected',
          bgColor: 'bg-red-100 dark:bg-red-900',
          textColor: 'text-red-800 dark:text-red-200',
          borderColor: 'border-red-200 dark:border-red-800'
        };
      default:
        return {
          icon: AlertTriangle,
          text: 'Not Verified',
          bgColor: 'bg-gray-100 dark:bg-gray-900',
          textColor: 'text-gray-800 dark:text-gray-200',
          borderColor: 'border-gray-200 dark:border-gray-800'
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <div className={`
      inline-flex items-center space-x-1 rounded-full border font-medium
      ${config.bgColor} ${config.textColor} ${config.borderColor} ${sizeClasses[size]}
    `}>
      <Icon className={iconSizes[size]} />
      {showText && <span>{config.text}</span>}
    </div>
  );
}

interface KYCTrustIndicatorProps {
  status: KYCStatus;
  ownerName: string;
  compact?: boolean;
}

export function KYCTrustIndicator({ status, ownerName, compact = false }: KYCTrustIndicatorProps) {
  if (status !== 'verified') {
    return null;
  }

  return (
    <div className={`
      flex items-center space-x-2 p-2 bg-green-50 dark:bg-green-950/20 
      border border-green-200 dark:border-green-800 rounded-lg
      ${compact ? 'text-xs' : 'text-sm'}
    `}>
      <Shield className={`text-green-600 ${compact ? 'h-3 w-3' : 'h-4 w-4'}`} />
      <div>
        <p className="font-medium text-green-800 dark:text-green-200">
          Verified Farmer
        </p>
        {!compact && (
          <p className="text-green-700 dark:text-green-300">
            {ownerName}&apos;s identity is verified
          </p>
        )}
      </div>
    </div>
  );
}

interface KYCStatusCardProps {
  status: KYCStatus;
  lastUpdated?: string;
  onStartVerification?: () => void;
}

export function KYCStatusCard({ status, lastUpdated, onStartVerification }: KYCStatusCardProps) {
  const getStatusMessage = () => {
    switch (status) {
      case 'verified':
        return {
          title: 'Identity Verified ✅',
          message: 'Your identity has been successfully verified. You now have access to all premium features.',
          action: null
        };
      case 'under_review':
        return {
          title: 'Verification Under Review 🔍',
          message: 'Our team is reviewing your documents. This typically takes 2-4 hours during business hours.',
          action: null
        };
      case 'in_progress':
        return {
          title: 'Verification In Progress ⏳',
          message: 'Complete your KYC verification to build trust and access premium features.',
          action: { text: 'Continue Verification', onClick: onStartVerification }
        };
      case 'rejected':
        return {
          title: 'Verification Rejected ❌',
          message: 'Your verification was rejected. Please check your documents and try again.',
          action: { text: 'Retry Verification', onClick: onStartVerification }
        };
      default:
        return {
          title: 'Verify Your Identity 🛡️',
          message: 'Complete KYC verification to build trust with other farmers and access all features.',
          action: { text: 'Start Verification', onClick: onStartVerification }
        };
    }
  };

  const statusInfo = getStatusMessage();
  const config = {
    verified: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20',
    under_review: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20',
    in_progress: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20',
    rejected: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20',
    not_started: 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/20'
  };

  return (
    <div className={`p-4 border rounded-lg ${config[status]}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold mb-2">{statusInfo.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">
            {statusInfo.message}
          </p>
          {lastUpdated && (
            <p className="text-xs text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
        <KYCBadge status={status} />
      </div>
      
      {statusInfo.action && (
        <button
          onClick={statusInfo.action.onClick}
          className="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {statusInfo.action.text}
        </button>
      )}
    </div>
  );
}