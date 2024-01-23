export default function FinalPrice () {
  return (
    <div className="py-10 px-4 shadow-sm rounded-default md:ml-auto md:w-80">
      <h2 className="text-3xl font-lora">Разом</h2>
      <div className="flex mt-8 mb-6">
        <p>3 товари на суму</p>
        <p className="ml-auto">450 ₴</p>
      </div>
      <div className="flex pt-8 pb-10 border-t-2">
        <p>До сплати</p>
        <p className="ml-auto">450 ₴</p>
      </div>
      <button className="w-[236px] h-[50px] px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-300 rounded-[20px] shadow justify-center items-center gap-2 inline-flex">
        <div className="text-white text-base font-normal font-lato leading-relaxed">Оформити замовлення</div>
      </button>
    </div>
  )
}