export const navbarItemsData = [
  {
    title: "Home",
    url: "/"
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