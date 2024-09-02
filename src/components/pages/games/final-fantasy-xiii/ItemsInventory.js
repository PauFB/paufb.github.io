import { useEffect, useState } from 'react';
import CursorIcon from '../../../../assets/final-fantasy-xiii/FFXIII_Pointer_White_BG.PNG.webp';
import styles from './InventoryPage.module.css';

export function ItemsInventory() {
  const [items, setItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    import('./itemsData.js').then(itemsModule => {
      setItems(itemsModule.itemsData);
    });
  }, []);

  function handleOnClickItem(event) {
    const selectedItemName = event.target.textContent.trim();
    setSelectedItem(selectedItemName);
  }

  return (
    <div className={styles["table-container"]}>
      <div className={styles["item-description"]}>
        {selectedItem ? items[selectedItem].effect : "View consumable items in the party inventory."}
      </div>
      <div className={styles["ruler-one"]} />
      <div className={styles["ruler-two"]} />
      <div className={`${styles["ruler-title"]} ${styles["start"]}`}>
        Inventory
      </div>
      <div className={styles["ruler"]} />
      <table className={styles["table"]}>
        <colgroup>
          <col />
          <col style={{ width: "2.5rem" }} />
          <col />
          <col style={{ width: "2.5rem" }} />
        </colgroup>
        <thead>
          <tr className={styles["table-header-row"]}>
            <th><div className={styles["item-column-name"]}>Item</div></th>
            <th><div className={styles["quantity-column-name"]}>Quantity</div></th>
            <th />
            <th><div className={styles["quantity-column-name"]}>Quantity</div></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([itemName, item], index) => {
            const nextItemName = Object.keys(items)[index + 1];
            if (index % 2 === 0) {
              return (
                <tr className={styles["table-row"]} key={itemName + nextItemName}>
                  <td onClick={handleOnClickItem}>
                    <div className={`${styles["item-name"]} ${selectedItem === itemName ? styles["active"] : ""}`}>
                      <img className={styles["item-icon"]} src={""} alt="" />
                      <img className={styles["item-cursor"]} src={CursorIcon} alt="" />
                      {itemName}
                    </div>
                  </td>
                  <td>
                    <div className={styles["item-quantity"]}>
                      01
                    </div>
                  </td>
                  <td onClick={handleOnClickItem}>
                    <div className={`${styles["item-name"]} ${selectedItem === nextItemName ? styles["active"] : ""}`}>
                      <img className={styles["item-icon"]} src={""} alt="" />
                      <img className={styles["item-cursor"]} src={CursorIcon} alt="" />
                      {nextItemName}
                    </div>
                  </td>
                  <td>
                    <div className={styles["item-quantity"]}>
                      {nextItemName ? "01" : ""}
                    </div>
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
