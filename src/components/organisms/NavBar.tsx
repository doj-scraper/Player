import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, FileText, User, Github, Mail, Linkedin, Terminal } from 'lucide-react';

const NavBar: React.FC = () => {
  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Work', path: '/projects', icon: Grid },
    { label: 'Log', path: '/articles', icon: FileText },
    { label: 'Bio', path: '/about', icon: User },
  ];

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/ui-commits', icon: Github },
    { label: 'Email', url: 'mailto:chris@crodaconsulting.com', icon: Mail },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  ];

  return (
    <>
      <aside className="hidden md:flex flex-col fixed top-0 left-0 w-64 h-screen bg-surface border-r border-border z-50">
        <div className="p-8 border-b border-border">
          <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-4">
            <Terminal className="text-terminal-green animate-pulse" size={24} />
          </div>
          <h1 className="text-xl font-bold text-primary tracking-tight">C. Rodriguez</h1>
          <p className="text-xs font-mono text-secondary mt-1">Full Stack / AI / Security</p>
        </div>

        <nav className="flex-grow py-8 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'flex items-center gap-4 px-4 py-3 text-sm font-mono tracking-wide transition-all duration-200 border-l-2',
                  isActive
                    ? 'border-terminal-green bg-surface-highlight text-terminal-green'
                    : 'border-transparent text-secondary hover:text-primary hover:bg-surface-highlight/50',
                ].join(' ')
              }
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-6 border-t border-border bg-background/50">
          <p className="text-[10px] uppercase font-mono text-secondary mb-4 tracking-widest">Connect_Via</p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-terminal-green transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></span>
            <span className="text-[10px] font-mono text-secondary">System Online</span>
          </div>
        </div>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-surface border-t border-border z-50 flex justify-around items-center px-2 pb-safe">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [
                'flex flex-col items-center justify-center w-full h-full space-y-1',
                isActive ? 'text-terminal-green' : 'text-secondary',
              ].join(' ')
            }
          >
            <item.icon size={20} strokeWidth={2} />
            <span className="text-[10px] font-mono uppercase">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
