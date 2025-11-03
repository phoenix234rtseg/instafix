import { Home, Layers, Rocket, Box, BookOpen, Shield, GitPullRequest, Map, FileText } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  sidebarOpen: boolean;
}

const menuItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'features', label: 'Features', icon: Layers },
  { id: 'getting-started', label: 'Getting Started', icon: Rocket },
  { id: 'architecture', label: 'Architecture', icon: Box },
  { id: 'usage-guides', label: 'Usage Guides', icon: BookOpen },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'contributing', label: 'Contributing', icon: GitPullRequest },
  { id: 'roadmap', label: 'Roadmap', icon: Map },
  { id: 'license', label: 'License', icon: FileText },
];

export default function Sidebar({ currentPage, setCurrentPage, sidebarOpen }: SidebarProps) {
  if (!sidebarOpen) return null;

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-gray-50 dark:bg-[#1D1F1F] border-r border-gray-200 dark:border-gray-800 overflow-y-auto transition-colors">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-[#00C298] text-white shadow-lg shadow-[#00C298]/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800 mt-4">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">COMMUNITY</div>
        <div className="space-y-2">
          <a
            href="https://github.com/instafix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#00C298] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/instafix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#00C298] transition-colors"
          >
            Discord
          </a>
          <a
            href="mailto:support@instafix.com"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#00C298] transition-colors"
          >
            Support
          </a>
        </div>
      </div>
    </aside>
  );
}
