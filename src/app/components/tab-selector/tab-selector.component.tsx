"use client";
import React, { useState } from "react";

import { Button } from "@/app/components/ui/button/button.ui";

import styles from "./tab-selector.module.scss";

interface ITabOption {
  id: string;
  label: string;
}

interface ITabSelectorProps {
  options: ITabOption[];
  activeId: string;
  onSelect: (id: string) => void;
}

const categories: ITabOption[] = [
  { id: "celular", label: "celular" },
  { id: "acessorios", label: "acessórios" },
  { id: "tablets", label: "tablets" },
  { id: "notebooks", label: "notebooks" },
  { id: "tvs", label: "tvs" },
  { id: "todos", label: "ver todos" },
];

const TabSelector = ({ options, activeId, onSelect }: ITabSelectorProps): React.ReactElement => {
  
  const formatLabel = (label: string): string => {
    return label.toUpperCase();
  };

  return (
    <div className={styles.tabSelector}>
      {options.map((option) => (
        <Button
          key={option.id}
          className={`${
            activeId === option.id ? styles.active : ""
          }`}
          onClick={() => onSelect(option.id)} 
        >
          {formatLabel(option.label)}
        </Button>
      ))}
    </div>
  );
};


export const TabSelectorRelatedProduct = (): React.ReactElement => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleSelectCategory = (id: string): void => setActiveCategory(id);

  return (
    <TabSelector 
      options={categories}
      activeId={activeCategory}
      onSelect={handleSelectCategory}
    />
  );
};
