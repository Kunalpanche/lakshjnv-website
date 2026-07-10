export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-200 sm:text-base";
  const variants = {
    primary: "bg-brand-orange text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600",
    secondary: "border border-slate-300 bg-white text-brand-blue hover:border-brand-blue hover:bg-blue-50",
    ghost: "text-brand-blue hover:bg-blue-50",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
