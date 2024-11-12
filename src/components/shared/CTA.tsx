import Link from 'next/link';

export const CTA = ({ dark }: { dark?: boolean }) => {
  const colorNames = 'border-zinc-900 bg-zinc-900 text-orange-300';
  const darkColorNames = 'border-orange-300/20 bg-orange-300 text-zinc-900';
  const classNames = `border ${
    dark ? darkColorNames : colorNames
  } px-6 py-3 rounded-md font-medium hover:bg-emerald-800 hover:text-white transition duration-300`;

  return (
    <Link href='/contact' className={classNames}>
      Schedule Your Free Consultation
    </Link>
  );
};
