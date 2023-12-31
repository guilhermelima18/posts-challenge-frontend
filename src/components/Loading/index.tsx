import ReactLoading, { LoadingType } from "react-loading";

type LoadingProps = {
  type: LoadingType;
  color: string;
  width?: number;
  height?: number;
};

export const Loading = ({
  type,
  color,
  width = 100,
  height = 100,
}: LoadingProps) => {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
};
