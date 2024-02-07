'use client';
import { useState } from 'react';
import Link from 'next/link';
import ArrowButton from '@/shared/components/ArrowButton/ArrowButton';
import Modal from '@/shared/components/Modal/Modal';

type EmailConfirmation = {
  email: string;
};

export default function EmailConfirmation({
  email = 'g***@gmail.com',
}: EmailConfirmation) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Modal isOpen={modalOpen} onClose={closeModal} buttonText="Надіслати">
      <h2 className="text-center text-blue-700 text-xl font-normal font-['Lato'] leading-loose pb-6">
        Перевірте ваш email
      </h2>
      <div className="flex justify-center pb-10">
        <span className="text-center text-neutral-800 text-base font-normal font-['Lato'] leading-relaxed text-nowrap">
          перейдіть за посиланням, яке ми вам <br />
          вислали на адресу{' '}
          <span className="text-blue-700 text-base font-normal font-['Lato'] leading-relaxed">
            {email}
          </span>
        </span>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <ArrowButton onClick={() => {}}>
            <span className="text-nowrap">Встановити новий пароль</span>
          </ArrowButton>
        </Link>
      </div>
    </Modal>
  );
}
