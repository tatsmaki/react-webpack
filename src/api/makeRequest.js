const BASE_ENDPOINT = 'https://the-one-api.dev/v2/'

const makeRequest = async (search, page) => {
  try {
    const response = await fetch(
      `${BASE_ENDPOINT}character?name=/${search}/i&limit=10&page=${page}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer 49Utg8mE8mwDlRADPtPg',
        },
      }
    )
    const json = await response.json()

    return json
  } catch (error) {
    throw new Error(error)
  }
}

export { makeRequest }
