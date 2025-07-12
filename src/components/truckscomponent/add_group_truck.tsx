// FullWidthHalfHeightPanel.tsx
import React from "react";

type Props = {
  onClose: () => void;
};

const FullWidthHalfHeightPanel: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1/2 bg-white dark:bg-gray-800 shadow-lg z-50 flex justify-end">
      <button
        className="m-4 px-4 py-2 bg-red-600 text-white rounded"
        onClick={onClose}
      >
        إغلاق
      </button>
    </div>
  );
};

export default FullWidthHalfHeightPanel;
