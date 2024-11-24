interface HeaderTextProps {
  text: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ text }) => {
  return (
    <div className="text-base md:text-xl lg:text-3xl font-bold text-greyTitle text-center mb-4">
      {text}
    </div>
  );
};

export default HeaderText;
