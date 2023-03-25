import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { Presentation } from '../../components/Presentation/Presentation';
import { SearchCategory } from '../../components/Presentation/SearchCategory';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;
  return (
    <div>
      <Presentation name={`${category_id}`} />
      <div>
        <SearchCategory />
      </div>
      <div className="bg-red-200 h-[50rem]">content</div>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
