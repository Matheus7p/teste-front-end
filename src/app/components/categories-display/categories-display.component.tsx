"use client";

import React, { PropsWithChildren, useState } from "react";

import { TUiIconTypes } from "@/app/components/ui/icon/icon-types.enum";
import { Icon } from "@/app/components/ui/icon/icon.ui";
import { Category } from "@/app/types/categories.type";

import styles from "./categories-display.module.scss";

interface ICategoryImage {
  categoryIcon?: TUiIconTypes;
}

const categories: Category[] = [
  { title: "tecnologia", icon: "Device" },
  { title: "supermercado", icon: "Market" },
  { title: "bebidas", icon: "Whiskey" },
  { title: "ferramentas", icon: "Tools" },
  { title: "saúde", icon: "Health" },
  { title: "Esportes e Fitness", icon: "Run" },
  { title: "Moda", icon: "Fashion" },
];


export const CategoryCard = ({ children }: PropsWithChildren): React.ReactElement => {
  return (
    <div>{children}</div>
  );
};


export const CategoryImage = ({ categoryIcon }: ICategoryImage): React.ReactElement => {
  if(!categoryIcon) return <></>;

  return (
    <Icon type={categoryIcon}/> 
  );
};
 

export const CategoryTitle = ({ children }: PropsWithChildren): React.ReactElement => {
  return (
    <h4>{children}</h4>
  );
};
 
export const CategoriesDisplayToHome = (): React.ReactElement => {
  const [ activeCategory, setActiveCategory ] = useState<string>(categories[0].title);
  const handleCategoryClick = (categoryTitle: string): void => setActiveCategory(categoryTitle);

  return (
    <section className={styles.categoriesDisplayToHome}>
      {categories.map((category) => (
        <div key={category.title}
          className={`
            ${styles.categoryItem} 
            ${activeCategory === category.title ? styles.active : ""}
          `} 
          onClick={() => handleCategoryClick(category.title)}>
          <CategoryCard>
            <CategoryImage categoryIcon={category.icon}/>
          </CategoryCard>
          <CategoryTitle>{category.title}</CategoryTitle>
        </div>
      ))}
    </section>
  );
};
 
