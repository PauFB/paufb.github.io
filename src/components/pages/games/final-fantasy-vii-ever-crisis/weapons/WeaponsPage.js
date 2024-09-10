import { useEffect, useState } from 'react';
import { ATBBarCost } from './ATBBarCost';
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
  const [layout, setLayout] = useState("table");

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
        } else if (sortConfig.column === "atbCost") {
          const diff = cAbilities[weaponA.cAbility].atbCost - cAbilities[weaponB.cAbility].atbCost;
          return sortConfig.direction === "asc" ? diff : -diff;
        }
        return 0;
      });
    }
    setFilteredWeapons(Object.fromEntries(filteredEntries));
  }, [weapons, nameQuery, selectedCharacters, selectedElements, sortConfig, cAbilities]);

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

  function getWeaponPAtk(weapon, overboostLevel) {
    const overboostLevelMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
    const basePAtk = weapon.fiveStarLevel120.pAtk;
    let additionalPAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalPAtk += basePAtk * overboostLevelMultipliers[i];
    }
    return Math.floor(basePAtk + additionalPAtk);
  }

  function getWeaponMAtk(weapon, overboostLevel) {
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
    const { description, valuesByOverboost } = cAbilities[weapon.cAbility];
    return description.replace(/\{\{(\w+)\}\}/g, (_, key) => valuesByOverboost[key][overboostLevel]);
  }

  return (
    <>
      <div className={styles["page-background"]} />
      <div className={styles["page-container"]}>
        <div className={styles["filters-container"]}>
          <div className={`${styles["filters-container-row"]} ${isViewportNarrow ? styles["filters-container-row--narrow"] : ""}`}>
            <div className={styles["filters-container-column"]}>
              <div className={styles["filter"]}>
                <div className={styles["filter-characters"]}>
                  {Object.entries(characters).map(([characterName, character]) => (
                    <label className={`${styles["character-toggle"]} ${selectedCharacters.includes(characterName) ? styles["character-toggle--selected"] : ""}`} key={characterName}>
                      <input
                        type="checkbox"
                        value={characterName}
                        onChange={handleSelectedCharactersChange}
                        style={{ display: "none" }}
                      />
                      <img src={character.icon} title={characterName} alt="" />
                      <div className={styles["character-toggle-name"]}>
                        {characterName}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles["filters-container-column"]}>
              <div className={styles["filter"]}>
                <div className={styles["filter-elements"]}>
                  {Object.entries(elements).map(([elementName, element]) => (
                    <label className={`${styles["element-toggle"]} ${selectedElements.includes(elementName) ? styles["element-toggle--selected"] : ""}`} key={elementName}>
                      <input
                        type="checkbox"
                        value={elementName}
                        onChange={handleSelectedElementsChange}
                        style={{ display: "none" }}
                      />
                      <span
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
        <div className={styles["filters-container"]}>
          <div className={`${styles["filters-container-row"]} ${isViewportNarrow ? styles["filters-container-row--narrow"] : ""}`}>
            <div className={styles["filters-container-column"]}>
              <div className={styles["filter-name"]}>
                <svg width="24px" height="24px" viewBox="0 -960 960 960" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                <input type="text" onChange={handleNameQueryChange} placeholder="Search by name" />
              </div>
            </div>
            <div className={styles["level-and-overboost-container"]}>
              <div className={styles["filters-container-column"]}>
                <div className={styles["filter"]}>
                  <div className={styles["filter-level"]}>
                    Level
                    <select defaultValue={selectedWeaponLevel} onChange={e => setSelectedWeaponLevel(e.target.value)} disabled>
                      {[...Array(120)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles["filters-container-column"]}>
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
              </div>
            </div>
          </div>
          <div className={styles["filters-container-row"]}>
            <div className={styles["filter"]}>
              <div className={styles["filter-layout"]}>
                Layout
                <div className={`${styles["layout-table"]} ${layout === "table" ? styles["layout-table--selected"] : ""}`} onClick={() => setLayout("table")}>
                  <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                </div>
                <div className={`${styles["layout-grid"]} ${layout === "grid" ? styles["layout-grid--selected"] : ""}`} onClick={() => setLayout("grid")}>
                  <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
                </div>
              </div>
            </div>
            <div className={styles["statistic"]}>
              <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/></svg>
              {Object.keys(weapons).length}
            </div>
          </div>
        </div>
        <div className={styles["table-decoration"]}>
          {layout === "table" && (
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
                    <th onClick={() => handleOnClickColumnSorting("atbCost")} className={styles["table-header--sortable"]}>
                      <div className={styles["table-header-cell"]}>
                        C. Ability {renderColumnSortIcon("atbCost")}
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
                        {getWeaponPAtk(weapon, selectedOverboostLevel)}
                      </td>
                      <td className={`${styles["table-data"]} ${styles["table-data--centered"]}`}>
                        {getWeaponMAtk(weapon, selectedOverboostLevel)}
                      </td>
                      <td className={`${styles["table-data"]} ${styles["table-data--centered"]}`}>
                        {getWeaponHeal(weapon, selectedOverboostLevel)}
                      </td>
                      <td className={styles["table-data"]}>
                        <div className={styles["c-ability-container"]}>
                          <div className={styles["c-ability-header"]}>
                            <ATBBarCost cost={cAbilities[weapon.cAbility].atbCost} />
                            {weapon.cAbility}
                          </div>
                          <div className={styles["c-ability-separator"]} />
                          <div className={styles["table-data-c-ability"]}>
                            {getWeaponCAbility(weapon, selectedOverboostLevel)}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {layout === "grid" && (
            <div className={styles["grid-container"]}>
              {Object.entries(filteredWeapons).map(([weaponName, weapon]) => (
                <div key={weaponName} className={styles["weapon-grid-entry"]}>
                  <div className={styles["weapon-grid-image"]}>
                    <img src={""} title={weaponName} alt="" />
                    <div className={styles["weapon-grid-image-overboost-stars"]}>
                      <OverboostStars overboostLevel={selectedOverboostLevel} />
                    </div>
                  </div>
                  <div className={styles["weapon-grid-entry-column"]}>
                    {weaponName}
                    <ATBBarCost cost={cAbilities[weapon.cAbility].atbCost} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
