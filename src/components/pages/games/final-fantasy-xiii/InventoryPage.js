import { useState } from 'react';
import { ItemsInventory } from './ItemsInventory';
import { WeaponsInventory } from './WeaponsInventory';
import { AccessoriesInventory } from './AccessoriesInventory';
import { ComponentsInventory } from './ComponentsInventory';
import { KeyItemsInventory } from './KeyItemsInventory';
import CursorIcon from '../../../../assets/final-fantasy-xiii/FFXIII_Pointer_White_BG.PNG.webp';
import styles from './InventoryPage.module.css';

export function WeaponsPage({ isViewportNarrow }) {
  const [activeCategory, setActiveCategory] = useState("Items");

  const categories = ["Items", "Weapons", "Accessories", "Components", "Key Items"];

  function handleOnClickCategory(event) {
    const categoryName = event.target.textContent.trim();
    setActiveCategory(categoryName);
  }

  function renderInventoryCategory(category) {
    switch (category) {
      case categories[0]:
        return <ItemsInventory />;
      case categories[1]:
        return <WeaponsInventory />;
      case categories[2]:
        return <AccessoriesInventory />;
      case categories[3]:
        return <ComponentsInventory />;
      case categories[4]:
        return <KeyItemsInventory />;
      default:
        return <></>;
    }
  }

  return (
    <>
      <div className={styles["page-background"]} />
      <div className={styles["page-container"]}>
        <div className={styles["categories-container"]}>
          <div className={`${styles["ruler-title"]} ${styles["end"]}`}>
            Inventory
          </div>
          <div className={styles["ruler"]} />
          <ul className={styles["categories"]}>
            {categories.map(category => (
              <li
                key={category}
                className={`${styles["category"]} ${activeCategory === category ? styles["active"] : ""}`}
                onClick={handleOnClickCategory}
              >
                <img className={styles["category-cursor"]} src={CursorIcon} alt="" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        {renderInventoryCategory(activeCategory)}
      </div>
    </>
  );
}
