import { createDirectus, rest, createItem, updateItem, deleteItems, readItems, staticToken } from '@directus/sdk';
import 'dotenv/config'
import { getUserID } from "./helper.js"

const client = createDirectus('http://localhost:8055')
.with(staticToken(process.env.DIRECTUSTOKEN))
.with(rest());

const editBasics = async (req, res, JWT) => {
    try{
        
        const mail = JWT.verify(req.token)

        var user = await getUserID(mail)
        var userID
        var basics = req.basics
        var social = req.social
    
        if (user.length > 0)
        {        
            userID = user[0].id 
            await client.request(updateItem ('User', userID, basics))
            await client.request(updateItem ('SocialNetworks2', userID, social))
        }
        else
        {
            userID = (await client.request(createItem ('User', basics))).id
            social.user_id = userID
            await client.request(createItem ('SocialNetworks2', social))
        }

        if (req.basics.userpic)
        {
            var userImage = {
                image: req.basics.userpic,
                user_id: userID
            }
        
            await client.request(createItem ('User_Image', userImage))
        }

        return res.status(200).send({
            error: "Updated"
        });
    }
    catch (error){ 
        console.log (error);
        return res.status(400).send({
            error: "Can't update Basics"
        });
    }

}

const editCompany = async (req, res) =>{

    var user = null
    var company = null
    
    try
    {
        user = await getUserID(req.email)
    }
    catch (error) { 
        console.log (error);
        return res.status(400).send({
            error: "Can't get user"
        });
    }
    
    if (user.length > 0)
    {
        try{
            company = await client.request(readItems ('User_Company', {
                fields: [
                    'company.id'
                ],
                filter: {
                    _and: [
                        {
                            company: {
                                    uuid: {
                                    _eq: req.company.uuid,
                                }
                            }
                        },
                        {
                            user: {
                                _eq: user[0].id
                            }
                        },
                        {
                            role: {
                                _eq: 1
                            }
                        }
                    ]
                }
            }));
        }
        catch (error) { 
            console.log (error);
            return res.status(400).send({
                error: "Can't get companies"
            });
        }

        if (company.length > 0 )
        {
            try{
                await client.request(updateItem ('Company', company[0].company.id, {
                    logo: req.company.logo,
                    description: req.company.description,
                    website: req.company.website,
                    fields: req.company.fields
                }))
    
                if (req.company.hasOwnProperty('employees'))
                {
                    for (const item of req.company.employees)
                        {
                            if (item.role > 1)
                            {
                                const user = await getUserID(item.email)
                            
                                if (user.length > 0)
                                {
                                    const employee = {
                                        id: user[0].id,
                                        uuid: item.uuid,
                                        role: item.role,
                                        action: item.action
                                    }
            
                                    await editEmployee ( employee, company[0].company.id )
                                } 
                            }
                        }
                }
    
                return res.status(200).send({
                    result: "Updated"
                });
            }
            catch (error) { 
                console.log (error);
                return res.status(400).send({
                    error: "Can't update Company"
                });
            }
        }
        else
        {            
            try{
                const companyID = await client.request(createItem ('Company', {
                    name: req.company.name,
                    logo: req.company.logo,
                    description: req.company.description,
                    website: req.company.website,
                    fields: req.company.fields
                }))

                console.log (companyID)

                await client.request(createItem ('User_Company', {
                        user: user[0].id,
                        role: 1,
                        company: companyID.id
                    }))
            }
            catch (error) { 
                console.log (error);
                return res.status(400).send({
                    error: "Can't create Company"
                });
            }

            return res.status(200).send({
                result: "Updated"
            });
        }
    }

}

const editEmployee = async ( employee, companyId )=> {

    switch (employee.action)
    {
        case "remove":
            await client.request(deleteItems ('User_Company', {
                filter: {
                    _and: [
                        {
                            uuid: {
                                _eq: employee.uuid
                            }
                        },
                        {
                            company: {
                                _eq: companyId
                            }
                        }
                    ]
                }
            }))
            break;
        
        case "add":
            await client.request(createItem ('User_Company', {
                user: employee.id,
                company: companyId,
                role: employee.role,
            }))
            break;
        default:
            return;
    }

}

const editHire = async (req, res, JWT) =>{
    try{
        
        const mail = JWT.verify(req.token)
        const user = await getUserID(mail)
    
        if (user.length > 0)
        {
            const userID = user[0].id
            
            var hire = {
                available: req.available,
                types: req.types
            }

            await client.request(updateItem ('Hire', userID, hire))
            
            if (req.hasOwnProperty ('workFor'))
            {
                for (var company of req.workFor)
                    {
                        const item = await client.request(readItems ('User_Company', {
                                fields: [
                                    'id'
                                ],
                                filter: {
                                    _and: [
                                        {
                                            uuid: {
                                                _eq: company.uuid,
                                            }
                                        },
                                        {
                                            user: {
                                                _eq: userID
                                            }
                                        }
                                    ]
                                }
                        }));
        
                        await client.request(updateItem ('User_Company', userID, 
                            {
                                status: company.status
                            }
                        ))
                    } 
            }

            return res.status(200).send({
                error: "Updated"
            });
        }
    }
    catch (error){ 
        console.log (error);
        return res.status(400).send({
            error: "Can't update Hire"
        });
    }
}

export { editBasics, editCompany, editHire }