import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categoryList = await response.json();

  return {
    props: {
      categoryList: categoryList,
    },
  };
};

const categoryIndex: React.FC<{ categoryList: string[] }> = ({
  categoryList,
}) => {
  return (
    <div className="container">
      <div>
        <h2>Category :</h2>
        {categoryList.map((element) => {
          return (
            <Link href={`/category/${element}`}>
              <a>{element}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default categoryIndex;
