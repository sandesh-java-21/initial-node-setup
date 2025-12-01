export const applyPagination = async (query, page, limit) => {
  page = parseInt(page, 10) || 1; // Default page = 1
  limit = parseInt(limit, 10) || 10; // Default limit = 10
  const skip = (page - 1) * limit;

  const [results, totalCount] = await Promise.all([
    query.skip(skip).limit(limit),
    query.model.countDocuments(query.getQuery()), // Get the total count of documents
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return {
    results,
    totalCount,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
};

export const buildPaginatedResponse = (results, paginationData) => {
  return {
    pagination: {
      totalCount: paginationData.totalCount,
      totalPages: paginationData.totalPages,
      currentPage: paginationData.currentPage,
      //   hasNextPage: paginationData.hasNextPage,
      //   hasPreviousPage: paginationData.hasPreviousPage,
    },
    rows: results,
  };
};

export const applyAggregationPagination = async (
  model,
  pipeline,
  page,
  limit
) => {
  page = parseInt(page, 10) || 1; // Default page = 1
  limit = parseInt(limit, 10) || 10; // Default limit = 10
  const skip = (page - 1) * limit;

  // Create a pipeline for counting total documents
  // We use the original pipeline without $skip and $limit, then add $count
  const countPipeline = [...pipeline, { $count: "totalCount" }];

  // Create a pipeline for getting paginated results
  const resultsPipeline = [...pipeline, { $skip: skip }, { $limit: limit }];

  // Execute both pipelines in parallel
  const [results, countResult] = await Promise.all([
    model.aggregate(resultsPipeline),
    model.aggregate(countPipeline),
  ]);

  // Extract total count (countResult will be empty array if no documents match)
  const totalCount = countResult.length > 0 ? countResult[0].totalCount : 0;
  const totalPages = Math.ceil(totalCount / limit);

  return {
    results,
    totalCount,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
};
