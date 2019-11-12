const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {

    const queryText = `SELECT * 
                        FROM "vendor";`;
    pool.query(queryText,)
    .then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting vendors', error);
        res.sendStatus(500);
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const companyName = req.body.companyName;
    const phone = req.body.phoneNumber;
    const email = req.body.email;
    const website = req.body.website;
    const vendorTypeId = req.body.vendorTypeId;
    const queryText = `INSERT INTO "vendor"
                        ("firstName", "lastName", "companyName", "phoneNumber", "email", "website", "vendor_id")
                        VALUES
                        ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(queryText, [firstName, lastName, companyName, phone, email, website, vendorTypeId])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error creating new vendor', error);
        res.sendStatus(500);
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const vendorId = req.params.id
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const companyName = req.body.companyName;
    const phone = req.body.phoneNumber;
    const email = req.body.email;
    const website = req.body.website;
    const vendorTypeId = req.body.vendorTypeId;
    const queryText = `UPDATE "vendor"
	                    SET "firstName" = $1, "lastName" = $2, "companyName" = $3, "phoneNumber" = $4, 
		                    "email" = $5, "website" = $6, "vendor_id" = $7
                        WHERE "id" = $8;`;
    pool.query(queryText, [firstName, lastName, companyName, phone, email, website, vendorTypeId, vendorId])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error creating new vendor', error);
        res.sendStatus(500);
    })
});


module.exports = router;