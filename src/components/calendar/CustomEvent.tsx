type CustomEventProps = {
  currentEvent: any;
};

const CustomEvent: React.FC<CustomEventProps> = ({ currentEvent }) => {
  return (
    <div className="custom-event w-full py-[7px] px-3 flex items-center justify-start">
      <span className="text-[13px] font-medium leading-[107%] line-clamp-1">
        {currentEvent.title}
      </span>
    </div>
  );
};

export default CustomEvent;
