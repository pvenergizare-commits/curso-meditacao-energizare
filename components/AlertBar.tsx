import React from 'react';
import { COPY } from '../constants';

export const AlertBar: React.FC = () => {
  return (
    <div className="bg-brand-700 text-white py-2 px-4 text-center text-sm font-medium tracking-wide shadow-md relative z-50">
      <p>{COPY.alert}</p>
    </div>
  );
};
