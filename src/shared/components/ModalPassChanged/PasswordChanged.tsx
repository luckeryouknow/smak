'use client';
import { useState } from 'react';
import Link from 'next/link';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import Modal from '@/shared/components/Modal/Modal';

export default function PasswordChanged() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div>
      <Modal isOpen={modalOpen} onClose={closeModal} buttonText="Підтвердити">
        <h2 className="text-center text-blue-700 text-2xl font-normal font-['Lato'] leading-[38.40px] pb-6">
          Ваш пароль змінено
        </h2>
        <div className="text-center pb-10">
          <span className="text-nowrap text-gray-900 ">
            Використовуйте новий пароль для входу
          </span>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <ArrowButton onClick={() => {}}>
              <span>Увійти</span>
            </ArrowButton>
          </Link>
        </div>
      </Modal>
    </div>
  );
}
