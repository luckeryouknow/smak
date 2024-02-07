import { useState } from 'react';
import Link from 'next/link';

import { SpriteSVG } from '@/shared/img/SpriteSVG';
import Modal from '@/shared/components/Modal/Modal';

type ContactSeller = {
  brandName: string;
  sellerName: string;
  year: number;
  location: string;
  email: string;
  phone: string;
};

export default function ContactSeller({
  brandName,
  sellerName,
  year,
  location,
  email,
  phone,
}: ContactSeller) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Modal isOpen={modalOpen} onClose={closeModal} buttonText="Seller">
      <div className="flex  flex-col  items-start ">
        <p className="text-base leading-relaxed text-gray-900 pt-7 ">
          Контакти продавця
        </p>
        <h2 className="text-xl leading-loose text-gray-900">
          {brandName} / {sellerName}
        </h2>
        <span className="text-xs leading-none text-blue-700">
          {year} роки на Свій
        </span>

        <div>
          <SpriteSVG name="local" />
          <p className="text-base leading-relaxed text-gray-900">{location}</p>
        </div>
        <div>
          <SpriteSVG name="mail" />
          <p className="text-base leading-relaxed text-gray-900">{email}</p>
        </div>

        <div>
          <SpriteSVG name="phone" />
          <p className="text-base leading-relaxed text-gray-900">{phone}</p>
        </div>
        <div className="inline-flex space-x-6 items-start justify-start">
          <Link href="/">
            <SpriteSVG name="telegram" />
          </Link>

          <Link href="/">
            <SpriteSVG name="viber" />
          </Link>
        </div>
      </div>
    </Modal>
  );
}
