import { useEffect, useState } from 'react';
import { OverboostStars } from './OverboostStars';
import './Weapons.css';

export function Weapons() {
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

  function getCharacterGroups() {
    const groups = [];
    for (let i = 0; i < characters.length; i += 5) {
      groups.push(characters.slice(i, i + 5));
    }
    return groups;
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
    <div className="weapons-container">
      <div className="filters-container">
        <div className="flex-container">
          <div className="flex-item">
            <div className="filter">
              Name
              <input type="text" onChange={handleNameQueryChange} style={{marginLeft: "1rem"}}></input>
            </div>
            <div className="filter">
              <div className="flex-container">
                {getCharacterGroups().map((group, index) => (
                  <div className="flex-item" key={index}>
                    {group.map((character, index) => (
                      <div key={index} style={{whiteSpace: "nowrap"}}>
                        <label>
                          <input type="checkbox" value={character.name} onChange={handleSelectedCharactersChange} />
                          {character.name}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-item">
            <div className="filter">
              Level
              <select defaultValue={selectedWeaponLevel} onChange={e => setSelectedWeaponLevel(e.target.value)} style={{marginLeft: "1rem"}} disabled>
                {Array.from({ length: 120 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div className="filter">
              Overboost
              <select defaultValue={selectedOverboostLevel} onChange={e => setSelectedOverboostLevel(e.target.value)} style={{margin: "0 1rem 0 1rem"}}>
                {Array.from({ length: 11 }, (_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
              <div className="overboost-stars-container">
                <OverboostStars overboostLevel={selectedOverboostLevel} />
              </div>
            </div>
            <div className="filter">
              {elements.map(element => (
                <label key={element.name}>
                  <input
                    type="checkbox"
                    value={element.name}
                    onChange={handleSelectedElementsChange}
                    style={{ display: 'none' }}
                  />
                  <span
                    className={`element-icon ${selectedElements.includes(element.name) ? "selected" : ""}`}
                    title={element.name}
                    style={{backgroundImage: `url(${elementIcons(`./${element.icon}`)})`}}
                  ></span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table style={{width: "100%"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Character</th>
              <th>PATK</th>
              <th>MATK</th>
              <th>HEAL</th>
            </tr>
          </thead>
          <tbody>
            {filteredWeapons.map((weapon, index) => (
              <tr key={index}>
                <td>{weapon.name}</td>
                <td>{weapon.character}</td>
                <td>{getWeaponPatk(weapon, selectedOverboostLevel)}</td>
                <td>{getWeaponMatk(weapon, selectedOverboostLevel)}</td>
                <td>{getWeaponHeal(weapon, selectedOverboostLevel)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
