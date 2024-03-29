'use client';

import {
  FormCheckbox,
  FormInput,
  OrangeButton,
  Section,
  FormHeading,
} from '@/shared/components';
import { MouseEventHandler, useState } from 'react';
import { SpriteSVG } from '@/shared/img/SpriteSVG';
import { useFormik } from 'formik';
import Modal from '@/shared/components/Modal/Modal';
import RegIsSuccesful from '@/shared/components/ModalRegSuccess/RegSuccess';
import Link from 'next/link';
import * as Yup from 'yup';

type Props = {
  signupType: 'page' | 'burger';
  signinClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function SignupForm({ signupType, signinClick }: Props) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    setShowModal(true);
    setIsFormSubmitted(true);
  };

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      passwordRepeat: '',
      rememberMe: false,
    },
    validationSchema: Yup.object().shape({
      login: Yup.string()
        .min(2, 'Логін повинен мати довжину не менше 2 символів')
        .required("Потрібно ім'я"),
      email: Yup.string()
        .email('Дані введені некоректно')
        .required("Обов'язкова наявність електронної пошти"),
      password: Yup.string()
        .min(8, 'Пароль повинен мати довжину не менше 8 символів')
        .required('Потрібен пароль'),
      passwordRepeat: Yup.string()
        .min(8, 'Пароль повинен мати довжину не менше 8 символів')
        .required('Потрібен пароль'),
      rememberMe: Yup.boolean(),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <Section className="py-[80px] md:pt-[38px] xl:py-[98px]">
      <FormHeading heading="Реєстрація нового користувача" additionalText="" />
      <form
        className="flex flex-col max-w-[400px] mx-auto mb-6 gap-5"
        onSubmit={formik.handleSubmit}
      >
        <FormInput
          formik={formik}
          id="login"
          label={'Ваше ім’я '}
          inputType="text"
        />
        <FormInput
          formik={formik}
          id="email"
          label={'Електронна пошта'}
          inputType="email"
        />
        <FormInput
          formik={formik}
          id="password"
          label={'Придумайте пароль'}
          inputType="password"
        />
        <FormInput
          formik={formik}
          id="passwordRepeat"
          label={'Повторіть пароль'}
          inputType="password"
        />
        <FormCheckbox
          formik={formik}
          id="rememberMe"
          label="Запам’ятати мене"
          className="md:text-base sm:text-sm"
        />
        <p className="text-gray-500 font-lato text-sm md:pb-[34px]">
          Реєструючись ви погоджуєтесь з Правилами використання сайту та
          Політикою конфіденційності
        </p>
        <div className="text-white md:text-base sm:text-sm">
          <OrangeButton
            onClick={() => setShowModal(true)}
            type="submit"
            cssSettings=" mx-auto"
          >
            Зареєструватися
          </OrangeButton>
        </div>
      </form>
      {isFormSubmitted && showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <RegIsSuccesful />
        </Modal>
      )}
      <p className="text-center pb-3 sm:text-sm">Або увійдіть за допомогою:</p>
      <div className="flex justify-center pb-3">
        <SpriteSVG name="icon_google" />
      </div>
      <div className="flex justify-center pb-7 items-baseline">
        <p className="pr-6">Маєте профіль?</p>
        {signupType === 'page' ? (
          <Link href="/signin" className="text-blue-90 text-sm">
            Увійти
          </Link>
        ) : (
          <button className="text-blue-90 text-sm" onClick={signinClick}>
            Увійти
          </button>
        )}
      </div>
    </Section>
  );
}
