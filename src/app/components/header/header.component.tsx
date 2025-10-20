"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, ReactElement, useState } from "react";


import { Button } from "@/app/components/ui/button/button.ui";
import { Divider } from "@/app/components/ui/divider/divider.ui";
import { Icon } from "@/app/components/ui/icon/icon.ui";
import { Input } from "@/app/components/ui/input/input.ui";
import { Category } from "@/app/types/categories.type";

import styles from "./header.module.scss";

interface IHeaderNavProps {
  categories?: Category[];
  activeCategory?: string;
  onSelect?: (title: string) => void;
  children?: React.ReactNode;
}

type ComponentsProps = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

const categories: Category[] = [
  { title: "todas as categorias" },
  { title: "supermercado" },
  { title: "livros" },
  { title: "moda" },
  { title: "lançamentos" },
  { title: "ofertas do dia" },
  { title: "assinatura", icon: "CrownSimple" },
];


export const HeaderTop = ({ children, ...props }: ComponentsProps):ReactElement => {
  return ( 
    <div className={styles.headerTop} {...props}>
      {children}
    </div> 
  );
};

export const HeaderContent = ({ children, ...props }: ComponentsProps):ReactElement => {
  return ( 
    <div className={styles.headerContent} {...props}>
      {children}
    </div> 
  );
};


export const HeaderNav = ({ categories, activeCategory, onSelect, children }: IHeaderNavProps):ReactElement => {
  const renderCategories = ():React.ReactElement => (
    <ul> 
      {categories?.map((category) => (
        <li key={category.title} > 
          <Link
            href="#"
            className={classNames(
              {
                [styles.active]: category.title === activeCategory,
              },
            )}
            onClick={(e) => {
              e.preventDefault();
              onSelect?.(category.title);
            }}
            aria-current={category.title === activeCategory ? "page" : undefined}
          > 
            {category.icon && (
              <Icon type={category.icon}/>
            )}
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={styles.nav}> 
      {categories ? renderCategories() : children}
    </nav>
  );
};


export const Header = ():ReactElement => {
  const [ activeCategory, setActiveCategory ] = useState<string>(categories[5].title);
  return ( 
    <header>
      <HeaderTop>
        <p>
          <Icon type="ShieldCheck" />compra <span > 100% segura</span>
        </p>
        <p>
          <Icon type="Truck" /><span >Frete grátis</span> acima de R$ 200 
        </p>
        <p>
          <Icon type="CreditCard" /><span >Parcele</span> suas compras
        </p>
      </HeaderTop>
      <Divider />
      <HeaderContent>
        <Image src="/images/Logo.svg" alt="Logo econverse" width={139} height={41}/>
           
        <form>
          <Input variant="search" type="search" placeholder="O que você está buscando?"/>
          <Icon type="MagnifyingGlass" />
        </form>

        <div>
          <Button>
            <Icon type="Expand" />
          </Button>
          <Button>
            <Icon type="Heart" />
          </Button>
          <Button>
            <Icon type="UserCircle" />
          </Button>
          <Button>
            <Icon type="ShoppingCart" />
          </Button>
        </div> 
      </HeaderContent>
      <Divider/>
      <HeaderNav categories={categories} activeCategory={activeCategory} onSelect={(title) => setActiveCategory(title)}> 

      </HeaderNav>
    </header>
  );
};
 
