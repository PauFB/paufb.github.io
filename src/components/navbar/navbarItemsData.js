export const navbarItemsData = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Games",
    url: "games",
    submenu: [
      {
        title: "FINAL FANTASY VII EVER CRISIS",
        url: "final-fantasy-vii-ever-crisis",
        submenu: [
          {
            title: "Weapons",
            url: "weapons"
          }
        ]
      }
    ]
  }
];

function buildFullUrls(items, parentUrl = "") {
  return items.map(item => {
    const fullUrl = `${parentUrl}${item.url}`.replace(/\/$/, "");
    const updatedItem = { ...item, url: fullUrl };

    if (item.submenu) {
      updatedItem.submenu = buildFullUrls(item.submenu, `${fullUrl}/`);
    }

    return updatedItem;
  });
}

export const navbarItemsDataWithFullUrls = buildFullUrls(navbarItemsData);
