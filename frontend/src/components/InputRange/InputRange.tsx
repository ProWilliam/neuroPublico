import React, { useRef, useEffect, useState} from 'react';
import './InputRange.styles.css';
import { useCalculator } from '../../context/Calculator/CalculatorContext';
import { InputRangeProps } from './InputRange.type';

export const InputRange:React.FC<InputRangeProps> = ({field}) => {
  const { calculatorState } =  useCalculator();
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Establece el progreso inicial basándose en costPerSale
    const initialProgress = Number(calculatorState[field]);
    if (!isNaN(initialProgress)) {
      setProgress((((1/2 * initialProgress) / (5/2 * initialProgress)) * 100));
      console.log(progress);
    }
  }, [calculatorState[field]]);

  const handleMouseDown = () => {
    const handleMouseMove = (e: any) => {
      if (progressBarRef.current) {
        const progressBar = progressBarRef.current;
        const rect = progressBar.getBoundingClientRect();
        let newProgress = ((e.clientX - rect.left) / rect.width) * 100;
        newProgress = Math.max(0, Math.min(newProgress, 100)); // Limita el progreso entre 0 y 100
        setProgress(newProgress);
        //updateProgress(field, newProgress);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div ref={progressBarRef} className="progress-bar">
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${(progress)}%` }}></div>
        <div
          className="progress-bar-handle"
          style={{ left: `${progress}%` }}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
}
