"use client";

import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import React, { PropsWithChildren, useCallback } from "react";

import styles from "./carousel.module.scss";

export const Carousel = ({ children }: PropsWithChildren): React.ReactElement => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {React.Children.map(children, (child, index) => (
            <div className={styles.embla__slide} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className={classNames(`${styles.embla__prev} rounded-full shadow}`)} onClick={scrollPrev}>
        {"<"}
      </button>
      <button className={classNames(`${styles.embla__next} rounded-full shadow}`)} onClick={scrollNext}>
        {">"}
      </button>
    </div>
  );
};
