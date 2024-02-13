"use client"

import { CloseButton, Dropdown } from "@/shared/components";
import { OptionsButtons, PriceButtons } from "./components";
import { MouseEventHandler, useState } from "react";

type Props = {
  display: string,
  closeButtonClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Filter ({ display, closeButtonClick }: Props) {
  const options = [
    { value: "за районом", label: "За районом" },
    { value: "галицький", label: "Галицький" },
    { value: "залізничний", label: "Залізничний" },
    { value: "франківський", label: "Франківський" },
    { value: "сихівський", label: "Сихівський" },
    { value: "личаківський", label: "Личаківський" },
  ];

  return (
    <div className={`${display} fixed h-screen w-full left-0 top-0 px-4 py-6 bg-white z-[60] overflow-auto md:w-fit md:left-auto md:right-0 xl:relative xl:block xl:rounded-default xl:z-0 xl:inset-0 xl:overflow-visible xl:h-fit xl:min-w-fit`}>
      <div className="flex items-center text-2xl pb-[10px] border-b-2 xl:hidden">
        <h1 className="mr-auto">Фільтр</h1>
        <CloseButton closeButtonClick={closeButtonClick} />
      </div>

      <h1 className="text-2xl hidden xl:block">Фільтр</h1>

      <OptionsButtons />

      <Dropdown 
        options={options}
        placeholder={"Всі оголошення"}
        id={"categories"}
        dropdownName={"Категорії"}
      />

      <Dropdown 
        options={options}
        placeholder={"Всі оголошення"}
        id={"categories"}
        dropdownName={"Категорії"}
      />

      <Dropdown
        options={options}
        placeholder={"Всі оголошення"}
        id={"categories"}
        dropdownName={"Категорії"}
      />

      <Dropdown 
        options={options}
        placeholder={"Всі оголошення"}
        id={"categories"}
        dropdownName={"Категорії"}
      />
      <PriceButtons />
    </div>
  )
}