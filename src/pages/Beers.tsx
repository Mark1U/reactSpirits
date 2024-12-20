import { Spirit } from "../interfaces/spirits";
import { useNavigate } from "react-router";

interface Props {
  beers: Spirit[];
}
const Beer = ({ beers }: Props) => {
  const navigate = useNavigate();

  if (!beers || beers.length === 0) return <span className="loader"></span>;
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      {beers.map((beer) => (
        <div
          key={beer._id}
          className="min-w-96 max-w-md pb-6 flex flex-row justify-between"
        >
          <img className="w-4/12 pb-12" src={beer.image_url} alt={beer.name} />
          <div className="w-8/12 px-4">
            <p className="font-bold text-2xl">{beer.name}</p>
            <p className="font-bold pb-1 text-sm text-yellow-500">
              {beer.tagline}
            </p>
            <p className="font-bold pb-4">
              Created by: {beer.contributed_by.split("<")[0].trim()}
            </p>

            <button
              onClick={() => navigate("/beers/" + beer._id)}
              type="button"
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Details
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Beer;
