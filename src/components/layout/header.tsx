import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MobileNav />
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative p-2 bg-background rounded-lg ring-1 ring-pink-500/20">
                <div className="w-5 h-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg transform rotate-45"></div>
                  <div className="absolute inset-[2px] bg-background rounded-[4px] transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Projecto
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}