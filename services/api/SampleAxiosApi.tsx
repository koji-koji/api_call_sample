import axios from "axios"

export interface Sample {
  name?: string
}

export const fetchSamples = async ({searchInfo = {}}):Promise<Sample | undefined>  => {
  try {
    const url = '/sample'

    const response = await axios.get<Sample>(url, {
      params: {
        searchInfo: searchInfo
      }
    })

    return response.data;
  } catch (error) {
    console.error(error.response);
  }
}
