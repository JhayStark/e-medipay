'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BriefcaseMedicalIcon,
  ClipboardIcon,
  LayoutDashboard,
  SettingsIcon,
  UsersIcon,
  WalletIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import Image from 'next/image';

interface LinkComponentsProps {
  name: string;
  active: boolean;
  icon?: React.ReactNode;
  link: string;
}

function LinkComponent({ name, active, icon, link }: LinkComponentsProps) {
  const pathSegments = usePathname().split('/');
  const routeName = pathSegments.slice(1, 3).join('/');
  const linkSegments = link.split('/');
  const linkName = linkSegments.slice(1, 3).join('/');

  const isActive = routeName == linkName;
  return (
    <Link
      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
        !isActive
          ? 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          : 'bg-blue-100  text-blue-900 transition-all hover:text-blue-900 dark:bg-blue-800 dark:text-blue-50 dark:hover:text-blue-50'
      } `}
      href={link}
    >
      {icon}
      {name}
    </Link>
  );
}

function MobileLinkComponent({
  name,
  active,
  icon,
  link,
}: LinkComponentsProps) {
  const pathSegments = usePathname().split('/');
  const routeName = pathSegments.slice(1, 3).join('/');
  const linkSegments = link.split('/');
  const linkName = linkSegments.slice(1, 3).join('/');

  const isActive = routeName == linkName;
  return (
    <Link
      className={`flex flex-col items-center justify-center  ${
        !isActive
          ? 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          : '  text-blue-900 transition-all hover:text-blue-900 dark:bg-blue-800 dark:text-blue-50 dark:hover:text-blue-50'
      }`}
      href={link}
    >
      {icon}
      {/* <span className='text-xs'>{name}</span> */}
    </Link>
  );
}

const menuItems = [
  {
    name: 'Dashboard',
    active: true,
    icon: <LayoutDashboard className='h-5 w-5' />,
    link: '/app',
  },
  {
    name: 'Dependents',
    active: true,
    icon: <UsersIcon className='h-5 w-5' />,
    link: '/app/dependent',
  },
  {
    name: 'Payments',
    icon: <WalletIcon className='h-5 w-5' />,
    link: '/app/payments',
  },
  // {
  //   name: 'Reports',
  //   icon: <ClipboardIcon className='h-5 w-5' />,
  //   link: '/app/reports',
  // },
  {
    name: 'Settings',
    icon: <SettingsIcon className='h-5 w-5' />,
    link: '/app/settings',
  },
];

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid min-h-screen w-full overflow-hidden xl:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-gray-100/40 xl:block dark:bg-gray-800/40'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-[60px] items-center border-b px-6'>
            <Link className='flex items-center  w-full justify-center' href='#'>
              <Image src='/logo.png' width={100} height={64} alt='logo' />
            </Link>
          </div>
          <div className='flex-1 overflow-auto py-2'>
            <nav className='grid items-start px-4 text-sm font-medium'>
              {menuItems?.map(item => (
                <LinkComponent
                  name={item.name}
                  key={item.name}
                  active={item?.active || false}
                  icon={item?.icon}
                  link={item?.link}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 xl:h-[60px] items-center justify-between xl:justify-end gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
          <Link className='xl:hidden' href='/'>
            <BriefcaseMedicalIcon className='h-6 w-6' />
            <span className='sr-only'>Home</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className='rounded-full border relative border-gray-200 w-8 h-8 dark:border-gray-800'
                size='icon'
                variant='ghost'
              >
                <span className='absolute z-50 -right-2 -top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white'>
                  2
                </span>
                <Avatar className=' rounded-full'>
                  <AvatarImage alt='@shadcn' src='' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Sponsor Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='flex justify-between'>
                Approvals <span>2</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <ScrollArea className='flex  max-h-[calc(100vh-112px)] xl:max-h-[calc(100vh-60px)] overflow-auto flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          {children}
        </ScrollArea>
        <div className='xl:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-950 border-t dark:border-gray-800 shadow-lg'>
          <div className='flex items-center justify-around h-14'>
            {menuItems?.map(item => (
              <MobileLinkComponent
                name={item.name}
                key={item.name}
                active={item?.active || false}
                icon={item?.icon}
                link={item?.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
