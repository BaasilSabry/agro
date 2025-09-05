"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-300 border-t-green-600`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/CORWNFILEDARGO.png" 
            alt="CROWNFIELD Logo" 
            className="w-32 h-auto mx-auto mb-4"
          />
        </div>
        
        {/* Spinner */}
        <LoadingSpinner size="lg" className="mb-4" />
        
        {/* Text */}
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading CROWNFIELD</h2>
        <p className="text-gray-500">Please wait while we prepare your experience...</p>
      </div>
    </div>
  )
}
