import axios from "axios"

interface Sample {

}

export const fetchSamples = async ({searchInfo = {}}):Promise<Sample | undefined>  => {
  try {
    const url = '/sample'

    const response = await axios.get(url, {
      params: {
        searchInfo: searchInfo
      }
    })

    return response;
  } catch (error) {
    console.error(error.response);
  }
}
