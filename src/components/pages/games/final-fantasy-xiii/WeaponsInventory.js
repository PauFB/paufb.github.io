import { useEffect, useState } from 'react';
import CursorIcon from '../../../../assets/final-fantasy-xiii/FFXIII_Pointer_White_BG.PNG.webp';
import styles from './InventoryPage.module.css';

export function WeaponsInventory() {
  const [weapons, setWeapons] = useState({});
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const equippedWeapons = ["Blazefire Saber", "Vega 42s", "Wild Bear", "Airwing", "Binding Rod", "Bladed Lance"];

  useEffect(() => {
    import('./weaponsData.js').then(weaponsModule => {
      const entries = Object.entries(weaponsModule.weaponsData);
      for (let i = 0; i < entries.length; i += 6) {
        [entries[i + 1], entries[i + 3]] = [entries[i + 3], entries[i + 1]];
        [entries[i + 2], entries[i + 3]] = [entries[i + 3], entries[i + 2]];
        [entries[i + 3], entries[i + 4]] = [entries[i + 4], entries[i + 3]];
      }
      const sortedEntries = Object.fromEntries(entries);
      setWeapons(sortedEntries);
    });
  }, []);

  function renderLevelStar(weaponName) {
    return equippedWeapons.includes(weaponName) ? <svg fill="black" height="1rem" width="1rem" viewBox="0 0 512 512">
                                                    <polygon points="512,207.9 315.1,207.9 256,11 196.9,207.9 0,207.9 157.5,316.2 98.5,503.3 256,404.8 413.5,503.3 354.5,316.2 "/>
                                                  </svg>
                                                : <></>;
  }

  function renderEquippedCheckmark(weaponName) {
    return equippedWeapons.includes(weaponName) ? <svg width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" fill="white" />
                                                  </svg>
                                                : <></>;
  }

  return (
    <div className={styles["table-container"]}>
      <div className={styles["item-description"]}>
        {selectedWeapon ? weapons[selectedWeapon].description : "View weapons in the party inventory."}
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
            <th><div className={styles["quantity-column-name"]}>Equipped</div></th>
            <th />
            <th><div className={styles["quantity-column-name"]}>Equipped</div></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(weapons).map(([weaponName, weapon], index) => {
            const nextWeaponName = Object.keys(weapons)[index + 1];
            if (index % 2 === 0) {
              return (
                <tr className={styles["table-row"]} key={weaponName + nextWeaponName}>
                  <td onClick={() => setSelectedWeapon(weaponName)}>
                    <div className={`${styles["item-name"]} ${selectedWeapon === weaponName ? styles["active"] : ""}`}>
                      <img className={styles["item-icon"]} src={""} alt="" />
                      <img className={styles["item-cursor"]} src={CursorIcon} alt="" />
                      {weaponName} {renderLevelStar(weaponName)}
                    </div>
                  </td>
                  <td>
                    <div className={styles["item-quantity"]}>
                      {renderEquippedCheckmark(weaponName)}
                    </div>
                  </td>
                  <td onClick={() => setSelectedWeapon(nextWeaponName)}>
                    <div className={`${styles["item-name"]} ${selectedWeapon === nextWeaponName ? styles["active"] : ""}`}>
                      <img className={styles["item-icon"]} src={""} alt="" />
                      <img className={styles["item-cursor"]} src={CursorIcon} alt="" />
                      {nextWeaponName} {renderLevelStar(nextWeaponName)}
                    </div>
                  </td>
                  <td>
                    <div className={styles["item-quantity"]}>
                      {renderEquippedCheckmark(nextWeaponName)}
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
