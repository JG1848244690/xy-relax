import { useState } from "react"

export default function OptionsPage() {
  const [theme, setTheme] = useState("light")
  const [fontSize, setFontSize] = useState(14)

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">设置</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">主题</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="light">浅色</option>
            <option value="dark">深色</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            字体大小: {fontSize}px
          </label>
          <input
            type="range"
            min="12"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          保存设置
        </button>
      </div>
    </div>
  )
}
