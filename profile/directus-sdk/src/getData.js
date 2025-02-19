import { getUserInfo, getConstants } from "./helper.js"

const userInfo = async (req, res, JWT) =>
{
    var mail
    
    try{
        mail = JWT.verify(req.token)
    }
    catch (err)
    {
        return res.status(400).send({message: "Login failed", code: 0})
    }

    try{
        const info = await getUserInfo(mail)
        return res.status(200).send(info);
    }
    catch (err)
    {
        console.log (err)
        return res.status(400).send({message: "Profile doesn't exist", code: 1})
    }
}

const constants = async (res) =>
{
    const info = await getConstants().catch (()=>{
        return res.status(400).send({message: "Can't get constants", code: 2})
    })

    return res.status(200).send(info);
}

export { userInfo, constants }