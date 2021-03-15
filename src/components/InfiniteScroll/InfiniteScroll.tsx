import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React, {
  useEffect,
  useState,
  useRef,
  ReactNode,
  useCallback,
} from "react";
import { useTranslation } from "react-i18next";

interface OwnProps<T> {
  allItems: T[];
  amountPerLoad: number;
  startAmount?: number;
  renderElement: (element: T, index: number) => ReactNode;
}

type Props<T> = OwnProps<T>;

const InfiniteScroll = <T,>({
  allItems,
  amountPerLoad,
  startAmount,
  renderElement,
}: Props<T>): JSX.Element => {
  const { t } = useTranslation("common");
  const [renderList, setRenderList] = useState<T[]>([]);

  const [currentShowAmount, setCurrentShowAmount] = useState(
    startAmount || amountPerLoad
  );

  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newList = allItems.slice(0, currentShowAmount);
    setRenderList(newList);
  }, [currentShowAmount, allItems]);

  const handleObserver = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setCurrentShowAmount((prevState) => prevState + amountPerLoad);
      }
    },
    [amountPerLoad]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  const loadMore = () => {
    setCurrentShowAmount((prevState) => prevState + amountPerLoad);
  };

  const ARE_ALL_ITEMS_LOADED = allItems.length === renderList.length;
  return (
    <Box className="container">
      <Box className="list">
        {renderList.map(renderElement)}

        {!ARE_ALL_ITEMS_LOADED && (
          <Box className="loading" ref={loader}>
            <Button onClick={loadMore}>{t("loadMore")}</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default InfiniteScroll;
