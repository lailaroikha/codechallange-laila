import React, { useState, useRef, useEffect } from 'react';

type AccordionProps = {
  children: React.ReactNode | string;
  tag?: keyof JSX.IntrinsicElements | string;
  title: string;
  active?: boolean;
}

export default function Accordion({
  children,
  tag = 'li',
  title,
  active = false
}: AccordionProps) {

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const accordion = useRef<HTMLDivElement>(null);
  const Component = tag as keyof JSX.IntrinsicElements;

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <Component>
      <button
        className="flex items-center w-full text-lg font-medium text-left py-5 border-t border-gray-200"
        onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
        aria-expanded={accordionOpen}
      >
        <svg className="w-4 h-4 fill-current text-blue-500 shrink-0 mr-8 -ml-12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
        </svg>
        <span>{title}</span>
      </button>
      <div
        ref={accordion}
        className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: accordionOpen ? accordion.current?.scrollHeight : 'none', opacity: accordionOpen ? 1 : 0 }}
      >
        <p className="pb-5">{children}</p>
      </div>
    </Component>
  )
}