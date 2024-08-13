import { useEffect, useState } from 'react';
import { OverboostStars } from './OverboostStars';
import './Weapons.css';

export function Weapons({ isViewportNarrow }) {
  const elementIcons = require.context("../../../../../assets/final-fantasy-vii-ever-crisis/elements");
  const [weapons, setWeapons] = useState([]);
  const [elements, setElements] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [filteredWeapons, setFilteredWeapons] = useState([]);
  const [nameQuery, setNameQuery] = useState("");
  const [selectedElements, setSelectedElements] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [selectedWeaponLevel, setSelectedWeaponLevel] = useState(120);
  const [selectedOverboostLevel, setSelectedOverboostLevel] = useState(10);

  useEffect(() => {
    Promise.all([
      import('../weaponsData.js'),
      import('../elementsData.js'),
      import('../charactersData.js')
    ]).then(([weaponsModule, elementsModule, charactersModule]) => {
      setWeapons(weaponsModule.weaponsData);
      setElements(elementsModule.elementsData);
      setCharacters(charactersModule.charactersData);
    });
  }, []);

  useEffect(() => {
    setFilteredWeapons(
      weapons.filter(weapon =>
        weapon.name.toLowerCase().includes(nameQuery.toLowerCase())
        && (selectedCharacters.length === 0 || selectedCharacters.includes(weapon.character))
        && (selectedElements.length === 0 || selectedElements.includes(weapon.element))
      )
    );
  }, [weapons, nameQuery, selectedCharacters, selectedElements]);

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

  return (
    <div className="weapons-page__container">
      <div className="filters-container">
        <div className={`filters-container__row ${ isViewportNarrow ? "filters-container__row--narrow" : "" }`}>
          <div className="filters-container__column">
            <div className="filter">
              <div className="filter-name">
                Name
                <input type="text" className="filter-name__input" onChange={handleNameQueryChange} />
              </div>
            </div>
            <div className="filter">
              <div className="filter-characters">
                {characters.map(character => (
                  <label className={`filter-characters__character ${selectedCharacters.includes(character.name) ? "filter-characters__character--selected" : ""}`} key={character.name}>
                    <input
                      type="checkbox"
                      value={character.name}
                      onChange={handleSelectedCharactersChange}
                      style={{ display: 'none' }}
                    />
                    <img className="filter-characters__character__icon" src={character.icon} title={character.name} alt="" />
                    <div className="filter-characters__character__name">
                      {character.name}
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
                  {[...Array(11)].map((_, i) => <option key={i} value={i}>{i}</option>)}
                </select>
                <div className="filter-overboost__stars">
                  <OverboostStars overboostLevel={selectedOverboostLevel} />
                </div>
              </div>
            </div>
            <div className="filter">
              <div className="filter-elements">
                {elements.map(element => (
                  <label className={`filter-elements__element ${selectedElements.includes(element.name) ? "filter-elements__element--selected" : ""}`} key={element.name}>
                    <input
                      type="checkbox"
                      value={element.name}
                      onChange={handleSelectedElementsChange}
                      style={{ display: 'none' }}
                    />
                    <span
                      className="filter-elements__element__icon"
                      title={element.name}
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
              <col style={{ width: "calc(100% / 7)" }} />
              <col style={{ width: "calc(100% / 7)" }} />
              <col style={{ width: "calc(100% / 7)" }} />
              <col style={{ width: "calc(100% / 7)" }} />
              <col style={{ width: "calc(100% / 7)" }} />
              <col style={{ width: "calc(100% / 7)" }} />
              <col style={{ width: "calc(100% / 7)" }} />
            </colgroup>
            <thead>
              <tr>
                <th>Weapon</th>
                <th>Element</th>
                <th>Character</th>
                <th>Overboost</th>
                <th>PATK</th>
                <th>MATK</th>
                <th>HEAL</th>
              </tr>
            </thead>
            <tbody>
              {filteredWeapons.map((weapon, index) => (
                <tr key={index} className="table-container__table__row">
                  <td className="table-container__table__cell">
                    {weapon.name}
                  </td>
                  <td className="table-container__table__cell table-container__table__cell--centered">
                    <img src={elementIcons(`./${elements.find(e => e.name === weapon.element).icon}`)}
                      className="table-container__table__cell__element"
                      title={weapon.element}
                      alt=""
                    />
                  </td>
                  <td className="table-container__table__cell table-container__table__cell--centered">
                    <img src={characters.find(c => c.name === weapon.character).icon}
                      className="table-container__table__cell__character"
                      title={weapon.character}
                      alt=""
                    />
                  </td>
                  <td className="table-container__table__cell table-container__table__cell--centered">
                    <OverboostStars overboostLevel={selectedOverboostLevel} />
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
