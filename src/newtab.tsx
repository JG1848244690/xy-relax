export default function NewTabPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-4xl font-bold mb-4">Tiny Reader</h1>
      <p className="text-gray-600 mb-8">开始你的阅读之旅</p>

      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          打开书架
        </button>
        <button className="bg-gray-200 px-6 py-3 rounded-lg">
          导入书籍
        </button>
      </div>
    </div>
  )
}
