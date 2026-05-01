import { Helmet } from "react-helmet-async";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist in this portfolio site."
        />
      </Helmet>
      <div> NotFound</div>
    </>
  );
};
