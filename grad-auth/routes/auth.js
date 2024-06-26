
const express=require("express");
const router=express.Router();



router.get('/health', async (req, res) => {
    try {
        return res.status(STATUS.OK).send("Auth Service is Healthy");
    } catch (error) {
        return res.status(STATUS.INTERNAL_SERVER_ERROR).send();
    }
});

