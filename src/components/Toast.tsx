import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SparkleIcon } from './Icons';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            backgroundColor: 'var(--color-dark-surface)',
            color: 'var(--color-white)',
            padding: '12px 22px',
            borderRadius: 'var(--radius-full)',
            border: '2px solid var(--color-aqua)',
            boxShadow: 'var(--shadow-pop)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 600,
            fontSize: '0.95rem',
            maxWidth: '90vw',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          <SparkleIcon size={20} color="var(--color-yellow)" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
