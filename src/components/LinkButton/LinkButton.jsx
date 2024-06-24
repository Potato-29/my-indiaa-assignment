const LinkButton = ({ className, href, text }) => {
  return (
    <a
      href={href}
      className={`${className} hover:bg-slate-200 transition-all duration-500 rounded-lg p-2`}
    >
      <button>{text}</button>
    </a>
  );
};

export default LinkButton;
