import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(12)
  const [numeric, setnumeric] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState('')

  const passwordGenerator = useCallback(() => {
    if (length <= 0) {
      setpassword('')
      return
    }

    let pass = ''
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    if (numeric) {
      str += '0123456789'
    }
    if (char) {
      str += '!@#$%^&*?'
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numeric, char])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-900/40 backdrop-blur">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Password Generator</p>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Generate strong passwords fast</h1>
          <p className="mt-3 text-slate-400">Pick the length and character options, then generate a secure password.</p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 px-4 py-5 shadow-inner shadow-slate-950/40">
            <label className="mb-2 block text-sm font-medium text-slate-300">Generated password</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={password}
                placeholder="Your password will appear here"
                readOnly
                className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-slate-500"
              />
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(password)}
                className="rounded-2xl bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!password}
              >
                Copy
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 px-4 py-5 shadow-inner shadow-slate-950/40">
            <div className="mb-4 flex items-center justify-between gap-4 text-sm text-slate-300">
              <span>Password length</span>
              <span className="font-semibold text-slate-100">{length}</span>
            </div>
            <input
              id="length"
              min={6}
              max={50}
              type="range"
              value={length}
              onChange={(e) => setlength(Number(e.target.value))}
              className="w-full accent-slate-500"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 transition hover:border-slate-600">
              <input
                type="checkbox"
                checked={numeric}
                onChange={(e) => setnumeric(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-900 text-slate-300 accent-slate-500"
              />
              <span className="text-sm text-slate-200">Include numbers</span>
            </label>
            <label className="flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 transition hover:border-slate-600">
              <input
                type="checkbox"
                checked={char}
                onChange={(e) => setchar(e.target.checked)}
                className="h-5 w-5 rounded border-slate-700 bg-slate-900 text-slate-300 accent-slate-500"
              />
              <span className="text-sm text-slate-200">Include symbols</span>
            </label>
          </div>

          <button
            type="button"
            onClick={passwordGenerator}
            className="w-full rounded-3xl bg-slate-700 px-5 py-4 text-base font-semibold text-white transition hover:bg-slate-600"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
