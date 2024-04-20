import Link from 'next/link'

import { cn } from '@/lib/utils'

export type DasboardSidebarGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DasboardSidebar({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return (
    <aside
      className={cn(
        'border-r border-border flex flex-col space-y-6',
        className,
      )}
    >
      {children}
    </aside>
  )
}

export function DasboardSidebarHeader({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return (
    <header className={cn('px-6 py-3 border-b border-border', className)}>
      {children}
    </header>
  )
}

export function DasboardSidebarHeaderTitle({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return <h2 className={cn('', className)}>{children}</h2>
}

export function DasboardSidebarMain({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return <main className={cn('px-3', className)}>{children}</main>
}

export function DasboardSidebarNav({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return <nav className={cn('', className)}>{children}</nav>
}

export function DasboardSidebarNavHeader({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return <header className={cn('', className)}>{children}</header>
}

export function DasboardSidebarNavHeaderTitle({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return (
    <div
      className={cn('text-xs uppercase text-muted-foreground ml-3', className)}
    >
      {children}
    </div>
  )
}

export function DasboardSidebarNavMain({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return <main className={cn('flex flex-col', className)}>{children}</main>
}

type DasboardSidebarNavLinkProps = {
  href: string
  active?: boolean
}

export function DasboardSidebarNavLink({
  children,
  className,
  href,
  active,
}: DasboardSidebarGenericProps<DasboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center text-xs px-3 py-2 rounded-md',
        active && 'bg-secondary',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function DasboardSidebarFooter({
  children,
  className,
}: DasboardSidebarGenericProps) {
  return (
    <footer className={cn('p-6 mt-auto border-t border-border', className)}>
      {children}
    </footer>
  )
}
