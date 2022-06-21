import axios from 'axios'

class UsersServices {
    constructor() {
        this._url = 'https://gorest.co.in/public/v1/'
        this._apiKey = '?access-token=d5c342b3f91afca422ed58f7f80274a4a1d3259c32f680a5e528fdede92d7a42'
    }

    getAllUsers = async () => {
          const res = await axios.get(`${this._url}users/${this._apiKey}`);

          return res.data
    };

    getUser = async (id) => {
        const res = await axios.get(`${this._url}users/${id}${this._apiKey}`);

        return this._transformUser(res)
    }

    _transformUser = (res) => {
        return {
            name: res.data.data.name,
            email: res.data.data.email,
            gender: res.data.data.gender,
            status: res.data.data.status,
        }
    }

    updateUser = async (id , data) => {
        const put = await axios.patch(`${this._url}users/${id}${this._apiKey}`, data)
        
        return put
    }

};

export default UsersServices;