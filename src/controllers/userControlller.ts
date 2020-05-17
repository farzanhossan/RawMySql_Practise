import { Request , Response, Express} from 'express'
import db from '../database/connection';
import fetch from 'node-fetch';
require('dotenv').config();
let jwt = require('jsonwebtoken');


export class UserController {

    /// Get All Users
    async getUsers(req: any, res: any){
        let sql1 = 'select * from users';
        // let result = await db.query('select * from users');
        // console.log(result);
        
        // return res.status(200).json({
        //     result
        // })
            db.query(sql1, (err:any , result: any)=>{
                if(err) throw err;
                return res.status(200).json({
                    result
                })
            })     
    }
}