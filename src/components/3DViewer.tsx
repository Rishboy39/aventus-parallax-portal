

interface ThreeDViewerProps {
  modelUrl: string;
  posterUrl: string;
  alt: string;
}

export default function ThreeDViewer({ modelUrl, posterUrl, alt }: ThreeDViewerProps) {
  return (
    <model-viewer
      src={modelUrl}
      poster={posterUrl}
      alt={alt}
      auto-rotate
      camera-controls
      shadow-intensity="1"
      className="w-full h-full"
    />
  );
} 