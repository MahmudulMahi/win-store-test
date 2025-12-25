import { getCategories } from "./actions/fetchCategories";
import CategorySlider from "./component/CategorySlider";
import HeroSlider from "./component/HeroSlider";


export default async function Home() {
  const categories = await getCategories();
  return <div>
    <HeroSlider/>
    <CategorySlider categories={categories}/>
  </div>;
}
