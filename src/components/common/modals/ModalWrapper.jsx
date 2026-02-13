import React from "react";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

const ModalWrapper = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-2xl",
  maxHeight = "max-h-[90vh]",
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = "",
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <Card
        className={`bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-full ${maxWidth} ${maxHeight} overflow-y-auto ${className}`}
      >
        {title && (
          <CardHeader className="pb-4 border-b border-white/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">{title}</CardTitle>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-1.5 bg-white/10 text-white/60 hover:bg-white/20 hover:text-white rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </CardHeader>
        )}
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </div>
  );
};

export default ModalWrapper;
