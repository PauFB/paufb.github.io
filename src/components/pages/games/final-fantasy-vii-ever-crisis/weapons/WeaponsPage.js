import { useEffect, useState } from 'react';
import { OverboostStars } from './OverboostStars';
import styles from './WeaponsPage.module.css';

export function WeaponsPage({ isViewportNarrow }) {
  const elementIcons = require.context("../../../../../assets/final-fantasy-vii-ever-crisis/elements");
  const [weapons, setWeapons] = useState({});
  const [elements, setElements] = useState({});
  const [characters, setCharacters] = useState({});
  const [cAbilities, setCAbilities] = useState([]);
  const [filteredWeapons, setFilteredWeapons] = useState({});
  const [nameQuery, setNameQuery] = useState("");
  const [selectedElements, setSelectedElements] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [selectedWeaponLevel, setSelectedWeaponLevel] = useState(120);
  const [selectedOverboostLevel, setSelectedOverboostLevel] = useState(10);
  const [sortConfig, setSortConfig] = useState({ column: null, direction: null });

  useEffect(() => {
    Promise.all([
      import('../weaponsData.js'),
      import('../elementsData.js'),
      import('../charactersData.js'),
      import('../cAbilitiesData.js')
    ]).then(([weaponsModule, elementsModule, charactersModule, cAbilitiesModule]) => {
      setWeapons(weaponsModule.weaponsData);
      setElements(elementsModule.elementsData);
      setCharacters(charactersModule.charactersData);
      setCAbilities(cAbilitiesModule.cAbilitiesData);
    });
  }, []);

  useEffect(() => {
    const lowerCaseNameQuery = nameQuery.toLowerCase();
    const hasSelectedCharacters = selectedCharacters.length > 0;
    const hasSelectedElements = selectedElements.length > 0;
    let filteredEntries = Object.entries(weapons).filter(([name, weapon]) =>
      name.toLowerCase().includes(lowerCaseNameQuery)
      && (!hasSelectedCharacters || selectedCharacters.includes(weapon.character))
      && (!hasSelectedElements || selectedElements.includes(weapon.element))
    );
    if (sortConfig.column && sortConfig.direction) {
      filteredEntries = filteredEntries.sort(([nameA, weaponA], [nameB, weaponB]) => {
        if (["pAtk", "mAtk", "heal"].includes(sortConfig.column)) {
          const diff = weaponA.fiveStarLevel120[sortConfig.column] - weaponB.fiveStarLevel120[sortConfig.column];
          return sortConfig.direction === "asc" ? diff : -diff;
        } else if (sortConfig.column === "weapon") {
          const comparison = nameA.localeCompare(nameB, "en", { sensitivity: "base" });
          return sortConfig.direction === "asc" ? comparison : -comparison;
        }
        return 0;
      });
    }
    setFilteredWeapons(Object.fromEntries(filteredEntries));
  }, [weapons, nameQuery, selectedCharacters, selectedElements, sortConfig]);

  function handleNameQueryChange(event) {
    const query = event.target.value;
    setNameQuery(query);
  }

  function handleSelectedCharactersChange(event) {
    const characterName = event.target.value;
    setSelectedCharacters(prevState =>
      event.target.checked
        ? [...prevState, characterName]
        : prevState.filter(c => c !== characterName)
    );
  }

  function handleSelectedElementsChange(event) {
    const elementName = event.target.value;
    setSelectedElements(prevState =>
      event.target.checked
        ? [...prevState, elementName]
        : prevState.filter(e => e !== elementName)
    );
  }

  function handleOnClickColumnSorting(column) {
    if (!column) return;
    let direction = "desc";
    if (sortConfig.column === column) {
        direction = sortConfig.direction === "desc" ? "asc" : 
                    sortConfig.direction === "asc"  ? null  :
                                                      "desc";
    }
    setSortConfig({ column, direction });
  }

  function renderColumnSortIcon(column) {
    if (sortConfig.column !== column) return <span style={{ marginLeft: "0.25rem" }} className="arrow-up-down" />;
    return sortConfig.direction === "desc" ? <span style={{ marginLeft: "0.25rem" }} className="arrow-down" />    :
           sortConfig.direction === "asc"  ? <span style={{ marginLeft: "0.25rem" }} className="arrow-up" />      :
                                             <span style={{ marginLeft: "0.25rem" }} className="arrow-up-down" /> ;
  }

  function getWeaponPatk(weapon, overboostLevel) {
    const overboostLevelMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
    const basePAtk = weapon.fiveStarLevel120.pAtk;
    let additionalPAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalPAtk += basePAtk * overboostLevelMultipliers[i];
    }
    return Math.floor(basePAtk + additionalPAtk);
  }

  function getWeaponMatk(weapon, overboostLevel) {
    const overboostLevelMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
    const baseMAtk = weapon.fiveStarLevel120.mAtk;
    let additionalMAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalMAtk += baseMAtk * overboostLevelMultipliers[i];
    }
    return Math.floor(baseMAtk + additionalMAtk);
  }

  function getWeaponHeal(weapon, overboostLevel) {
    const overboostLevelMultipliers = [0, 0.1, 0.05, 0.05, 0.04, 0.04, 0.04, 0.02, 0.02, 0.02, 0.02];
    const baseHeal = weapon.fiveStarLevel120.heal;
    let additionalHeal = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalHeal += baseHeal * overboostLevelMultipliers[i];
    }
    return Math.floor(baseHeal + additionalHeal);
  }

  function getWeaponCAbility(weapon, overboostLevel) {
    const cAbility = cAbilities[weapon.cAbility];
    const valuesByOverboost = cAbility.valuesByOverboost[overboostLevel];
    return cAbility.description.replace(/{{(.*?)}}/g, (_, key) => valuesByOverboost[key]);
  }

  return (
    <>
      <div className={styles["page-background"]} />
      <div className={styles["page-container"]}>
        <div className={styles["filters-container"]}>
          <div className={`${styles["filters-container-row"]} ${isViewportNarrow ? styles["filters-container-row--narrow"] : ""}`}>
            <div className={styles["filters-container-column"]}>
              <div className={styles["filter"]}>
                <div className={styles["filter-name"]}>
                  Name
                  <input type="text" className={styles["filter-name__input"]} onChange={handleNameQueryChange} />
                </div>
              </div>
              <div className={styles["filter"]}>
                <div className={styles["filter-characters"]}>
                  {Object.entries(characters).map(([characterName, character]) => (
                    <label className={`${styles["filter-characters__character"]} ${selectedCharacters.includes(characterName) ? styles["character--selected"] : ""}`} key={characterName}>
                      <input
                        type="checkbox"
                        value={characterName}
                        onChange={handleSelectedCharactersChange}
                        style={{ display: "none" }}
                      />
                      <img className={styles["filter-characters__character__icon"]} src={character.icon} title={characterName} alt="" />
                      <div className={styles["filter-characters__character__name"]}>
                        {characterName}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles["filters-container-column"]}>
              <div className={styles["filter"]}>
                <div className={styles["filter-level"]}>
                  Level
                  <select defaultValue={selectedWeaponLevel} onChange={e => setSelectedWeaponLevel(e.target.value)} disabled>
                    {[...Array(120)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                  </select>
                </div>
              </div>
              <div className={styles["filter"]}>
                <div className={styles["filter-overboost"]}>
                  Overboost
                  <select defaultValue={selectedOverboostLevel} onChange={e => setSelectedOverboostLevel(e.target.value)}>
                    <option value="0">0</option>
                    <option value="6">6</option>
                    <option value="10">10</option>
                  </select>
                  <div className={styles["filter-overboost__stars"]}>
                    <OverboostStars overboostLevel={selectedOverboostLevel} />
                  </div>
                </div>
              </div>
              <div className={styles["filter"]}>
                <div className={styles["filter-elements"]}>
                  {Object.entries(elements).map(([elementName, element]) => (
                    <label className={`${styles["filter-elements__element"]} ${selectedElements.includes(elementName) ? styles["element--selected"] : ""}`} key={elementName}>
                      <input
                        type="checkbox"
                        value={elementName}
                        onChange={handleSelectedElementsChange}
                        style={{ display: "none" }}
                      />
                      <span
                        className={styles["filter-elements__element__icon"]}
                        title={elementName}
                        style={{ backgroundImage: `url(${elementIcons(`./${element.icon}`)})` }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["table-decoration"]}>
          <div className={styles["table-container"]}>
            <table className={styles["table"]}>
              <colgroup>
                <col style={{ width: "calc(100% / 6)" }} />
                <col style={{ width: "calc(100% / 12)" }} />
                <col style={{ width: "calc(100% / 12)" }} />
                <col style={{ width: "calc(100% / 12)" }} />
                <col style={{ width: "calc(100% / 12)" }} />
                <col style={{ width: "calc(100% / 2)" }} />
              </colgroup>
              <thead>
                <tr className={styles["table-head-row"]}>
                  <th onClick={() => handleOnClickColumnSorting("weapon")} className={styles["table-header--sortable"]}>
                    <div className={styles["table-header-cell"]}>
                      Weapon {renderColumnSortIcon("weapon")}
                    </div>
                  </th>
                  <th>
                    <div className={styles["table-header-cell"]}>
                      Element
                    </div>
                  </th>
                  <th onClick={() => handleOnClickColumnSorting("pAtk")} className={styles["table-header--sortable"]}>
                    <div className={styles["table-header-cell"]}>
                      PATK {renderColumnSortIcon("pAtk")}
                    </div>
                  </th>
                  <th onClick={() => handleOnClickColumnSorting("mAtk")} className={styles["table-header--sortable"]}>
                    <div className={styles["table-header-cell"]}>
                      MATK {renderColumnSortIcon("mAtk")}
                    </div>
                  </th>
                  <th onClick={() => handleOnClickColumnSorting("heal")} className={styles["table-header--sortable"]}>
                    <div className={styles["table-header-cell"]}>
                      HEAL {renderColumnSortIcon("heal")}
                    </div>
                  </th>
                  <th>
                    <div className={styles["table-header-cell"]}>
                      C. Ability
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(filteredWeapons).map(([weaponName, weapon]) => (
                  <tr className={styles["table-row"]} key={weaponName}>
                    <td className={`${styles["table-data"]} ${styles["table-data--nowrap"]}`}>
                      <div className={styles["table-data-weapon-container-row"]}>
                        <div className={styles["table-data-weapon-container-column"]}>
                          <img src={characters[weapon.character].icon}
                            className={styles["table-data-weapon-container-character"]}
                            title={weapon.character}
                            alt=""
                          />
                        </div>
                        <div className={styles["table-data-weapon-container-column"]}>
                          <div>
                            {weaponName}
                          </div>
                          <div>
                            <OverboostStars overboostLevel={selectedOverboostLevel} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`${styles["table-data"]}} ${styles["table-data--centered"]}`}>
                      <img src={elementIcons(`./${elements[weapon.element].icon}`)}
                        className={styles["table-data-element"]}
                        title={weapon.element}
                        alt=""
                      />
                    </td>
                    <td className={`${styles["table-data"]} ${styles["table-data--centered"]}`}>
                      {getWeaponPatk(weapon, selectedOverboostLevel)}
                    </td>
                    <td className={`${styles["table-data"]} ${styles["table-data--centered"]}`}>
                      {getWeaponMatk(weapon, selectedOverboostLevel)}
                    </td>
                    <td className={`${styles["table-data"]} ${styles["table-data--centered"]}`}>
                      {getWeaponHeal(weapon, selectedOverboostLevel)}
                    </td>
                    <td className={styles["table-data"]}>
                      <div className={styles["table-data-c-ability"]}>
                        {getWeaponCAbility(weapon, selectedOverboostLevel)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
