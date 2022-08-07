const HeaderItem = ({Icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-blue-500 group">
        <Icon className = "h-8 mb-1 group-hover:animate-pulse duration-500" />
        <p className = "opacity-0 group-hover:opacity-100  tracking-widest">{title}</p>
    </div>
  )
};
export default HeaderItem