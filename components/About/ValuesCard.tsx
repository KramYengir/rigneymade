import { IconType } from "react-icons"; // Or any other icon library you're using

interface ValuesCardProps {
  icon: IconType; // Pass the icon component
  title: string;
  description: string;
}

const ValuesCard: React.FC<ValuesCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="relative bg-white dark:bg-gradient-radial from-neutral-800 to-neutral-900 border-2 border-rm-primary-800 dark:border-rm-primary-400 rounded-lg shadow-xl shadow-neutral-400 dark:shadow-rm-primary-950 py-20 px-6 flex flex-col max-w-xs">
      <div className="absolute -top-[16px] -left-4 text-4xl text-rm-primary-800 dark:text-rm-primary-400 bg-white dark:bg-neutral-800 border-2 border-rm-primary-800 dark:border-rm-primary-400 shadow-md rounded-xl py-2 px-6 mb-4">
        <Icon size={48} />
      </div>
      <h3 className="text-2xl uppercase font-bold mb-2 text-rm-primary-900 dark:text-gray-200">
        {title}
      </h3>
      <p className="text-balance text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ValuesCard;
