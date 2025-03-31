import Chat from "@/components/Chat";
import Header from "@/components/Header";
import { useTheme } from "@/context/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  return (
    <main className={`min-h-screen transition-colors duration-200 ${darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <Header />
        <div className="mt-6 rounded-lg shadow-lg">
          <Chat />
        </div>
      </div>
    </main>
  )
}

export default App
