import {
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

  //Observer allow the possibility to look when element 'observerTarget' come into view
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPage((page) => page + 1);
      }
    })
  );

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    if (observerIntercepter.current && page < numberOfPages && !isLoading) {
      observer.current.observe(observerIntercepter.current);
    } else if (observerIntercepter.current && isLoading) {
      observer.current.unobserve(observerIntercepter.current);
    }

    return () => {
      if (observerIntercepter.current) {
        observer.current.unobserve(observerIntercepter.current);
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
