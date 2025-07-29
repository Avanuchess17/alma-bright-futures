import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const ImageEditor = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
        setEditedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const editOutfit = async () => {
    if (!originalImage) {
      toast.error('Please upload an image first');
      return;
    }

    setIsProcessing(true);
    try {
      // Create a canvas to work with the image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = async () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        
        // For now, let's create a simple overlay effect
        // In a real implementation, you'd use AI models here
        if (ctx) {
          // Add a professional blazer overlay (simplified version)
          ctx.fillStyle = 'rgba(52, 73, 94, 0.8)'; // Dark blue blazer color
          ctx.fillRect(0, img.height * 0.4, img.width, img.height * 0.6);
          
          // Add collar area
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // White shirt
          ctx.fillRect(img.width * 0.3, img.height * 0.4, img.width * 0.4, img.height * 0.2);
        }
        
        const editedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
        setEditedImage(editedDataUrl);
        toast.success('Outfit changed! This is a simplified version - for better results, use professional image editing tools.');
      };
      
      img.src = originalImage;
    } catch (error) {
      console.error('Error editing image:', error);
      toast.error('Failed to edit image');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!editedImage) return;
    
    const link = document.createElement('a');
    link.download = 'professional-photo.jpg';
    link.href = editedImage;
    link.click();
  };

  const useAsFounderImage = async () => {
    if (!editedImage) return;
    
    // Convert data URL to blob and save as founder image
    const response = await fetch(editedImage);
    const blob = await response.blob();
    
    // For demonstration, we'll show success message
    toast.success('Image set as founder photo! (In a real app, this would update the about section)');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Professional Photo Editor</h2>
        <p className="text-muted-foreground mb-6">
          Upload your photo and we'll help you change your outfit to a professional business look while keeping your face exactly the same.
        </p>
        
        <div className="space-y-4">
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              <Upload className="w-4 h-4 mr-2" />
              Upload Your Photo
            </Button>
          </div>

          {originalImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Original Photo</h3>
                <img 
                  src={originalImage} 
                  alt="Original" 
                  className="w-full h-auto rounded-lg border"
                />
              </div>
              
              {editedImage && (
                <div>
                  <h3 className="font-semibold mb-2">Professional Look</h3>
                  <img 
                    src={editedImage} 
                    alt="Edited" 
                    className="w-full h-auto rounded-lg border"
                  />
                </div>
              )}
            </div>
          )}

          {originalImage && (
            <div className="flex gap-2 flex-wrap">
              <Button 
                onClick={editOutfit} 
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Change to Professional Outfit'
                )}
              </Button>
              
              {editedImage && (
                <>
                  <Button variant="outline" onClick={downloadImage}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="default" onClick={useAsFounderImage}>
                    Use as Founder Photo
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </Card>
      
      <Card className="p-4 bg-muted">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> This is a simplified demo. For the best results with your actual photo, consider using professional photo editing software or AI-powered tools that can accurately change clothing while preserving facial features.
        </p>
      </Card>
    </div>
  );
};

export default ImageEditor;