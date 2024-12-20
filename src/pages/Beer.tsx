import { Spirit } from "../interfaces/spirits";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const Beer = () => {
  const { beerId } = useParams<{ beerId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [beer, setBeer] = useState<Spirit | null>(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        if (!beerId) {
          console.error("No beerId provided");
          return;
        }

        const result = await fetch(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        const data = await result.json();
        setBeer(data);
      } catch (error) {
        console.error("Error fetching beer:", error);
      }
    };

    fetchBeer();
  }, [beerId]);

  if (!beer) return <span className="loader"></span>;

  return (
    <section className="h-screen flex pt-12 _items-center justify-center">
      <div className="min-w-96 max-w-md px-4 ">
        <img className="w-max pb-2" src={beer.image_url} alt={beer.name} />

        <h1 className="text-5xl font-bold pb-2">{beer.name}</h1>
        <h2 className="text-xl pb-4 font-bold text-yellow-500">
          {beer.tagline}
        </h2>
        <div className="text-gray-400 grid grid-cols-2 pb-4">
          <p>First brewed</p>
          <p className="text-right">{beer.first_brewed}</p>
          <p>Attenuation level:</p>
          <p className="text-right">{beer.attenuation_level}</p>
        </div>
        <p className="font-bold">{beer.description}</p>

        <button
          onClick={() => {
            if (location.key === "default") {
              navigate("/");
            } else {
              navigate(-1);
            }
          }}
          type="button"
          className="text-white  mt-6 mb-24 bg-[#FFCA41] hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-full text-lg p-4 text-center inline-flex items-center me-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
            ></path>
          </svg>
          <span className="sr-only">Back Btn</span>
        </button>
      </div>
    </section>
  );
};

export default Beer;
