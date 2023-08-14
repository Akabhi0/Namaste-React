const fitlerList = (data) => {
    const filterData = data?.filter((e) => e.info.avgRating > 4);
    return filterData;
};

const searchList = (data, searchText) => {
    const filterData =  data?.filter((e) => e?.info?.name?.toLowerCase().includes(searchText));
    return filterData;
};

export { fitlerList, searchList };
