import { getCategories } from "./actions/fetchCategories";
import BestDealsTabs from "./component/BestDealsTabs";
import CategorySlider from "./component/CategorySlider";
import HeroSlider from "./component/HeroSlider";
import NewArrivals from "./component/NewArrivals";


export default async function Home() {
  const categories = await getCategories();
  return <div>
    <HeroSlider/>
    <CategorySlider categories={categories}/>
    <NewArrivals/>
    <BestDealsTabs/>
  </div>;
}
