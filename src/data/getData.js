import axios from "axios"

const fetchAll = async (path) => {

    return await axios.get(path
    )

}

export default fetchAll