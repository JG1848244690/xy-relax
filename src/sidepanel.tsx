export default function SidePanel() {
  return (
    <div className="h-full flex flex-col p-4 bg-gray-50">
      <h2 className="text-lg font-bold mb-4">阅读进度</h2>

      <div className="space-y-3 flex-1">
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="font-medium">当前书籍</p>
          <p className="text-sm text-gray-500">暂无阅读记录</p>
        </div>

        <div className="bg-white p-3 rounded shadow-sm">
          <p className="font-medium">今日阅读</p>
          <p className="text-sm text-gray-500">0 分钟</p>
        </div>
      </div>

      <button className="bg-blue-500 text-white py-2 rounded mt-4">
        继续阅读
      </button>
    </div>
  )
}
