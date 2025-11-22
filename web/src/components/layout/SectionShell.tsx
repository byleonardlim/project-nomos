import React from 'react';

export type SectionShellProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
