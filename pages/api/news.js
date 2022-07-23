import axios from "axios";

export default async function handler(req, res) {
    const options = {
        method: 'GET',
        url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news',
        params: { pair_ID: '1057391', page: req.query.page, time_utc_offset: '28800', lang_ID: '1' },
        headers: {
            'X-RapidAPI-Key': 'f6e3012224msh989d04bf16d703fp14b80ajsn5586002f94ec',
            'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
        }
    };

    axios
        .request(options)
        .then(function (response) {
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });

}