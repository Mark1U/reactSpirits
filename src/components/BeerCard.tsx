import { useNavigate } from "react-router";

interface Props {
  title: string;
  imgUrl: string;
  to: string;
}

const BeerCard = ({ title, imgUrl, to }: Props) => {
  const navigator = useNavigate();
  return (
    <div
      onClick={() => navigator(to)}
      className="w-full bg-white cursor-pointer"
    >
      <img src={imgUrl} alt="" />
      <div className="w-full h-16 bg-[#FFCA41] text-center mb-8 py-3">
        <p className="text-center text-4xl text-gray-50 font-bold">{title}</p>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  to: string;
  text: string;
}
export default BeerCard;
