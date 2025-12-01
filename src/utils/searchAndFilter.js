export const applySearch = (query, searchTerm, searchFields) => {
  if (searchTerm && searchFields.length) {
    const regex = new RegExp(searchTerm, "i"); // 'i' for case-insensitive search

    const searchConditions = searchFields.map((field) => ({
      [field]: { $regex: regex },
    }));
    query.$or = searchConditions;
  }

  return query;
};

export const applyFilter = (query, filters) => {
  if (filters && filters.businessCategory) {
    query.businessCategory = filters.businessCategory;
  }
  return query;
};

export const buildSearchStage = (searchTerm, searchFields) => {
  if (!searchTerm || !searchFields.length) {
    return null;
  }

  const regex = new RegExp(searchTerm, "i");

  const searchConditions = searchFields.map((field) => ({
    [field]: { $regex: regex },
  }));

  return {
    $match: {
      $or: searchConditions,
    },
  };
};
