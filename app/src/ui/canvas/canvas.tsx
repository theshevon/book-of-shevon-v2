import React, { useRef, useEffect } from 'react';

type Size = '25%' | '50%' | '75%' | '100%';

type CanvasProps = {
  width: Size,
  height: Size,
  draw: (context: CanvasRenderingContext2D) => void,
  Fallback: () => JSX.Element,
}

export const Canvas = ({
  width,
  height,
  draw,
  Fallback,
}: CanvasProps) => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas && canvas.getContext('2d');
    context && draw(context);
  }, []);
  
  return (
    <canvas
        ref={canvasRef}
        width={width}
        height={height}
    >
      <Fallback/>
    </canvas>
  );
};
