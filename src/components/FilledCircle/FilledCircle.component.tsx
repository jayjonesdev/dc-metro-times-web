import React from 'react';
import { Line, LineColor } from '../../types/rail.types';

const FilledCircle: React.FC<{ line: Line; className?: string }> = ({
  line,
  className,
}) => (
  <div
    className={`rounded-full h-3 w-3 ring-1 ring-slate-400 ${LineColor[line]} ${className}`}
    aria-label={`${line} line`}
    data-testid='line-filled-circle'
  />
);

export default FilledCircle;
