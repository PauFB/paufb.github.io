import { useEffect, useState } from 'react';
import { OverboostStars } from './OverboostStars';
import './Weapons.css';

export function Weapons({ isViewportNarrow }) {
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
    <div className="weapons-page__container">
      <div className="filters-container">
        <div className={`filters-container__row ${isViewportNarrow ? "filters-container__row--narrow" : ""}`}>
          <div className="filters-container__column">
            <div className="filter">
              <div className="filter-name">
                Name
                <input type="text" className="filter-name__input" onChange={handleNameQueryChange} />
              </div>
            </div>
            <div className="filter">
              <div className="filter-characters">
                {Object.entries(characters).map(([characterName, character]) => (
                  <label className={`filter-characters__character ${selectedCharacters.includes(characterName) ? "filter-characters__character--selected" : ""}`} key={characterName}>
                    <input
                      type="checkbox"
                      value={characterName}
                      onChange={handleSelectedCharactersChange}
                      style={{ display: 'none' }}
                    />
                    <img className="filter-characters__character__icon" src={character.icon} title={characterName} alt="" />
                    <div className="filter-characters__character__name">
                      {characterName}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="filters-container__column">
            <div className="filter">
              <div className="filter-level">
                Level
                <select defaultValue={selectedWeaponLevel} onChange={e => setSelectedWeaponLevel(e.target.value)} disabled>
                  {[...Array(120)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                </select>
              </div>
            </div>
            <div className="filter">
              <div className="filter-overboost">
                Overboost
                <select defaultValue={selectedOverboostLevel} onChange={e => setSelectedOverboostLevel(e.target.value)}>
                  <option value="0">0</option>
                  <option value="6">6</option>
                  <option value="10">10</option>
                </select>
                <div className="filter-overboost__stars">
                  <OverboostStars overboostLevel={selectedOverboostLevel} />
                </div>
              </div>
            </div>
            <div className="filter">
              <div className="filter-elements">
                {Object.entries(elements).map(([elementName, element]) => (
                  <label className={`filter-elements__element ${selectedElements.includes(elementName) ? "filter-elements__element--selected" : ""}`} key={elementName}>
                    <input
                      type="checkbox"
                      value={elementName}
                      onChange={handleSelectedElementsChange}
                      style={{ display: 'none' }}
                    />
                    <span
                      className="filter-elements__element__icon"
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
      <div className="table-decoration">
        <div className="table-container">
          <table className="table-container__table">
            <colgroup>
              <col style={{ width: "calc(100% / 6)" }} />
              <col style={{ width: "calc(100% / 12)" }} />
              <col style={{ width: "calc(100% / 12)" }} />
              <col style={{ width: "calc(100% / 12)" }} />
              <col style={{ width: "calc(100% / 12)" }} />
              <col style={{ width: "calc(100% / 2)" }} />
            </colgroup>
            <thead>
              <tr className="table-container__table__header__row">
                <th onClick={() => handleOnClickColumnSorting("weapon")} className="table-container__table__header--sortable">
                  <div className="table-container__table__header__cell table-container__table__header__cell--sortable">
                    Weapon {renderColumnSortIcon("weapon")}
                  </div>
                </th>
                <th>
                  <div className="table-container__table__header__cell">
                    Element
                  </div>
                </th>
                <th onClick={() => handleOnClickColumnSorting("pAtk")} className="table-container__table__header--sortable">
                  <div className="table-container__table__header__cell table-container__table__header__cell--sortable">
                    PATK {renderColumnSortIcon("pAtk")}
                  </div>
                </th>
                <th onClick={() => handleOnClickColumnSorting("mAtk")} className="table-container__table__header--sortable">
                  <div className="table-container__table__header__cell table-container__table__header__cell--sortable">
                    MATK {renderColumnSortIcon("mAtk")}
                  </div>
                </th>
                <th onClick={() => handleOnClickColumnSorting("heal")} className="table-container__table__header--sortable">
                  <div className="table-container__table__header__cell table-container__table__header__cell--sortable">
                    HEAL {renderColumnSortIcon("heal")}
                  </div>
                </th>
                <th>
                  <div className="table-container__table__header__cell">
                    C. Ability
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(filteredWeapons).map(([weaponName, weapon]) => (
                <tr className="table-container__table__row" key={weaponName}>
                  <td className="table-container__table__cell table-container__table__cell--nowrap">
                    <div className="table-container__table__cell__weapon-container">
                      <div className="table-container__table__cell__weapon-container__row">
                        <div className="table-container__table__cell__weapon-container__column">
                          <img src={characters[weapon.character].icon}
                            className="table-container__table__cell__weapon-container__character"
                            title={weapon.character}
                            alt=""
                          />
                        </div>
                        <div className="table-container__table__cell__weapon-container__column">
                          <div>
                            {weaponName}
                          </div>
                          <div>
                            <OverboostStars overboostLevel={selectedOverboostLevel} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="table-container__table__cell table-container__table__cell--centered">
                    <img src={elementIcons(`./${elements[weapon.element].icon}`)}
                      className="table-container__table__cell__element"
                      title={weapon.element}
                      alt=""
                    />
                  </td>
                  <td className="table-container__table__cell table-container__table__cell--centered">
                    {getWeaponPatk(weapon, selectedOverboostLevel)}
                  </td>
                  <td className="table-container__table__cell table-container__table__cell--centered">
                    {getWeaponMatk(weapon, selectedOverboostLevel)}
                  </td>
                  <td className="table-container__table__cell table-container__table__cell--centered">
                    {getWeaponHeal(weapon, selectedOverboostLevel)}
                  </td>
                  <td className="table-container__table__cell">
                    <div className="table-container__table__cell__c-ability">
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
  );
}
