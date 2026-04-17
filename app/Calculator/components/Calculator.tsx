"use client"

import { useState } from "react"

const Calculator = () => {
  const [current, setCurrent] = useState("0")
  const [previous, setPrevious] = useState("")
  const [operator, setOperator] = useState<string | null>(null)
  const [overwrite, setOverwrite] = useState(true)

  const calculatorButtons = [
    ["C", "%"],
    ["7", "8", "9", "+"],
    ["6", "5", "4", "×"],
    ["1", "2", "3", "-"],
    [".", "0", "=", "+"],
  ]

  const getButtonClass = (btn: string) => {
    let baseClass =
      "px-6 py-4 rounded-lg text-lg font-semibold transition-colors active:scale-95"
    if (btn === "C" || btn === "%") {
      return `${baseClass} bg-red-500 hover:bg-red-600 text-white`
    } else if (btn === "+" || btn === "-" || btn === "×" || btn === "÷") {
      return `${baseClass} bg-blue-600 hover:bg-blue-700 text-white`
    } else if (btn === "=") {
      return `${baseClass} bg-green-600 hover:bg-green-700 text-white`
    } else {
      return `${baseClass} bg-gray-200 hover:bg-gray-300 text-gray-900`
    }
  }

  const handleNumber = (value: string) => {
    if (overwrite) {
      setCurrent(value === "." ? "0." : value)
      setOverwrite(false)
      return
    }

    if (value === "." && current.includes(".")) return

    setCurrent(current + value)
  }

  const handleButtonClick = (btn: string) => {
    if (!isNaN(Number(btn)) || btn === ".") {
      handleNumber(btn)
      return
    }

    switch (btn) {
      case "C":
        handleClear()
        break
      case "%":
        handlePercentage()
        break
      case "=":
        handleCalculate()
        break
      case "+":
      case "-":
      case "×":
      case "÷":
        handleOperator(btn)
        break
    }
  }

  const handleClear = () => {
    setCurrent("0")
    setPrevious("")
    setOperator(null)
    setOverwrite(true)
  }

  const handlePercentage = () => {
    setCurrent(String(parseFloat(current) / 100))
  }

  const handleOperator = (op: string) => {
    if (current === "" && previous === "") return

    if (previous === "") {
      setPrevious(current)
      setCurrent("0")
    }

    setOperator(op)
    setOverwrite(true)
  }

  const handleCalculate = () => {
    const prev = parseFloat(previous)
    const curr = parseFloat(current)

    if (isNaN(prev) || isNaN(curr)) return

    let result = 0

    switch (operator) {
      case "+":
        result = prev + curr
        break
      case "-":
        result = prev - curr
        break
      case "×":
        result = prev * curr
        break
      case "÷":
        result = curr === 0 ? 0 : prev / curr
        break
      default:
        return
    }

    setCurrent(String(result))
    setPrevious("")
    setOperator(null)
    setOverwrite(true)
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 sm:p-8 rounded-xl bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 transition-colors">
      <h1 className="text-3xl font-bold mb-4 text-center">Calculator</h1>

      <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mb-6 text-right text-2xl font-mono text-zinc-900 dark:text-zinc-100">
        {previous} {operator} {current}
      </div>

      <div className="flex flex-col gap-3">
        {calculatorButtons.map((row, i) => (
          <div key={i} className="grid grid-cols-4 gap-3">
            {row.map((btn, j) => (
              <button
                key={j}
                onClick={() => handleButtonClick(btn)}
                className={getButtonClass(btn)}>
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calculator
