// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Airtable = require('airtable')

const findRecordByValue = async ({ baseId, table, field, value, view }) => {
    var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);
    const theRecords = [];
    await base(table).select({
        maxRecords: 1,
        view: view ? view : "Grid view",
        filterByFormula: `${field}='${value}'`
    }).eachPage(function page(records, next){
        theRecords.push(...records);
        next()
      })
      .catch(err=>{console.error(err); return})
    return theRecords[0];
}

export default async function lyrics(req, res) {
    if (req.query && req.query.user) {
        console.log(JSON.stringify(req.query))
        let result = await findRecordByValue({
            baseId: process.env.AIRTABLE_BASE_ID,
            table: "Users",
            field: "Name",
            value: req.query.user
        })
        res.status(200).json({ result: result })
    }
  }
  
