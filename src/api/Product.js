import api from './index';

const headers = { 'X-access-token': localStorage.getItem('userToken') };

export default {
   getProducts : async (params) => {
        const res = await api.get('/product/').catch(e =>{console.log(e.message)});
        console.log(res);
        return res.data;
    },

    getCategories : async (params) => {
        const res = await api.get('/product/productcategory').catch(e =>{console.log(e.message)});
        console.log(res);
        return res.data;
    },

    getSubCategories : async (params) => {
        const res = await api.get('/product/productsubcategory').catch(e =>{console.log(e.message)});
        console.log(res);
        return res.data;
    },

    getBrands : async (params) => {
        const res = await api.get('/product/productbrands').catch(e =>{console.log(e.message)});
        console.log(res);
        return res.data;
    },
}