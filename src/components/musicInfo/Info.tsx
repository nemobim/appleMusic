import { IInfoProps } from "../../types/music";

const Info = ({ title, text }: IInfoProps) => {
  return (
    <li className="my-1 font-bold ">
      {title}:
      <span className="mx-2 font-light">
        {title === "Price" ? `${text} / USD` : text}
      </span>
    </li>
  );
};

export default Info;
