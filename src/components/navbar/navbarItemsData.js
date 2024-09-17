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
        externalUrl: "https://paufb.github.io/ffviiec/",
        icon: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/2484110/0c340f0216909506616c6467eb30d06c91ddf5ac.ico"
      },
      {
        title: "FINAL FANTASY XIII",
        url: "final-fantasy-xiii",
        icon: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/292120/97e7faa802a514087c2674746835d462f7e65dbe.ico"
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
