import React, { useId } from "react"

function Input({
    label, 
    amount,
    onAmountchange,
    oncurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,  
    className = "",
}) {

    const aamountInputId = useId()

    return (
       <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
          <label className='text-black/40 mb-2 inline-block' htmlFor={aamountInputId}>
            {label}
          </label>
          <input 
          id = {aamountInputId}
          type="number" 
          className='outline-none w-full bg-transparent py-1.5' 
          placeholder='amount'
          disabled = {amountDisable}
          value={amount}
          onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))} />
          
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency type</p>
            <select 
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectCurrency}
            onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
            disabledc= {currencyDisable}>
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>

                ))}
            </select>
        </div>
       </div>
    )
}

export default Input