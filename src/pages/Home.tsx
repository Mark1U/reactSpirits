import BeerCard from "../components/BeerCard";
import { Spirit } from "../interfaces/spirits";

interface Props {
  beers: Spirit[];
}

const Home = ({ beers }: Props) => {
  if (!beers || beers.length === 0) return <span className="loader"></span>;

  const num = Math.floor(Math.random() * beers.length);
  const _id = beers[num]._id;

  return (
    <section className="h-screen flex pt-12 _items-center justify-center">
      <div className="min-w-96 max-w-md pt-4 mb-48  px-6">
        <BeerCard
          text=""
          title="All Beers"
          to="/beers"
          imgUrl="/davide-colella-xwOn_Cghae0-unsplash.jpg"
        />
        <BeerCard
          text=""
          title="Random Beers"
          to={"/beers/" + _id}
          imgUrl="/george-bakos-83HwuZirc-c-unsplash.jpg"
        />
        <div className="h-12"></div>
      </div>
    </section>
  );
};

export default Home;
