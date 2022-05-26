import React from 'react';
import { Line, LineColor } from '../../types/rail.types';
import './filledcircle.styles.css';

const FilledCircle: React.FC<{ line: Line; className?: string }> = ({
  line,
  className,
}) => (
  <div
    className={`filled-circle ${LineColor[line]} ${className}`}
    aria-label={`${line} line`}
    data-testid='line-filled-circle'
  />
);

export default FilledCircle;
