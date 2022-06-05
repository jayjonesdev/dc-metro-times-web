import React from 'react';
import { Line, LineColor } from '../../types/rail.types';
import './filledCircle.styles.css';

const FilledCircle: React.FC<{ line: Line; className?: string }> = ({
  line,
  className,
}) => (
  <span
    aria-label={`${line} line`}
    data-testid='line-filled-circle'
    className={`flex h-3 w-3 ${className}`}
  >
    <span className={`pulse ${LineColor[line]}`}></span>
    <span className={`filled-circle ${LineColor[line]}`}></span>
  </span>
);

export default FilledCircle;
