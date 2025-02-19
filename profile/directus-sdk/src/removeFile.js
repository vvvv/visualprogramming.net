import { createDirectus, rest, deleteFile, staticToken } from '@directus/sdk';

const removeFile = async(req, res) => {

    const client = createDirectus(process.env.DIRECTUSURL)
    .with(staticToken(process.env.DIRECTUSTOKEN))
    .with(rest());

    try{
       await client.request(deleteFile(req.body.id))
    }
    catch
    {
        return res.status(400).send("Can't delete file");
    } 

    return res.status(200).send("Deleted")
}

export default removeFile