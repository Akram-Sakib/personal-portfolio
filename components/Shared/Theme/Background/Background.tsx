import React, { ReactNode } from 'react'

type Props = {children: ReactNode};

export default function Background({ children }: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 transition-all">{children}</div>
  );
}
