const BASE_ENDPOINT = 'https://the-one-api.dev/v2/'

const makeRequest = async (search, page, sortBy) => {
  try {
    const response = await fetch(
      `${BASE_ENDPOINT}character?name=/${search}/i&limit=10&page=${page}&sort=${sortBy}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer 49Utg8mE8mwDlRADPtPg',
        },
      }
    )

    return response
  } catch (error) {
    return new Error(error)
  }
}

export { makeRequest }
