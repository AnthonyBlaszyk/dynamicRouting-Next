import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${context.params.category}`
  );
  const joke = await response.json();
  const category = context.params.category;

  return {
    props: {
      joke: joke.value,
      cat: category,
    },
  };
};

const category: React.FC<{ joke: string; cat: string }> = ({ joke, cat }) => {
  return (
    <div className="container">
      <h2>Category : {cat}</h2>
      <p>{joke}</p>
      <Link href="/category">
        <a>Choose a category</a>
      </Link>
    </div>
  );
};

export default category;