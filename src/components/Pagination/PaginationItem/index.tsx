import { PaginationItemProps } from "./types";

export const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <button className="bg-pink-400 w-[40px] h-[40px] rounded-lg font-bold text-white">
        {number}
      </button>
    );
  }

  return (
    <button
      className="w-[40px] h-[40px] rounded-lg font-bold text-white border border-pink-400"
      onClick={() => onPageChange(number)}
    >
      {number}
    </button>
  );
};
