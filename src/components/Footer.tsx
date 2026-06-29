export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-moss text-khaki py-6 px-6 md:px-10 text-center text-sm border-t border-sand/10">
      {`© ${year} Margareta Kristiana. Dibangun dengan Next.js & Tailwind CSS.`}
    </footer>
  );
}