import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type InfinitePaginationType = {
  numberOfPages: number;
  fetchData: (page: number) => void;
  children: ReactNode;
  isLoading: boolean;
};

const InfinitePagination: FunctionComponent<InfinitePaginationType> = ({
  numberOfPages,
  fetchData,
  children,
  isLoading,
}) => {
  const [page, setPage] = useState<number>(1);
  const observerIntercepter = useRef(null);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPage((page) => page + 1);
      }
    });

    if (
      observerIntercepter &&
      observerIntercepter.current &&
      page < numberOfPages &&
      !isLoading
    ) {
      observer.observe(observerIntercepter.current);
    } else if (
      observerIntercepter &&
      observerIntercepter.current &&
      isLoading
    ) {
      observer.unobserve(observerIntercepter.current);
    }

    return () => {
      if (observerIntercepter.current) {
        observer.unobserve(observerIntercepter.current);
      }
    };
  }, [observerIntercepter, numberOfPages, page, isLoading]);

  return (
    <>
      {children}
      {isLoading && <>Loading</>}
      <div ref={observerIntercepter}></div>
    </>
  );
};

export default InfinitePagination;
